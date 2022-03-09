import React, {useCallback, useState} from 'react'
import {Stack, Heading, Fab} from 'native-base'
import {FlatList} from 'react-native'
import {useSelector} from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors, margin, size} from '../../constants/theme'
import AlbumCard from '../../components/albumCard/AlbumCard'
import Participant from '../../components/paricipants/Participant'
import BottomModelSheet from '../../components/bottomSheet/BottomSheet'
import UploadPhoto from '../../components/bottomSheet/PhotoUpload'
import Photos from './Photos'
import Albums from './Album'
import Participants from './Participants'

const HomeScreen = ({navigation}) => {
  const {albums} = useSelector(state => state.album)

  const [currentAlbum, setCurrentAlbum] = useState(albums[0])
  const [chooseUpload, setChooseUpload] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const PHOTOS = [
    ...(albums.filter(item => item.id === currentAlbum.id)[0].photos ?? []),
  ]

  const PARTICIPANTS = [
    {id: 0},
    ...(albums.filter(item => item.id === currentAlbum.id)[0].participants ??
      []),
  ]

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

  return (
    <>
      <FlatList
        contentContainerStyle={{paddingBottom: 0}}
        ListHeaderComponent={
          <Stack px="2">
            <Albums albums={albums} renderAlbum={renderAlbum} />
            <Participants
              participants={PARTICIPANTS}
              renderAvatar={renderAvatar}
            />
            <Heading size="sm" color={colors.TITLE} my={margin.MD}>
              Photos
            </Heading>
            <Photos photos={PHOTOS} />
          </Stack>
        }
        refreshing={refresh}
        onRefresh={handleRefresh}
      />
      <Fab
        position="absolute"
        size="sm"
        backgroundColor={colors.PRIMARY}
        // label="Upload"
        icon={
          <Icon
            name={'file-upload'}
            color={colors.BLACK}
            size={size.ICON_SIZE}
          />
        }
        // onPress={toggleBottomNavigationView}
      />
      <BottomModelSheet
        visible={chooseUpload}
        setVisible={toggleBottomNavigationView}
        Body={UploadPhoto}
        title={'New Album'}
        headerVisible={false}
        albumId={currentAlbum.id}
      />
    </>
  )
}

export default HomeScreen
