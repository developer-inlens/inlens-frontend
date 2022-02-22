import React from 'react'
import {Box, Heading} from 'native-base'
import {colors} from '../../constants/theme'

const AlbumCard = ({name, color, isSelected, onPress}) => {
  return (
    <Box
      backgroundColor={color}
      borderRadius="6"
      minWidth="120"
      mr="2"
      padding={isSelected ? '3' : '3'}
      borderBottomColor={isSelected && colors.WHITE}
      borderBottomWidth={'2'}
      onTouchStart={onPress}>
      <Heading
        size="sm"
        alignSelf={{
          base: 'flex-start',
          md: 'flex-start',
        }}>
        {name}
      </Heading>
    </Box>
  )
}

export default AlbumCard
