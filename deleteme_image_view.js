import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import {useSelector} from 'react-redux'
const {width, height} = Dimensions.get('window')

const ImageView = ({route}) => {
  const {albums} = useSelector(state => state.album)

  const [activeIndex, setActiveIndex] = useState(0)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const {photoId, albumId} = route.params
    setPhotos([...albums.filter(item => item.id === albumId)[0].photos])
    // setActiveIndex(photos.findIndex(item => item.id === photoId))
  }, [])
  useEffect(() => {
    const {photoId, albumId} = route.params
    if (photos.length > 0) {
      const i = photos.findIndex(item => item.id === photoId)
      setActiveIndex(i)
      scrollToActiveIndex(i)
    }
  }, [photos])

  const IMAGE_SIZE = 80
  const SPACING = 10

  const topRef = useRef()
  const thumbRef = useRef()

  const scrollToActiveIndex = index => {
    setActiveIndex(index)
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    })
    // if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
    //   thumbRef?.current?.scrollToOffset({
    //     offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
    //     animated: true,
    //   })
    // } else {
    //   thumbRef?.current?.scrollToOffset({
    //     offset: 0,
    //     animated: true,
    //   })
    // }
  }
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <FlatList
        ref={topRef}
        data={photos}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          console.log(ev.nativeEvent.contentOffset.x / width)
          // scrollToActiveIndex(
          //   Math.floor(ev.nativeEvent.contentOffset.x / width),
          // )
          // if (ev.nativeEvent.contentOffset.x / width === 0) {
          //   scrollToActiveIndex(
          //     Math.floor(ev.nativeEvent.contentOffset.x / width),
          //   )
          // } else {
          //   scrollToActiveIndex(
          //     Math.ceil(ev.nativeEvent.contentOffset.x / width),
          //   )
          // }
        }}
        renderItem={item => {
          return (
            <View
              style={{
                width,
                height: height,
              }}>
              <Image
                source={{uri: item.item.photo_semi_quality}}
                style={[StyleSheet.absoluteFillObject]}
                resizeMode="contain"
              />
            </View>
          )
        }}
      />

      {/* <FlatList
        ref={thumbRef}
        data={photos}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        style={{position: 'absolute', bottom: IMAGE_SIZE / 2}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{uri: item.photo_semi_quality}}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: 12,
                  marginRight: SPACING,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? '#fff' : 'transparent',
                }}
              />
            </TouchableOpacity>
          )
        }}
      /> */}
    </View>
  )
}

export default ImageView
