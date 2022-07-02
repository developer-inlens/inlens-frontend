import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {
  RecyclerListView,
  DataProvider,
  StickyContainer,
  BaseScrollView,
} from 'recyclerlistview'
import {Heading} from 'native-base'
import {DataCall} from './utils/DataCall'
import {LayoutUtil} from './utils/LayoutUtil'
import {ImageRenderer} from './components/ImageRenderer'
import {ViewSelector} from './components/ViewSelector'
import {ThreeDotsIcon} from 'native-base'
import {fetchMorePhotos} from '../../../redux/slices/albumSlice'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Ext from '../HomeScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors, margin, size} from '../../../constants/theme'

// const Header = () => <View style={styles.header} />
// RecyclerListView.propTypes.externalScrollView = PropTypes.object
RecyclerListView.propTypes.externalScrollView = PropTypes.object

class PhotoView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataProvider: new DataProvider((r1, r2) => {
        return r1 !== r2
      }),
      layoutProvider: LayoutUtil.getLayoutProvider(1),
      images: [],
      count: 0,
      viewType: 1,
    }
    this.inProgressNetworkReq = false
  }
  componentDidMount() {
    this.fetchMoreData()
  }

  async fetchMoreData() {
    if (!this.inProgressNetworkReq) {
      console.log('**fetching')
      //To prevent redundant fetch requests. Needed because cases of quick up/down scroll can trigger onEndReached
      //more than once
      this.inProgressNetworkReq = true
      const images = await DataCall.get(this.state.count, 10)
      this.inProgressNetworkReq = false
      // this.props.dataProvider.cloneWithRows(this.props.albumPhotos)

      this.setState({
        dataProvider: this.state.dataProvider.cloneWithRows(
          this.state.images.concat(images),
        ),
        images: this.state.images.concat(images),
        count: this.state.count + 10,
      })
      this.props.fetchMorePhotos({id: '1', photo: images})

      // console.log('***', this.props.dataProvider)
    }
  }
  rowRenderer = (type, data) => {
    return (
      <ImageRenderer image={data} onTouchPhoto={() => console.log('###')} />
    )
  }
  viewChangeHandler = viewType => {
    this.setState({
      layoutProvider: LayoutUtil.getLayoutProvider(viewType),
      viewType: viewType,
    })
  }
  handleListEnd = () => {
    this.fetchMoreData()
    this.setState({})
  }
  renderFooter = () => {
    // Second view makes sure we don't unnecessarily change height of the list on this event. That might cause indicator to remain invisible
    // The empty view can be removed once you've fetched all the data
    return this.inProgressNetworkReq ? (
      <ActivityIndicator style={{margin: 10}} size="large" color={'black'} />
    ) : (
      <View style={{height: 60}} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.count > 0 ? (
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
        ) : null}
        <TouchableOpacity
          // onPress={toggleBottomNavigationView}
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
          visible={chooseUpload}
          setVisible={toggleBottomNavigationView}
          Body={UploadPhoto}
          title={'New Album'}
          headerVisible={false}
          albumId={currentAlbum.id}
        /> */}
      </View>
    )
  }
}

// const mapStateToProps = state => ({
//   // count: state.counter.value
// // })
const mapStateToProps = state => {
  // console.log('*****', state.album.albums[0].photos)
  return {
    albumPhotos: state.album.albums[0].photos,
  }
}
const mapDispatchToProps = {fetchMorePhotos}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoView)
// export default PhotoView

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
    // width: 100,
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

const Header = () => (
  <View style={{width: 300, height: 300, backgroundColor: 'red'}} />
)
// const ScrollViewWithHeader = React.forwardRef(({children, ...props}, ref) => {
//   return (
//     <ScrollView ref={ref} {...props}>
//       <Header />
//       {children}
//     </ScrollView>
//   )
// })

class ExternalScrollView extends BaseScrollView {
  scrollTo = (...args) => {
    if (this._scrollViewRef) {
      this._scrollViewRef.scrollTo(...args)
    }
  }

  render() {
    console.log('$$$$', this.props)
    return (
      <ScrollView
        {...this.props}
        ref={scrollView => {
          this._scrollViewRef = scrollView
        }}>
        {/* {this.props.ScrollViewWithHeader} */}
        <View style={{width: 300, height: 300, backgroundColor: 'red'}}></View>
        {this.props.children}
        {/* Create a flatlist here if need empty scrolling */}
      </ScrollView>
    )
  }
}
