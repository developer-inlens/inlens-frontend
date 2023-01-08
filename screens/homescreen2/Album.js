import React from 'react'
import {TouchableOpacity, FlatList} from 'react-native'
import {HStack, Heading, Menu, Box, Skeleton, Text} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors, margin, size} from '../../constants/theme'
import {setAlbums} from '../../redux/slices/albumSlice'
import {getHomeView} from '../../redux/actions/album'
import {useDispatch} from 'react-redux'

const Album = ({albums, renderAlbum, isLoaded}) => {
  const dispatch = useDispatch()

  const fetchMoreData = async () => {
    console.log('####callig')
    if (albums.length % 7 !== 0) {
      return
    }
    const {data, err} = await getHomeView(albums.length / 7)
    if (err) {
      // Show toast
      // this.setState({loading: false})
      console.log('&&&&err', err)
      return
    }
    console.log('******', data)
    // this.inProgressNetworkReq = false
    if (data.albums) {
      dispatch(setAlbums(data.albums))
    }
  }

  return (
    <>
      <HStack
        justifyContent="space-between"
        space={8}
        alignItems="center"
        mb={margin.MD}>
        {/* <Skeleton.Text lines={1} my={margin.MD} size="sm" isLoaded={isLoaded}> */}
        <Text fontSize="md" color={colors.TITLE}>
          Recent
        </Text>
        {/* </Skeleton.Text> */}
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <TouchableOpacity style={{marginRight: 10}}>
            <Icon name="search" color={colors.WHITE} size={size.ICON_SIZE} />
          </TouchableOpacity>
          <Menu
            w="160"
            background={colors.SECONDARY}
            borderColor={colors.BACKGROUND}
            trigger={triggerProps => {
              return (
                <TouchableOpacity accessibilityLabel="Filter" {...triggerProps}>
                  <Icon
                    name="filter-list"
                    color={colors.WHITE_PRIMARY}
                    size={size.ICON_SIZE}
                  />
                </TouchableOpacity>
              )
            }}>
            <Menu.Item
              _text={{
                color: colors.WHITE,
              }}
              android_ripple={true}>
              Recent
            </Menu.Item>
            <Menu.Item
              _text={{
                color: colors.WHITE,
              }}>
              Created
            </Menu.Item>
            <Menu.Item
              _text={{
                color: colors.WHITE,
              }}>
              Joined
            </Menu.Item>
          </Menu>
        </Box>
      </HStack>
      {/* <Skeleton isLoaded={isLoaded}> */}
      <FlatList
        data={albums}
        renderItem={renderAlbum}
        keyExtractor={item => item.AlbumId.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMoreData}
      />
      {/* </Skeleton> */}
    </>
  )
}

export default React.memo(Album)
