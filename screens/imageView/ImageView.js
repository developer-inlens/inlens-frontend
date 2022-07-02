import React from 'react'
import ImageViewer from 'react-native-image-zoom-viewer'
import {useState} from 'react-redux'
const ImageView = ({route}) => {
  const {currentAlbum} = useState()
  return (
    <ImageViewer
      imageUrls={[...currentAlbum.photos]}
      index={route.params.photos.findIndex(
        item => item.id === route.params.photoId,
      )}
    />
  )
}

export default ImageView
