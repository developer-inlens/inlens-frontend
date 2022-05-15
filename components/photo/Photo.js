import React, {useState} from 'react'
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import {Skeleton} from 'native-base'
import {ScaledSheet} from 'react-native-size-matters'

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

const {width} = Dimensions.get('window')

const Photo = ({photo, onTouchPhoto, isLoaded}) => {
  if (photo.id[0] === '0') {
    return <View style={styles.dummyImage} />
  }
  return (
    <Skeleton
      h={width / 2}
      isLoaded={isLoaded}
      width={width / 2}
      borderWidth={1}>
      <TouchableOpacity onPress={() => onTouchPhoto(photo.id)}>
        <ImageBackground
          source={{
            uri: `data:image/png;base64,${photo.photo_thumb_base64}`,
            // cache: 'default',
          }}
          style={styles.photo}
          resizeMode="cover">
          <Image
            source={{
              uri: photo.photo_semi_quality,
              // cache: 'default',
            }}
            style={styles.photo}
            resizeMode="cover"
          />
        </ImageBackground>
      </TouchableOpacity>
    </Skeleton>
  )
}

export default React.memo(Photo)

const styles = ScaledSheet.create({
  photo: {
    // width: Dimensions.get('window').width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: width / 2 - 1,
    height: width / 2 - 1,
    // margin: 1,
    // marginBottom: 16,
    // height: photo.aspectRatio
    //   ? (Dimensions.get('window').width / 2) * photo.aspectRatio
    //   : Dimensions.get('window').width / 2,
  },
  dummyImage: {
    width: width / 2 - 3,
    height: width / 2 - 3,
    backgroundColor: 'red',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
})
