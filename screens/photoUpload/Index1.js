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
import {fetchMorePhotos, fetchAlbums} from '../../redux/slices/albumSlice'
import {connect} from 'react-redux'
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
      offset: 0,
      photos: [],
      selectedItems: [],
    }
    this.inProgressNetworkReq = false
  }

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
        if (per === 'granted') {
          MediaModule.createMediaEvent(
            10,
            this.state.photos.length,
            async (err, res) => {
              if (err) return console.log(err)

              const data = res.map((item, index) => {
                const res = item.split('~inlens~')
                return {
                  id: (index + this.state.offset) * res[0],
                  timestamp: res[0],
                  url: 'file://' + res[1],
                }
              })
              this.setState({photos: [...this.state.photos, ...data]}, () =>
                this.setState({
                  dataProvider: this.state.dataProvider.cloneWithRows(
                    this.state.photos,
                  ),
                }),
              )
            },
          )
        }
      } catch (err) {
        console.log('err', err)
      }
      this.inProgressNetworkReq = false
    }
  }

  selectItems = item => {
    console.log('***', item.url, this.state.selectedItems)
    if (this.state.selectedItems.includes(item.url)) {
      const newListItems = this.state.selectedItems.filter(
        listItem => listItem !== item.url,
      )
      return this.setState({selectedItems: [...newListItems]})
    }
    this.setState({selectedItems: [...this.state.selectedItems, item.url]})
  }

  getSelected = contact => this.state.selectedItems.includes(contact.url)

  rowRenderer = (type, data) => {
    return (
      <TouchableOpacity
        onPress={() => this.selectItems(data)}
        style={{
          flex: 1,
          margin: 3,
          backgroundColor: 'lightgrey',
        }}>
        <Image
          style={{
            flex: 1,
          }}
          // onLoad={this.handleOnLoad}
          resizeMode="cover"
          source={{
            uri: data.url,
          }}
        />
        {this.getSelected(data) && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255,0,0,0.5)',
            }}
          />
        )}
      </TouchableOpacity>
    )
    // return (
    //   <ImageRenderer
    //     image={data}
    //     selectedItems={this.state.selectedItems}
    //     onTouchPhoto={
    //       () => console.log('Photo view')
    //       // Implement this during API integration
    //       // this.props.navigation.navigate('PhotoView', {
    //       //   photoId: data.id,
    //       //   // albumId: currentAlbum.id,
    //       //   // photos: photosStore,
    //       // })
    //     }
    //     onLongPress={this.selectItems}
    //   />
    // )
  }

  handleListEnd = () => {
    this.fetchMoreData()
    // this.setState({}) //test this
  }

  renderFooter = () => {
    return this.inProgressNetworkReq ? (
      <ActivityIndicator style={{margin: 10}} size="large" color={'black'} />
    ) : (
      <View style={{height: 60}} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ExternalScrollView />
        {this.state.dataProvider ? (
          <RecyclerListView
            style={{flex: 1}}
            contentContainerStyle={{margin: 3}}
            onEndReached={this.handleListEnd}
            dataProvider={this.state.dataProvider}
            layoutProvider={this.state.layoutProvider}
            rowRenderer={this.rowRenderer}
            renderFooter={this.renderFooter}
            // externalScrollView={Ext}
          />
        ) : (
          <ExternalScrollView />
          //   <View></View>
        )}
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
