import React, {useCallback, useState} from 'react'
import {Stack, Heading, useToast, ScrollView} from 'native-base'
import {useSelector, useDispatch} from 'react-redux'
import {colors, margin} from '../../constants/theme'
import AlbumCard from '../../components/albumCard/AlbumCard'
import Participant from '../../components/paricipants/Participant'
import Albums from './Album'
import Participants from './Participants'
import {setCurrentAlbum} from '../../redux/slices/albumSlice'

const ExternalScrollView = React.forwardRef(({children, ...props}, ref) => {
  //   const toast = useToast()
  const dispatch = useDispatch()
  const {albums, currentAlbum} = useSelector(state => state.album)

  const [showLabel, setShowLabel] = useState(true)

  const PARTICIPANTS = [{id: 0}, ...(currentAlbum.participants ?? [])]

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
        onPress={() => dispatch(setCurrentAlbum(item))}
      />
    ),
    [currentAlbum],
  )
  //   const onTouchPhoto = photoId => {
  //     navigation.navigate('PhotoView', {
  //       photoId,
  //       albumId: currentAlbum.id,
  //       photos: photosStore,
  //     })
  //   }

  return (
    <ScrollView ref={ref} {...props}>
      <Stack px="4">
        <Albums albums={albums} renderAlbum={renderAlbum} />
        <Participants participants={PARTICIPANTS} renderAvatar={renderAvatar} />
        <Heading size="sm" color={colors.TITLE} my={margin.MD}>
          Photos
        </Heading>
      </Stack>
      {children}
    </ScrollView>
  )
})

export default ExternalScrollView
