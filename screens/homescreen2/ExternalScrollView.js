import React, {useCallback, useState} from 'react'
import {Stack, Box, Alert, useToast, ScrollView, Text} from 'native-base'
import {useSelector, useDispatch} from 'react-redux'
import {colors, margin} from '../../constants/theme'
import AlbumCard from '../../components/albumCard/AlbumCard'
import Participant from '../../components/paricipants/Participant'
import Albums from './Album'
import Participants from './Participants'
import {setCurrentAlbum} from '../../redux/slices/albumSlice'
import {getAlbumDetails} from '../../redux/actions/album'
import {Toast} from '../../components/toast/Toast'

const ExternalScrollView = React.forwardRef(({children, ...props}, ref) => {
  const toast = useToast()
  const dispatch = useDispatch()
  const {albums, currentAlbum} = useSelector(state => state.album)
  const [loading, setLoading] = useState(false)
  const [showLabel, setShowLabel] = useState(true)

  const PARTICIPANTS = [{user_id: 0}, ...(currentAlbum?.participants ?? [])]

  const renderAvatar = useCallback(
    ({item}) => (
      <Participant
        id={item.user_id}
        photo={item.photo}
        color={currentAlbum?.color}
        name={item.initial}
      />
    ),
    [currentAlbum],
  )
  const onSelectAlbum = async id => {
    // Toast(toast)
    console.log('HIII', loading)
    if (loading) return
    setLoading(true)
    // dispatch(
    //   setCurrentAlbum({
    //     AlbumId: id,
    //   }),
    // )
    const {data, err} = await getAlbumDetails(id)
    if (err) {
      setLoading(false)
      toast.show({
        render: () => {
          return (
            <Box
              bg="#272727"
              px="5"
              py="5"
              rounded="md"
              mb={5}
              flexDir="row"
              justifyContent="center"
              alignItems="center">
              <Alert.Icon color="#FFCC80" />
              <Text marginLeft={5} color="white">
                Something went wrong
              </Text>
            </Box>
          )
        },
      })
    }
    console.log('@@@@@@@######', data)
    setLoading(false)

    dispatch(
      setCurrentAlbum({
        AlbumId: id,
        participants: data.participants,
        photos: data.photos,
      }),
    )
  }
  const renderAlbum = useCallback(
    ({item}) => (
      <AlbumCard
        id={item.AlbumId}
        name={item.album_title}
        color={item.color}
        isSelected={item.AlbumId === currentAlbum?.AlbumId}
        onPress={() => onSelectAlbum(item.AlbumId)}
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
        <Text fontSize="md" color={colors.TITLE} my={margin.MD}>
          Photos
        </Text>
      </Stack>
      {loading ? <Text color="white">Loading</Text> : children}
    </ScrollView>
  )
})

export default ExternalScrollView
