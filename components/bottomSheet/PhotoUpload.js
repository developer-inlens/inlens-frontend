import React, {useEffect} from 'react'
import {NativeModules, PermissionsAndroid} from 'react-native'
import {HStack, VStack, Text} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors} from '../../constants/theme'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {useSelector, useDispatch} from 'react-redux'
import {addPhoto} from '../../redux/slices/albumSlice'
import BackgroundService from 'react-native-background-actions'
import {concatMap, Subject} from 'rxjs'
import axios from '../../utils/axios'
import mime from 'mime'
import ImagePicker from 'react-native-image-crop-picker'
const uploadQueue = new Subject()
uploadQueue.pipe(concatMap(({data, processor}) => processor(data))).subscribe()

const PhotoUpload = ({setVisible, albumId}) => {
  const dispatch = useDispatch()

  const {MediaModule} = NativeModules
  console.log('@@@', MediaModule)
  // MediaModule.createMediaEvent(res => console.log(res))
  const test = async () => {
    try {
      const per = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      )
      console.log('result', per)
      if (per === 'granted') {
        console.log('**')
        MediaModule.createMediaEvent(10, 0, (err, res) => {
          if (err) return console.log(err)
          const data = res.map(item => {
            const res = item.split('~inlens~')
            return {timestamp: res[0], url: res[1]}
          })
          console.log(data)
        })
        // console.log('result222', result)
      }
    } catch (err) {
      console.log('err', err)
    }
  }
  useEffect(() => {
    // test()
  }, [])

  const veryIntensiveTask = async taskDataArguments => {
    const {data} = taskDataArguments
    try {
      console.log('##,', data)
      const newImageUri = 'file:///' + data.path.split('file:/').join('')

      let formdata = new FormData()
      formdata.append('file', {
        uri: newImageUri,
        type: mime.getType(newImageUri),
        name: newImageUri.split('/').pop(),
      })
      // formdata.append('file_name', 'test.png')
      // formdata.append('album_id', '62c061791fd932dea81b6210')
      console.log('@@@', JSON.stringify(formdata))
      try {
        let res = await fetch(
          'https://inlens-api-primary.azurewebsites.net/api/photo/upload',
          {
            method: 'post',
            body: formdata,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        let responseJson = await res.json()
        console.log('##', responseJson)
      } catch (err) {
        console.log('&&&', JSON.stringify(err))
      }

      // dispatch(
      //   addPhoto({
      //     id: albumId,
      //     photo: {
      //       id: res.data.id,
      //       photo_semi_quality: res.data.url,
      //     },
      //   }),
      // )
      // setVisible(false)
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
      taskDesc: data.filename ?? data.modificationDate,
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

  const onTapCamera = async () => {
    const result = await launchCamera(e => console.log(e))
    uploadQueue.next({
      data: result,
      processor: startUpload.bind(this),
    })
  }
  const onTapGallery = async () => {
    // const result = await launchImageLibrary()
    const result = await ImagePicker.openPicker({
      multiple: true,
    })
    console.log('!!result', result)
    // return
    result.forEach(item =>
      uploadQueue.next({
        data: item,
        processor: startUpload.bind(this),
      }),
    )

    // dispatch(
    //   addPhoto({
    //     id: albumId,
    //     photo: {
    //       id: Math.random().toString(),
    //       photo_semi_quality: result.assets[0].uri,
    //     },
    //   }),
    // )
    // setVisible(false)
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
