import React from 'react'
import ImageViewer from 'react-native-image-zoom-viewer'
import {useSelector} from 'react-redux'
const ImageView = ({route}) => {
  const {currentAlbum} = useSelector(state => state.album)
  // ask backend dev to change original_url to url in api response
  // Need Id of photo along with home view api
  console.log(
    '!!',
    route.params.id,
    // currentAlbum.photos,
    currentAlbum.photos.filter(t => t.photo_id === route.params.id),
    // .map(item => item.photo_id)
    // .indexOf(route.params.id),
  )
  return (
    <ImageViewer
      imageUrls={currentAlbum.photos.map(item => ({url: item.url}))}
      index={currentAlbum.photos
        .map(item => item.photo_id)
        .indexOf(route.params.id)}
    />
  )
}

export default ImageView
