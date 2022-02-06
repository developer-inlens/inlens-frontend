import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors} from '../../constants/theme'
const TypeOne = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Icon name={'done'} color={colors.LIGHT_GREEN} size={24} />
    </TouchableOpacity>
  )
}

export default TypeOne

const styles = ScaledSheet.create({
  button: {
    width: '333@s',
    height: '52@s',
    backgroundColor: colors.BLACK,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16@s',
    alignItems: 'center',
  },
  text: {
    // flex: 1,
    textAlign: 'center',
    fontSize: '14@s',
    fontWeight: '500',
    lineHeight: '16@s',
    letterSpacing: '1.25@s',
    textTransform: 'uppercase',
    color: colors.BUTTON_TEXT_WHITE,
    marginRight: '3@s',
  },
})
