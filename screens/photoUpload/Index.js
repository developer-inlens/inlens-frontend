import React, {useEffect, useState} from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  NativeModules,
  PermissionsAndroid,
  Image,
  FlatList,
} from 'react-native'
import {
  VStack,
  Text,
  Box,
  Checkbox,
  useToast,
  Heading,
  Alert,
} from 'native-base'
import {colors, margin, size} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {concatMap, Subject} from 'rxjs'
import BackgroundService from 'react-native-background-actions'
import axios from '../../utils/axios'
import mime from 'mime'
import {uploadPhoto} from '../../redux/actions/album'
import {useSelector, useDispatch} from 'react-redux'
import {addPhoto, photoUploadCompleted} from '../../redux/slices/albumSlice'
import {useNavigation} from '@react-navigation/native'
import {Toast} from '../../components/toast/Toast'
import dayjs from 'dayjs'
import uuid from 'react-native-uuid'
// import convert from '../../utils/webpConverter'
// import {cpus} from 'os'
const uploadQueue = new Subject()
uploadQueue.pipe(concatMap(({data, processor}) => processor(data))).subscribe()

const Index = () => {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [selectedItems, setSelectedItems] = useState([])
  const [dates, setDates] = useState([])
  const [count, setCount] = useState(0)

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const toast = useToast()

  const {albums, currentAlbum} = useSelector(state => state.album)

  useEffect(() => {
    fetchMoreData()
  }, [])

  const veryIntensiveTask = async taskDataArguments => {
    const {data} = taskDataArguments
    // dispatch(
    //   addPhoto({
    //     albumId: currentAlbum.AlbumId,
    //     photo: {
    //       id: data.id,
    //       original_url: data.url,
    //       semi_original_url: data.url,
    //       uploading: true,
    //     },
    //   }),
    // )
    try {
      let formdata = new FormData()

      const newImageUri = 'file:///' + data.url.split('file:/').join('')
      formdata.append('file', {
        uri: newImageUri,
        type: mime.getType(newImageUri),
        name: newImageUri.split('/').pop(),
      })
      formdata.append('album_id', '6353cb5a11d6d6720018512f')
      // await uploadPhoto(formdata)

      // imitate api call
      // change date based on api response
      // setTimeout(() => {
      //   dispatch(
      //     photoUploadCompleted({
      //       albumId: currentAlbum.AlbumId,
      //       photo: {
      //         loacalId: data.id,
      //         id: data.id, // replace this with id from backend
      //         original_url: data.url,
      //         semi_original_url: data.url,
      //         uploading: true,
      //       },
      //     }),
      //   )
      // }, 3000)

      await BackgroundService.stop()
    } catch (err) {
      console.log('***', err)
      await BackgroundService.stop()
    }
  }
  const startUpload = async data => {
    console.log('**', data)
    const options = {
      taskName: 'FileUpload',
      taskTitle: 'Uploading...',
      taskDesc: data.url ?? data.timestamp,
      taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
      },
      color: '#ff00ff',
      linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
      parameters: {
        delay: 1000,
        data,
      },
    }

    await BackgroundService.start(veryIntensiveTask, options, data)
  }

  const handleUpload = () => {
    const images = []
    photos.forEach(item => {
      if (selectedItems.includes(item.id)) {
        images.push(item)
      }
    })
    images.forEach(item =>
      uploadQueue.next({
        data: item,
        processor: startUpload.bind(this),
      }),
    )
    // toast.show({
    //   render: () => {
    //     return (
    //       <Box
    //         bg="#272727"
    //         px="5"
    //         py="5"
    //         rounded="md"
    //         mb={5}
    //         flexDir="row"
    //         justifyContent="center"
    //         alignItems="center">
    //         <Alert.Icon color="#FFCC80" />
    //         <Text marginLeft={5}>
    //           Photos will be uploaded background. Check notification for
    //           progress
    //         </Text>
    //       </Box>
    //     )
    //   },
    // })
    Toast(toast)
    navigation.pop()
  }
  const formatDate = date => dayjs.unix(date).format('DD-MM-YYYY')

  const fetchMoreData = async () => {
    if (!loading) {
      setLoading(true)
      const {MediaModule} = NativeModules
      try {
        const per = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        )
        if (per === 'granted') {
          MediaModule.createMediaEvent(10, count, async (err, res) => {
            if (err) return console.log(err)
            // console.log('$$', res)
            const data = []
            const availbaleDates = [...dates]
            res.forEach((item, index) => {
              const res = item.split('~inlens~')
              if (!availbaleDates.includes(formatDate(res[0]))) {
                availbaleDates.push(formatDate(res[0]))

                if (
                  photos.length > 0 &&
                  photos[photos.length - 1].index % 2 !== 0
                ) {
                  data.push({
                    id: uuid.v4(),
                    title: '',
                  })
                }
                data.push(
                  {
                    id: uuid.v4(),
                    title: formatDate(res[0]),
                  },
                  {
                    id: uuid.v4(),
                    title: '',
                  },
                )
              }
              data.push({
                id: uuid.v4(),
                timestamp: res[0],
                url: 'file://' + res[1],
                index: index + count,
              })
            })
            setPhotos(phts => [...phts, ...data])
            setCount(ct => ct + res.length)
            // console.log('*****', dates, availbaleDates)
            setDates(dd => [...new Set([...dd, ...availbaleDates])])

            //   this.setState({photos: [...this.state.photos, ...data]}, () =>
            //     this.setState({
            //       dataProvider: this.state.dataProvider.cloneWithRows(
            //         this.state.photos,
            //       ),
            //     }),
            //   )
          })
        }
      } catch (err) {
        console.log('err', err)
      }
      setLoading(false)
    }
  }

  const selectItems = item => {
    if (selectedItems.includes(item.id)) {
      const newListItems = selectedItems.filter(
        listItem => listItem !== item.id,
      )
      return setSelectedItems([...newListItems])
    }
    setSelectedItems(items => [...items, item.id])
    // this.setState({selectedItems: [...selectedItems, item.id]})
  }

  const renderItem = ({item}) => {
    if (item.url) {
      return (
        <TouchableOpacity
          onPress={selectedItems.length > 0 ? () => selectItems(item) : null}
          onLongPress={() => selectItems(item)}
          style={{
            flex: 1,
            margin: 3,
            backgroundColor: 'lightgrey',
            height: 200,
            width: 200,
          }}>
          <Image
            style={{
              flex: 1,
            }}
            // onLoad={this.handleOnLoad}
            resizeMode="cover"
            source={{
              uri: item.url,
            }}
          />
          {selectedItems.includes(item.id) && (
            <View
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
              }}>
              <Checkbox
                isChecked
                // colorScheme="green"
                // backgroundColor="#03DAC5"
                // bgColor="#03DAC5"
                // color="white"
                accessibilityLabel={item.id.toString()}
              />
            </View>
          )}
        </TouchableOpacity>
      )
    }
    return (
      <Text
        pl={5}
        py={4}
        color={colors.WHITE_PRIMARY}
        bold={true}
        style={{flex: 1}}>
        {item.title}
      </Text>
    )
  }

  return (
    <VStack height="100%">
      <FlatList
        // contentContainerStyle={{paddingBottom: 0}}
        // data={isLoaded ? PHOTOS : skl}
        // data={photos}
        numColumns={2}
        // renderItem={renderPhotos}

        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // extraData={selectedId}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMoreData}
        // refreshing={refresh}
        // onRefresh={handleRefresh}
      />
      <TouchableOpacity onPress={handleUpload} style={styles.fab}>
        <Icon name={'file-upload'} color={colors.BLACK} size={size.ICON_SIZE} />
        {selectedItems.length > 0 && (
          <View style={styles.chip}>
            <Text>{selectedItems.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </VStack>
  )
}

export default Index

const styles = StyleSheet.create({
  fab: {
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'absolute',
    bottom: 10,
    right: 16,
    height: 56,
    minWidth: 56,
    backgroundColor: colors.PRIMARY,
    borderRadius: 28,
    flexDirection: 'row',
    // position: 'relative',
  },
  chip: {
    backgroundColor: '#EF9A9A',
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    top: -10,
    right: 0,
  },
})
