import React, {useState} from 'react'
import {TouchableOpacity} from 'react-native'
import {Heading, Text, HStack} from 'native-base'
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
      alignItems="center"
      width="full"
      direction="row"
      justifyContent="space-between"
      paddingRight="4">
      <Participant photo="https://i.ibb.co/LZhy0xw/1634143707923.jpg" />
      <Heading size="md" color={colors.TITLE}>
        {title}
      </Heading>
      <TouchableOpacity onPress={toggleBottomNavigationView}>
        <Icon
          name="add-circle-outline"
          color={colors.PRIMARY}
          size={size.ICON_SIZE}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('join')}>
        <Text style={styles.join}>JOIN</Text>
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
    color: colors.PRIMARY,
    marginRight: '5@s',
  },
})
