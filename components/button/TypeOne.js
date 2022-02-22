import React from 'react'
import {TouchableOpacity} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors, size} from '../../constants/theme'

const TypeOne = ({onPress, isIncrement}) => {
  return (
    <TouchableOpacity style={styles(isIncrement).button} onPress={onPress}>
      <Icon
        name={isIncrement ? 'add' : 'remove'}
        color={isIncrement ? colors.PRIMARY : colors.PINK}
        size={size.ICON_SIZE}
      />
    </TouchableOpacity>
  )
}

export default TypeOne

const styles = () =>
  ScaledSheet.create({
    button: {
      width: '40@s',
      height: '40@s',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '20@s',
      backgroundColor: colors.BACKGROUND,
    },
  })
