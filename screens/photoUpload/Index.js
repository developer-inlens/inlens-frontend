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
import {VStack, Text, Heading, Checkbox} from 'native-base'
import {colors, margin, size} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {concatMap, Subject} from 'rxjs'
import BackgroundService from 'react-native-background-actions'
import axios from '../../utils/axios'
import convert from '../../utils/webpConverter'

const uploadQueue = new Subject()
uploadQueue.pipe(concatMap(({data, processor}) => processor(data))).subscribe()

const index = () => {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    fetchMoreData()
  }, [])

  const veryIntensiveTask = async taskDataArguments => {
    const {data} = taskDataArguments
    try {
      let formdata = new FormData()
      const temp = await convert(data.url)
      console.log('******', temp)
      return
      formdata.append('productImage', {
        uri: data.url,
        type: 'png',
        name: data.url ?? data.id,
      })
      formdata.append('file_name', 'test.png')
      formdata.append('album_id', '62c061791fd932dea81b6210')
      console.log('@@@********', formdata)
      // const res = await axios({'Content-Type': 'multipart/form-data'}).post(
      //   '/api/v1/user/register',
      //   formdata,
      // )
      // let res = await fetch(
      //   'https://inlens-api-primary.azurewebsites.net/api/photo/upload',
      //   {
      //     method: 'post',
      //     body: formdata,
      //     headers: {
      //       'Content-Type': 'multipart/form-data; ',
      //     },
      //   },
      // )
      let responseJson = await res.json()
      // const res = axios().get('/')

      // dispatch(
      //   addPhoto({
      //     id: albumId,
      //     photo: {
      //       id: res.data.id,
      //       photo_semi_quality: res.data.url,
      //     },
      //   }),
      // )
      console.log('&&&&', res.data)
      setVisible(false)
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
  }

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
          MediaModule.createMediaEvent(10, photos.length, async (err, res) => {
            if (err) return console.log(err)

            const data = res.map((item, index) => {
              const res = item.split('~inlens~')
              return {
                id: (index + Math.random()) * res[0],
                timestamp: res[0],
                url: 'file://' + res[1],
              }
            })
            setPhotos(phts => [...phts, ...data])
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
    <VStack>
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

export default index

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
