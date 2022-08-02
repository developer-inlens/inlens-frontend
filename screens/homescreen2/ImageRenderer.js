import React from 'react'
import {Image, Platform, ImageBackground, TouchableOpacity} from 'react-native'

const isIOS = Platform.OS === 'ios'

export class ImageRenderer extends React.Component {
  shouldComponentUpdate(newProps) {
    return this.props.image !== newProps.image
  }
  // componentWillUpdate() {
  //   //On iOS while recycling till the new image is loaded the old one remains visible. This forcefully hides the old image.
  //   //It is then made visible onLoad
  //   if (isIOS && this.imageRef) {
  //     this.imageRef.setNativeProps({
  //       opacity: 0,
  //     })
  //   }
  // }
  // handleOnLoad = () => {
  //   if (isIOS && this.imageRef) {
  //     this.imageRef.setNativeProps({
  //       opacity: 1,
  //     })
  //   }
  // }
  render() {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          margin: 3,
          backgroundColor: 'lightgrey',
        }}
        onPress={() => this.props.onTouchPhoto(this.props.image.id)}>
        <ImageBackground
          source={{
            uri: `data:image/png;base64,${this.props.image.photo_thumb_base64}`,
            // cache: 'default',
          }}
          style={{
            flex: 1,
          }}
          resizeMode="cover">
          <Image
            ref={ref => {
              this.imageRef = ref
            }}
            style={{
              flex: 1,
            }}
            // onLoad={this.handleOnLoad}
            source={{uri: this.props.image.photo_semi_quality}}
            resizeMode="cover"
          />
        </ImageBackground>
      </TouchableOpacity>
    )
  }
}
