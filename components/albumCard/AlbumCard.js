import React from 'react'
import {Pressable, Text, Box, Heading} from 'native-base'

const AlbumCard = ({name, color, isSelected}) => {
  return (
    <Pressable>
      <Box
        backgroundColor={color}
        borderRadius="4"
        minWidth="120"
        // minHeight="30"
        mr="2"
        padding={isSelected ? '3' : '3'}
        borderBottomColor={isSelected && 'white'}
        borderBottomWidth={'2'}>
        <Heading
          size="sm"
          alignSelf={{
            base: 'flex-start',
            md: 'flex-start',
          }}>
          {name}
        </Heading>
      </Box>
    </Pressable>
  )
}

export default AlbumCard

// const style=new Cr
