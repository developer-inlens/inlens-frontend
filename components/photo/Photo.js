import React from 'react'
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native'
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

const numColumns = 3
const Photo = ({empty, uri}) => {
  let Image_Http_URL = {
    uri: uri,
  }

  if (empty) {
    return <View style={[styles.photo, styles.itemInvisible]} />
  }
  return (
    <Image source={Image_Http_URL} style={styles.photo} resizeMode="stretch" />
  )
}

export default Photo

const styles = StyleSheet.create({
  photo: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
})
