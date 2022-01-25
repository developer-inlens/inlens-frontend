import React from 'react'
import {Heading} from 'native-base'
import {colors} from '../../constants/theme'
const SubTitle = ({title, mt}) => {
  return (
    <Heading size="sm" mt={mt} color={colors.TITLE}>
      {title}
    </Heading>
  )
}

export default SubTitle

// const styles = ScaledSheet.create({
//   text: {
//     fontSize: '16@s',
//     fontWeight: 'normal',
//     fontStyle: 'normal',
//     lineHeight: '24@s',
//     letterSpacing: '0.15@s',
//     color: colors.TITLE,
//   },
// })
