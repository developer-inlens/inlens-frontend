import React, {useState} from 'react'
import {TouchableOpacity, View} from 'react-native'
import {
  Spacer,
  Heading,
  Avatar,
  Pressable,
  Text,
  IconButton,
  // Icon,
  HStack,
  Stack,
  Button,
} from 'native-base'
import {colors} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomModelSheet from '../bottomSheet/BottomSheet'
import NewAlbum from '../bottomSheet/NewAlbum'
import {ScaledSheet} from 'react-native-size-matters'
import Participant from '../paricipants/Participant'

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
      paddingRight={4}
      // py={2}
      direction="row"
      justifyContent="space-between">
      <Participant photo="https://i.ibb.co/LZhy0xw/1634143707923.jpg" />
      {/* <Avatar
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
      </Avatar> */}
      <Heading size="md" color={colors.TITLE}>
        Shared Albums
      </Heading>
      <TouchableOpacity onPress={toggleBottomNavigationView}>
        <View>
          <Icon
            name="add-circle-outline"
            color="#64B5F6"
            size={24}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      {/* <IconButton
        icon={<Icon name="add-circle-outline" />}
        borderRadius="full"
        onPress={toggleBottomNavigationView}
        _icon={{
          color: colors.BLUE,
          size: 24,
        }}
      /> */}
      {/* <Button size="lg" variant="ghost">
        JOIN
      </Button> */}
      <TouchableOpacity>
        <Text style={styles.join}>Join</Text>
      </TouchableOpacity>

      <BottomModelSheet
        visible={visible}
        setVisible={toggleBottomNavigationView}
        Body={NewAlbum}
        title={'New Album'}
      />
    </HStack>
  )
}

export default Header

const styles = ScaledSheet.create({
  join: {
    fontSize: '16@s',
    lineHeight: '24@s',
    fontWeight: '500',
    color: '#64B5F6',
    // marginRight: '24@s',
    // marginLeft: '24@s',
  },
})
