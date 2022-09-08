import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  NativeModules,
  PermissionsAndroid,
  Image,
} from 'react-native'
import {RecyclerListView, DataProvider} from 'recyclerlistview'
import {Heading} from 'native-base'
import {DataCall} from '../homescreen2/utils/DataCall'
import {LayoutUtil} from '../homescreen2/utils/LayoutUtil'
import {ImageRenderer} from '../homescreen2/ImageRenderer'
import PropTypes from 'prop-types'
import {colors, margin, size} from '../../constants/theme'
import ExternalScrollView from './ExternalScrollView'

RecyclerListView.propTypes.externalScrollView = PropTypes.object

class PhotoUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataProvider: new DataProvider((r1, r2) => {
        return r1 !== r2
      }),
      layoutProvider: LayoutUtil.getLayoutProvider(1),
      chooseUpload: false,
    }
    this.inProgressNetworkReq = false
  }
  // fetchHomeViewData = async () => {
  //   console.log('SSS')
  //   const res = await axios().post('/album/home-view', {
  //     skip: 0,
  //     type: 0,
  //   })
  //   await this.props.fetchAlbums(res.data.albums)
  //   this.fetchMoreData()
  //   console.log('##', res.data)
  // }
  componentDidMount() {
    // this.fetchHomeViewData()
    this.fetchMoreData()
  }

  async fetchMoreData() {
    if (!this.inProgressNetworkReq) {
      this.inProgressNetworkReq = true

      const {MediaModule} = NativeModules
      try {
        const per = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        )
        console.log('result', per, RNFF)
        if (per === 'granted') {
          console.log('**')
          MediaModule.createMediaEvent(10, 0, (err, res) => {
            if (err) return console.log(err)
            const data = res.map(item => {
              const res = item.split('~inlens~')
              return {timestamp: res[0], url: res[1]}
            })
            // console.log(data)
            this.setState(
              {
                dataProvider: this.state.dataProvider.cloneWithRows(data),
              },
              //   () => console.log('&&', this.state.dataProvider),
            )
          })
          // console.log('result222', result)
        }
      } catch (err) {
        console.log('err', err)
      }
      this.inProgressNetworkReq = false
    }
  }

  rowRenderer = (type, data) => {
    console.log('****', 'file://' + data.url, '##', type)
    return (
      <Image
        // ref={ref => {
        //   this.imageRef = ref
        // }}
        style={{
          flex: 1,
          //   height: 200,
          //   width: 200,
        }}
        // onLoad={this.handleOnLoad}
        source={{uri: 'file://' + data.url, width: 200, height: 200}}
        // resizeMode="cover"
      />
      //   <ImageRenderer
      //     image={data}
      //     onTouchPhoto={
      //       () => console.log('Photo view')
      // Implement this during API integration
      //   this.props.navigation.navigate('PhotoView', {
      //     photoId: data.id,
      //     // albumId: currentAlbum.id,
      //     // photos: photosStore,
      //   })
      //     }
      //   />
    )
  }

  handleListEnd = () => {
    this.fetchMoreData()
    this.setState({}) //test this
  }

  renderFooter = () => {
    return this.inProgressNetworkReq ? (
      <ActivityIndicator style={{margin: 10}} size="large" color={'black'} />
    ) : (
      <View style={{height: 60}} />
    )
  }

  render() {
    // this.inProgressNetworkReq &&
    // if (this.props.test.length === 0) {
    //   return (
    //     <ActivityIndicator style={{margin: 10}} size="large" color={'black'} />
    //   )
    // }
    return (
      <View style={styles.container}>
        {/* {this.state.dataProvider.length > 0 ? ( */}
        <RecyclerListView
          style={{flex: 1}}
          contentContainerStyle={{margin: 3}}
          onEndReached={this.handleListEnd}
          dataProvider={this.state.dataProvider}
          layoutProvider={this.state.layoutProvider}
          rowRenderer={this.rowRenderer}
          renderFooter={this.renderFooter}
          //   externalScrollView={ExternalScrollView}
        />
        {/* // ) : (
        //   //   <ExternalScrollView />
        //   <View></View>
        // )} */}
      </View>
    )
  }
}

// const mapStateToProps = ({album}) => {
//   return {
//     album: album.currentAlbum,
//     test: album.albums,
//   }
// }

// export default connect(mapStateToProps, {fetchMorePhotos, fetchAlbums})(
//   PhotoUpload,
// )

export default PhotoUpload

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: 'blue',
    height: 300,
  },
  fab: {
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'absolute',
    bottom: 10,
    right: 16,
    height: 56,
    minWidth: 56,
    backgroundColor: colors.PRIMARY,
    borderRadius: 28,
    flexDirection: 'row',
  },
})
