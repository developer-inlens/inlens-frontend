import React from 'react'
import {Pressable, Text, Box} from 'native-base'

const AlbumCard = ({name, color, isSelected}) => {
  return (
    <Pressable>
      <Box
        backgroundColor={color}
        borderRadius="4"
        minWidth="120"
        // minHeight="30"
        mr="2"
        padding={isSelected ? '2.5' : '3'}
        borderBottomColor={isSelected && 'white'}
        borderBottomWidth={'3'}>
        <Text backgroundColor="blue.900" fontWeight="bold" color="black">
          {name}
        </Text>
      </Box>
    </Pressable>
  )
}

export default AlbumCard

// const style=new Cr
