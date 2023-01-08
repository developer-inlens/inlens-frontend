import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native'
import {RecyclerListView, DataProvider} from 'recyclerlistview'
import {Heading, Spinner} from 'native-base'
import {DataCall} from './utils/DataCall'
import {LayoutUtil} from './utils/LayoutUtil'
import {ImageRenderer} from './ImageRenderer'
import {
  fetchMorePhotos,
  fetchAlbums,
  setAlbums,
} from '../../redux/slices/albumSlice'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Ext from './ExternalScrollView'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors, margin, size} from '../../constants/theme'
import BottomModelSheet from '../../components/bottomSheet/BottomSheet'
import UploadPhoto from '../../components/bottomSheet/Upload'
import ExternalScrollView from './ExternalScrollView'
import axios from '../../utils/axios'
import {getHomeView, getPhotos} from '../../redux/actions/album'

RecyclerListView.propTypes.externalScrollView = PropTypes.object

class PhotoView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataProvider: new DataProvider((r1, r2) => {
        return r1 !== r2
      }),
      layoutProvider: LayoutUtil.getLayoutProvider(1),
      chooseUpload: false,
      loading: false,
      loadMore: false,
    }
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
    if (!this.state.loading) {
      // this.inProgressNetworkReq = true
      this.setState({loading: true})
      // const images = await DataCall.get(this.props.album?.photos?.length, 10)
      const {data, err} = await getHomeView()
      if (err) {
        // Show toast
        this.setState({loading: false})
        return
      }
      // this.inProgressNetworkReq = false
      this.props.setAlbums(data.albums)
      // this.props.fetchMorePhotos({photo: images})
      this.setState({
        dataProvider: this.state.dataProvider.cloneWithRows(
          this.props.currentAlbum?.photos,
        ),
        loading: false,
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentAlbum.photos !== this.props.currentAlbum.photos) {
      console.log('Hi')
      this.setState({
        dataProvider: this.state.dataProvider.cloneWithRows(
          this.props.currentAlbum?.photos,
        ),
      })
    }
  }

  rowRenderer = (type, data) => {
    return (
      <ImageRenderer
        image={data}
        onTouchPhoto={
          id => this.props.navigation.navigate('PhotoView', {id})
          // Implement this during API integration
          //   this.props.navigation.navigate('PhotoView', {
          //     photoId: data.id,
          //     // albumId: currentAlbum.id,
          //     // photos: photosStore,
          //   })
        }
      />
    )
  }

  handleListEnd = async () => {
    this.setState({loadMore: true})
    console.log('***loadmore', this.state.loadMore)
    const {data, err} = await getPhotos(
      this.props.currentAlbum?.AlbumId,
      parseInt(this.props.currentAlbum?.photos.length / 7),
    )
    if (err) {
      // Show toast
      this.setState({loadMore: false})
      return
    }
    if (data?.length > 0) {
      this.props.fetchMorePhotos({photo: data})
    }
    this.setState({loadMore: false})

    //this.setState({}) //test this
  }

  toggleBottomNavigationView = () => {
    // this.setState({chooseUpload: !this.state.chooseUpload})
    this.props.navigation.navigate('PhotoUpload')
  }

  renderFooter = () => {
    return this.state.loadMore ? (
      <ActivityIndicator style={{margin: 10}} size="large" color={'black'} />
    ) : (
      <View style={{height: 60}} />
    )
  }

  render() {
    // this.inProgressNetworkReq &&
    if (this.state.loading) {
      return (
        <ActivityIndicator style={{margin: 10}} size="large" color={'white'} />
      )
    }
    // console.log('!', this.props.currentAlbum)
    // if (this.props.albums?.length < 1) {
    //   this.props.navigation.replace('Welcome')
    // }
    return (
      <View style={styles.container}>
        {this.props.currentAlbum?.photos?.length > 0 ? (
          <RecyclerListView
            style={{flex: 1}}
            contentContainerStyle={{margin: 3}}
            onEndReached={this.handleListEnd}
            dataProvider={this.state.dataProvider}
            layoutProvider={this.state.layoutProvider}
            rowRenderer={this.rowRenderer}
            renderFooter={this.renderFooter}
            externalScrollView={Ext}
          />
        ) : (
          <ExternalScrollView />
        )}
        <TouchableOpacity
          onPress={this.toggleBottomNavigationView}
          style={styles.fab}>
          <Icon
            name={'file-upload'}
            color={colors.BLACK}
            size={size.ICON_SIZE}
          />
          {/* {showLabel && ( */}
          <Heading mx={2} size="sm" color="black">
            Upload
          </Heading>
        </TouchableOpacity>
        {/* <BottomModelSheet
          visible={this.state.chooseUpload}
          setVisible={this.toggleBottomNavigationView}
          Body={UploadPhoto}
          title={'Display Recent Images since...'}
          headerVisible={true}
          albumId={this.props.currentAlbum?.AlbumId}
        /> */}
      </View>
    )
  }
}

const mapStateToProps = ({album}) => {
  return {
    albums: album.albums,
    currentAlbum: album.currentAlbum,
    test: album.albums,
  }
}

export default connect(mapStateToProps, {
  fetchMorePhotos,
  fetchAlbums,
  setAlbums,
})(PhotoView)

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
