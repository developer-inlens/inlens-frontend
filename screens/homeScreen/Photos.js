import React from 'react'
import {ScrollView, Dimensions} from 'react-native'
import {Box, Center, HStack, Text} from 'native-base'
import Photo from '../../components/photo/Photo.js'
import {colors} from '../../constants/theme.js'

const Photos = ({photos, onTouchPhoto}) => {
  if (photos.length === 0) {
    return (
      <Center height={Dimensions.get('window').height / 1.8}>
        <Text fontSize="md" color={colors.WHITE_PRIMARY}>
          No Photos
        </Text>
      </Center>
    )
  }
  return (
    <HStack>
      <Box>
        {photos
          .filter((_, i) => i % 2 === 0)
          .map(outfit => (
            <Photo key={outfit.id} photo={outfit} onTouchPhoto={onTouchPhoto} />
          ))}
      </Box>
      <Box>
        {photos
          .filter((_, i) => i % 2 !== 0)
          .map(outfit => (
            <Photo key={outfit.id} photo={outfit} onTouchPhoto={onTouchPhoto} />
          ))}
      </Box>
    </HStack>
  )
}

export default Photos
