import React from 'react'
import {
  Image,
  Platform,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native'
import {Spinner} from 'native-base'
const isIOS = Platform.OS === 'ios'

export class ImageRenderer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }
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
        onPress={() => this.props.onTouchPhoto(this.props.image.photo_id)}
        // onLongPress={() => {
        //   // this.props.onLongPress(this.props.image)
        //   this.setState(
        //     {
        //       selected: true,
        //     },
        //     () => console.log(this.state.selected),
        //   )
        // }}
      >
        <ImageBackground
          source={{
            uri: `data:image/png;base64,${this.props.image.base64}`,
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
            source={{
              uri:
                this.props.image.semi_original_url ??
                this.props.image.original_url,
            }}
            resizeMode="cover"
          />
        </ImageBackground>
        {/* {this.props.image.uploading && this.state.loading && (
          <Spinner
            color="emerald.500"
            size={50}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        )} */}
      </TouchableOpacity>
    )
  }
}
