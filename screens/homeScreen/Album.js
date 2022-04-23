import React from 'react'
import {TouchableOpacity, FlatList} from 'react-native'
import {HStack, Heading, Menu, Box, Skeleton} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors, margin, size} from '../../constants/theme'

const Album = ({albums, renderAlbum, isLoaded}) => {
  return (
    <>
      <HStack
        justifyContent="space-between"
        space={8}
        alignItems="center"
        mb={margin.MD}>
        <Skeleton.Text lines={1} my={margin.MD} size="sm" isLoaded={isLoaded}>
          <Heading size="sm" color={colors.TITLE}>
            Recent
          </Heading>
        </Skeleton.Text>
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
      <Skeleton isLoaded={isLoaded}>
        <FlatList
          data={albums}
          renderItem={renderAlbum}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Skeleton>
    </>
  )
}

export default React.memo(Album)
