import React, {useState} from 'react'
import {TouchableOpacity, View} from 'react-native'
import {Heading, Text, HStack, Box} from 'native-base'
import {colors, size} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomModelSheet from '../bottomSheet/BottomSheet'
import NewAlbum from '../bottomSheet/NewAlbum'
import {ScaledSheet} from 'react-native-size-matters'
import Participant from '../paricipants/Participant'

const Header = ({title}) => {
  const [visible, setVisible] = useState(false)
  const toggleBottomNavigationView = () => {
    setVisible(!visible)
  }

  return (
    <HStack
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      paddingRight="100">
      <Participant photo="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      <Heading size="md" color={colors.TITLE}>
        {title}
      </Heading>
      <Box
        flexDirection="row"
        alignItems="center"
        position="absolute"
        right="8">
        <TouchableOpacity
          onPress={toggleBottomNavigationView}
          style={styles.add}>
          <Icon
            name="add"
            color={colors.PRIMARY}
            size={size.ICON_SIZE}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('join')}>
          <Text fontSize="lg" color={colors.PRIMARY}>
            Join
          </Text>
        </TouchableOpacity>
      </Box>
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
    color: colors.PRIMARY,
    // marginRight: '3@s',
  },
  add: {
    marginRight: '16@s',
  },
  header: {
    flexDirection: 'row',
  },
})
