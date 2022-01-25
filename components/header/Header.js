import React, {useState} from 'react'
import {
  Spacer,
  Heading,
  Avatar,
  Pressable,
  Text,
  IconButton,
  // Icon,
  HStack,
} from 'native-base'
import {colors} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomModelSheet from '../bottomSheet/BottomSheet'
import NewAlbum from '../bottomSheet/NewAlbum'
const Header = () => {
  const [visible, setVisible] = useState(false)
  const toggleBottomNavigationView = () => {
    setVisible(!visible)
  }
  return (
    <HStack
      alignItems="center"
      width="full"
      // px={2}
      paddingRight={6}
      // py={2}
      direction="row"
      justifyContent="space-between">
      <Avatar
        size="sm"
        bg={colors.BLUE}
        source={
          {
            // uri: 'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
          }
        }>
        <Text fontSize="sm" color={colors.TITLE}>
          A
        </Text>
      </Avatar>
      <Heading size="lg" color={colors.TITLE}>
        Shared Albums
      </Heading>
      <IconButton
        icon={<Icon name="add-circle-outline" />}
        borderRadius="full"
        onPress={toggleBottomNavigationView}
        _icon={{
          color: colors.BLUE,
          size: 20,
        }}
      />
      <Pressable
        onPress={() => {
          console.log('Hello world')
        }}>
        <Text fontSize="lg" color={colors.BLUE}>
          Join
        </Text>
      </Pressable>
      <BottomModelSheet
        visible={visible}
        setVisible={toggleBottomNavigationView}
        title={'New Album'}
        Body={NewAlbum}
      />
    </HStack>
  )
}

export default Header
