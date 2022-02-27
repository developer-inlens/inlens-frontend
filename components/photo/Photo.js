import React, {useState} from 'react'
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native'
// import {Image} from 'native-base'
//TODO: this library not works in expo, so change to native dev
// import FastImage from "react-native-fast-image";

//  <FastImage
//    style={{ width: 200, height: 200 }}
//    source={{
//      uri: "https://unsplash.it/400/400?image=1",
//      headers: { Authorization: "someAuthToken" },
//      priority: FastImage.priority.normal,
//    }}
//    resizeMode={FastImage.resizeMode.contain}
//  />;

const Photo = ({empty, photo}) => {
  if (empty) {
    return <View style={[styles.photo, styles.itemInvisible]} />
  }
  return (
    <ImageBackground
      source={{
        uri: `data:image/png;base64,${photo.photo_thumb_base64}`,
        cache: 'default',
      }}>
      <Image
        source={{
          uri: photo.photo_semi_quality,
          cache: 'default',
        }}
        style={styles.photo}
        resizeMode="stretch"
      />
    </ImageBackground>
  )
}

export default Photo

const styles = StyleSheet.create({
  photo: {
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 3,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
})
