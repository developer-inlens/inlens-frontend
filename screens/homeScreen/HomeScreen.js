import React, {useCallback, useState, useEffect} from 'react'
import {Stack, Heading, Spinner, useToast, ScrollView, Box} from 'native-base'
import {Dimensions, TouchableOpacity, View} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors, margin, size} from '../../constants/theme'
import AlbumCard from '../../components/albumCard/AlbumCard'
import Participant from '../../components/paricipants/Participant'
import BottomModelSheet from '../../components/bottomSheet/BottomSheet'
import UploadPhoto from '../../components/bottomSheet/PhotoUpload'
import Albums from './Album'
import Participants from './Participants'
import {ScaledSheet} from 'react-native-size-matters'
// import PhotosView from './recyclerView/Index'
import {RecyclerListView} from 'recyclerlistview'
import PropTypes from 'prop-types'
import {fetchMorePhotos} from '../../redux/slices/albumSlice'

const {height} = Dimensions.get('window')

const HomeScreen = React.forwardRef(({children, ...props}, ref) => {
  const toast = useToast()
  const dispatch = useDispatch()
  const {albums} = useSelector(state => state.album)

  const [currentAlbum, setCurrentAlbum] = useState(albums[0])
  const [chooseUpload, setChooseUpload] = useState(false)
  const [showLabel, setShowLabel] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loading, setLoading] = useState(false)

  const PARTICIPANTS = [
    {id: 0},
    ...(albums.filter(item => item.id === currentAlbum.id)[0].participants ??
      []),
  ]

  const toggleBottomNavigationView = () => {
    setChooseUpload(!chooseUpload)
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
  const photosStore = []

  const onTouchPhoto = photoId => {
    navigation.navigate('PhotoView', {
      photoId,
      albumId: currentAlbum.id,
      photos: photosStore,
    })
  }

  const storePhotos = data => {
    dispatch(
      fetchMorePhotos({
        id: currentAlbum.id,
        photo: data,
      }),
    )
    // photosStore.push(...data)
  }

  // Overriding PropType because it doesn't expect a forwardRef response even though that
  // works without issue
  // RecyclerListView.propTypes.externalScrollView = PropTypes.object

  if (loading) {
    return (
      <Box
        height={height}
        backgroundColor="red"
        alignItems="center"
        justifyContent="center">
        <Spinner />
      </Box>
    )
  }
  console.l
  return (
    <ScrollView ref={ref} {...props}>
      <Stack px="4">
        <Albums albums={albums} renderAlbum={renderAlbum} isLoaded={isLoaded} />
        <Participants
          participants={PARTICIPANTS}
          renderAvatar={renderAvatar}
          isLoaded={isLoaded}
        />
        <Heading size="sm" color={colors.TITLE} my={margin.MD}>
          Photos
        </Heading>
        {/* </Skeleton.Text> */}
      </Stack>
      {children}
      {/* <PhotosView
        scrollViewWithHeader={ScrollViewWithHeader}
        onTouchPhoto={onTouchPhoto}
        storePhotos={storePhotos}
      /> */}
      <TouchableOpacity onPress={toggleBottomNavigationView} style={styles.fab}>
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
    </ScrollView>
  )
})

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
