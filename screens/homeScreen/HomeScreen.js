import React, {useCallback, useState, useEffect} from 'react'
import {
  Stack,
  Heading,
  Text,
  Spinner,
  Skeleton,
  useToast,
  View,
  ScrollView,
} from 'native-base'
import {FlatList, Dimensions, TouchableOpacity} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors, margin, size} from '../../constants/theme'
import AlbumCard from '../../components/albumCard/AlbumCard'
import Participant from '../../components/paricipants/Participant'
import BottomModelSheet from '../../components/bottomSheet/BottomSheet'
import UploadPhoto from '../../components/bottomSheet/PhotoUpload'
import Albums from './Album'
import Participants from './Participants'
import {fetchMorePhotos} from '../../redux/slices/albumSlice'
import {ScaledSheet} from 'react-native-size-matters'
import Photo from '../../components/photo/Photo'
import axios from 'axios'
import uuid from 'react-native-uuid'

const {width} = Dimensions.get('window')

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const toast = useToast()

  const {albums} = useSelector(state => state.album)

  const [currentAlbum, setCurrentAlbum] = useState(albums[0])
  const [chooseUpload, setChooseUpload] = useState(false)
  const [showLabel, setShowLabel] = useState(true)
  const [yOffset, setYoffset] = useState({prev: 0, current: 0})
  const [refresh, setRefresh] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [albumPhotos, setAlbumPhotos] = useState([])
  const [totalPhotosCount, seTotalPhotosCount] = useState(10)
  const [loading, setLoading] = useState(false)

  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)

  const PHOTOS = [
    ...(albums.filter(item => item.id === currentAlbum.id)[0].photos ?? []),
  ]

  const PARTICIPANTS = [
    {id: 0},
    ...(albums.filter(item => item.id === currentAlbum.id)[0].participants ??
      []),
  ]

  useEffect(() => {
    fetchMoreData()
  }, [])

  const toggleBottomNavigationView = () => {
    setChooseUpload(!chooseUpload)
  }

  const handleRefresh = () => {
    setRefresh(true)
    setTimeout(() => setRefresh(false), 3000)
  }

  const renderAvatar = useCallback(
    ({item}) => (
      <Participant
        id={item.id}
        photo={item.photo}
        color={currentAlbum.color}
        name={item.name}
      />
    ),
    [currentAlbum],
  )

  const renderAlbum = useCallback(
    ({item}) => (
      <AlbumCard
        name={item.title}
        color={item.color}
        isSelected={item.id === currentAlbum?.id}
        onPress={() => setCurrentAlbum(item)}
      />
    ),
    [currentAlbum],
  )

  const renderPhotos = ({item}) => {
    if (!isLoaded) {
      return (
        <Skeleton
          h={width / 2}
          isLoaded={isLoaded}
          width={width / 2}
          borderWidth={1}
        />
      )
    }
    return (
      <Photo photo={item} onTouchPhoto={onTouchPhoto} isLoaded={isLoaded} />
    )
  }

  const onTouchPhoto = photoId => {
    navigation.navigate('PhotoView', {
      photoId,
      albumId: currentAlbum.id,
      photos: albumPhotos,
      index: albumPhotos.findIndex(item => item.id === photoId),
    })
  }

  const fetchMoreData = async () => {
    try {
      console.log('##', totalPhotosCount, totalPhotosCount - PHOTOS.length)
      const baseUrl =
        'https://fa92-2405-201-f003-9870-d407-ba23-5631-2eec.in.ngrok.io'
      if (PHOTOS.length === totalPhotosCount) return
      if (loading) return
      setLoading(true)
      const res = await axios.get(
        `${baseUrl}/api/photo?limit=${limit}&offset=${PHOTOS.length}`,
      )
      seTotalPhotosCount(res.data.count)
      if (res.data.photos.length > 0) {
        dispatch(
          fetchMorePhotos({
            id: currentAlbum.id,
            photo: res.data.photos,
            offset: 10,
          }),
        )
        const newImages = res.data.photos.map(item => ({
          ...item,
          props: {},
        }))
        setAlbumPhotos(items => [...items, ...newImages])
      }

      setLoading(false)
      if (!isLoaded) {
        setIsLoaded(true)
      }
    } catch (err) {
      setLoading(false)
      if (!isLoaded) {
        setIsLoaded(true)
      }
      toast.show({
        description: 'Check your connection',
      })
    }
  }
  const skl = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]
  const dummy = Array.from({length: 6}, () => ({
    id: '0' + Math.floor(Math.random() * 9),
  }))
  return (
    <>
      <FlatList
        contentContainerStyle={{paddingBottom: 0}}
        ListHeaderComponent={
          <Stack px="4">
            <Albums
              albums={albums}
              renderAlbum={renderAlbum}
              isLoaded={isLoaded}
            />
            <Participants
              participants={PARTICIPANTS}
              renderAvatar={renderAvatar}
              isLoaded={isLoaded}
            />
            <Skeleton.Text
              lines={1}
              my={margin.MD}
              size="sm"
              isLoaded={isLoaded}>
              <Heading size="sm" color={colors.TITLE} my={margin.MD}>
                Photos
              </Heading>
            </Skeleton.Text>
          </Stack>
        }
        // data={isLoaded ? PHOTOS : skl}
        data={PHOTOS}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPhotos}
        ItemSeparatorComponent={() => (
          <View style={{height: isLoaded ? 5 : 0}} />
        )}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        onScrollBeginDrag={e => {
          // if (yOffset.current < yOffset.prev) {
          //   setShowLabel(true)
          // } else {
          //   setShowLabel(false)
          // }
          // setYoffset({
          //   prev: yOffset.current,
          //   current: e.nativeEvent.contentOffset.y,
          // })
          setShowLabel(false)
        }}
        onScrollToTop={e => {
          if (!showLabel) {
            setShowLabel(true)
          }
        }}
        onScroll={e => {
          // if (yOffset.current < yOffset.prev) {
          //   setShowLabel(true)
          // } else {
          //   setShowLabel(false)
          // }
          // setYoffset({
          //   prev: yOffset.current,
          //   current: e.nativeEvent.contentOffset.y,
          // })
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && <Spinner color={colors.PRIMARY} size="lg" />
          // <ScrollView>
          //   <View flexDirection="row" flexWrap="wrap">
          //     {Array.from(
          //       {length: totalPhotosCount - PHOTOS.length},
          //       (_, index) => (
          //         <View
          //           key={index}
          //           h={width / 2}
          //           isLoaded={isLoaded}
          //           width={width / 2}
          //           borderWidth={1}
          //           backgroundColor="rose.900"
          //         />
          //       ),
          //     )}
          //   </View>
          // </ScrollView>
        }
        onEndReached={fetchMoreData}
        refreshing={refresh}
        onRefresh={handleRefresh}
      />
      <TouchableOpacity
        // onPress={toggleBottomNavigationView}
        style={styles.fab}>
        <Icon name={'file-upload'} color={colors.BLACK} size={size.ICON_SIZE} />
        {showLabel && (
          <Heading mx={2} size="sm" color="black">
            Upload
          </Heading>
        )}
      </TouchableOpacity>
      <BottomModelSheet
        visible={chooseUpload}
        setVisible={toggleBottomNavigationView}
        Body={UploadPhoto}
        title={'New Album'}
        headerVisible={false}
        albumId={currentAlbum.id}
      />
      {/* <ScrollView>
        <View flexDirection="row" flexWrap="wrap">
          {Array.from(
            {length: totalPhotosCount - PHOTOS.length},
            (_, index) => (
              <View
                key={index}
                h={width / 2}
                isLoaded={isLoaded}
                width={width / 2}
                borderWidth={1}
                backgroundColor="rose.900"
              />
            ),
          )}
        </View>
      </ScrollView> */}
    </>
  )
}

export default HomeScreen

const styles = ScaledSheet.create({
  fab: {
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    // width: 100,
    padding: 10,
    position: 'absolute',
    bottom: 10,
    right: 16,
    height: 56,
    minWidth: 56,
    backgroundColor: colors.PRIMARY,
    borderRadius: 28,
    flexDirection: 'row',
  },
  fab_text: {},
})
