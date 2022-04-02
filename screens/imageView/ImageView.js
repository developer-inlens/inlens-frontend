import {StyleSheet, Dimensions, View, FlatList, Image} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import {useSelector} from 'react-redux'
const {width, height} = Dimensions.get('window')

const ImageView = ({route}) => {
  const {albums} = useSelector(state => state.album)

  // const [activeIndex, setActiveIndex] = useState(0)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const {albumId} = route.params
    setPhotos([...albums.filter(item => item.id === albumId)[0].photos])
  }, [])
  useEffect(() => {
    const {photoId} = route.params
    if (photos.length > 0) {
      let l = 0
      photos.map(item => {
        if (item.id === photoId) {
          l++
        }
      })
      const i = photos.findIndex(item => item.id === photoId)
      // setActiveIndex(i)
      scrollToActiveIndex(i)
    }
  }, [photos])

  const topRef = useRef()

  const scrollToActiveIndex = index => {
    // setActiveIndex(index)
    topRef.current.scrollToIndex({
      index: index,
      animated: true,
    })
  }
  const getItemLayout = (data, index) => {
    return {
      length: width,
      offset: width * index,
      index,
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <FlatList
        ref={topRef}
        // initialScrollIndex={activeIndex}
        // initialNumToRender={photos.length}
        getItemLayout={getItemLayout}
        data={photos}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        pinchGestureEnabled={true}
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
    </View>
  )
}

export default ImageView
