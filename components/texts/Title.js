import React from 'react'
import {Heading} from 'native-base'
import {colors} from '../../constants/theme'
const Title = ({title}) => {
  return (
    <Heading color={colors.TITLE} size="md">
      {title}
    </Heading>
  )
}

export default Title

// const styles = ScaledSheet.create({
//   text: {
//     fontSize: '20@s',
//     fontWeight: '500',
//     fontStyle: 'normal',
//     lineHeight: '24@s',
//     letterSpacing: '0.15@s',
//     color: colors.TITLE,
//   },
// })
