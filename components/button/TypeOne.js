import React from 'react'
import {IconButton} from 'native-base'
import {colors} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'

const TypeOne = ({onPress, isIncrement}) => {
  return (
    <IconButton
      mt={4}
      mb={4}
      icon={
        <Icon
          name={isIncrement ? 'add' : 'remove'}
          color={isIncrement ? colors.BLUE : colors.PINK}
        />
      }
      onPress={onPress}
      _icon={{
        size: 24,
      }}
      width="50"
      //   height={'10'}
      style={{height: 48}}
      backgroundColor="#272727"
      justifyContent="center"
      alignItems="center"
      borderTopLeftRadius={isIncrement ? 0 : '4'}
      borderTopRightRadius={isIncrement ? '4' : 0}
      borderBottomLeftRadius={isIncrement ? 0 : '4'}
      borderBottomRightRadius={isIncrement ? '4' : 0}
    />
  )
}

export default TypeOne
