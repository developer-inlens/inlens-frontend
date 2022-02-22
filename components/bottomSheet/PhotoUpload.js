import React from 'react'
import {HStack, VStack, Text} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors} from '../../constants/theme'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {useSelector, useDispatch} from 'react-redux'
import {addPhoto} from '../../redux/slices/albumSlice'

const PhotoUpload = ({setVisible, albumId}) => {
  const dispatch = useDispatch()
  const onTapCamera = async () => {
    const result = await launchCamera(e => console.log(e))
    dispatch(
      addPhoto({
        id: albumId,
        photo: {
          id: Math.random().toString(),
          photo: result.assets[0].uri,
        },
      }),
    )
    setVisible(false)
  }
  const onTapGallery = async () => {
    const result = await launchImageLibrary(e => console.log(e))
    dispatch(
      addPhoto({
        id: albumId,
        photo: {
          id: Math.random().toString(),
          photo: result.assets[0].uri,
        },
      }),
    )
    setVisible(false)
  }

  return (
    <HStack justifyContent="space-around" width="full">
      <VStack
        alignItems="center"
        justifyContent="center"
        onTouchStart={onTapGallery}>
        <Icon name={'collections'} color={colors.PRIMARY} size={32} />
        <Text color={colors.WHITE}>Gallery</Text>
      </VStack>
      <VStack
        alignItems="center"
        justifyContent="center"
        onTouchStart={onTapCamera}>
        <Icon name={'camera'} color={colors.PRIMARY} size={32} />
        <Text color={colors.WHITE}>Camera</Text>
      </VStack>
    </HStack>
  )
}

export default PhotoUpload
