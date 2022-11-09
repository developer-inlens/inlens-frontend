import React from 'react'
import ImageViewer from 'react-native-image-zoom-viewer'
import {useSelector} from 'react-redux'
const ImageView = ({route}) => {
  const {currentAlbum} = useSelector(state => state.album)
  // ask backend dev to change original_url to url in api response
  // Need Id of photo along with home view api
  console.log(
    '!!',
    route.params,
    currentAlbum.photos,
    currentAlbum.photos.map(item => item.id).indexOf(route.params.id),
  )
  return (
    <ImageViewer
      imageUrls={currentAlbum.photos.map(item => ({url: item.original_url}))}
      index={0}
    />
  )
}

export default ImageView
