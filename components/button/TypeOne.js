import React from 'react'
import {TouchableOpacity} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {colors} from '../../constants/theme'
const TypeOne = ({onPress, isIncrement}) => {
  return (
    <TouchableOpacity style={styles(isIncrement).button} onPress={onPress}>
      <Icon
        name={isIncrement ? 'add' : 'remove'}
        color={isIncrement ? colors.BLUE : colors.PINK}
        size={20}
      />
    </TouchableOpacity>
  )
}

export default TypeOne

const styles = isIncrement =>
  ScaledSheet.create({
    button: {
      width: '49@s',
      height: '48@s',
      // backgroundColor: '#bb86fc1f',
      justifyContent: 'center',
      alignItems: 'center',
      // borderTopLeftRadius: isIncrement ? 0 : '4@s',
      // borderTopRightRadius: isIncrement ? '4@s' : 0,
      // borderBottomLeftRadius: isIncrement ? 0 : '4@s',
      // borderBottomRightRadius: isIncrement ? '4@s' : 0,
      borderWidth: 1,
      borderColor: '#272727',
    },
  })
