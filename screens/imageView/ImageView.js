import React from 'react'
import ImageViewer from 'react-native-image-zoom-viewer'
const ImageView = ({route}) => {
  return (
    <ImageViewer imageUrls={route.params.photos} index={route.params.index} />
  )
}

export default ImageView
