import React from 'react'
import {Text} from 'native-base'
import {colors} from '../../constants/theme'

const Message = ({title}) => {
  return <Text color={colors.PINK}>{title}</Text>
}

export default Message

// const styles = ScaledSheet.create({
//   text: {
//     fontSize: '12@s',
//     fontWeight: 'normal',
//     fontStyle: 'normal',
//     lineHeight: '16@s',
//     letterSpacing: '0.4@s',
//     color: colors.PINK,
//   },
// })
