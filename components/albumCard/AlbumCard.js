import React from 'react'
import {Box, Heading, Pressable} from 'native-base'
import {colors} from '../../constants/theme'

const AlbumCard = ({name, color, isSelected, onPress}) => {
  return (
    <Box
      backgroundColor={color}
      borderRadius="50"
      minWidth="120"
      mr="2"
      padding={isSelected ? '3' : '3'}
      borderColor={isSelected ? colors.WHITE : null}
      borderWidth={'3'}
      onTouchEndCapture={onPress}>
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
