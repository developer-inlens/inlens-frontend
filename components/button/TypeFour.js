import React from 'react'
import {Pressable, Text} from 'native-base'
import {colors} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'

const TypeOne = ({onPress, title}) => {
  return (
    <Pressable
      backgroundColor={colors.BLACK}
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      height="52"
      borderRadius="16"
      paddingRight="31"
      onPress={onPress}>
      <Text
        color={colors.BUTTON_TEXT_WHITE}
        flex={1}
        textAlign="center"
        fontWeight={500}
        textTransform="uppercase">
        {title}
      </Text>
      <Icon name={'done'} color={colors.LIGHT_GREEN} size={20} />
    </Pressable>
  )
}

export default TypeOne
