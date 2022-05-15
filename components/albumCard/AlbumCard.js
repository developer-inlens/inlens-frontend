import React from 'react'
import {Box, Heading, Pressable, Text} from 'native-base'
import {TouchableOpacity} from 'react-native'
import {colors} from '../../constants/theme'

const AlbumCard = ({name, color, isSelected, onPress}) => {
  return (
    <TouchableOpacity>
      <Box
        backgroundColor={!isSelected ? colors.BACKGROUND : colors.SECONDARY}
        borderRadius="24"
        // minWidth="120"
        mr="2"
        // textAlign="center"
        py={2}
        px={4}
        // padding={isSelected ? '2' : '2'}
        // borderColor={isSelected ? colors.WHITE : null}
        // borderWidth={'3'}
        onTouchEndCapture={onPress}>
        {/* <Heading
        size="sm"
        fontWeight="500"
        color={color}
        alignSelf={{
          base: 'center',
          md: 'center',
        }}> */}
        <Text fontSize="md" color={color} textAlign="center">
          {name}
        </Text>
      </Box>
    </TouchableOpacity>
  )
}

export default AlbumCard
