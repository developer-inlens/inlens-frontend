import React from 'react'
import {ScrollView} from 'react-native'
import {Box, Center, HStack} from 'native-base'
import Photo from '../../components/photo/Photo.js'

const Photos = ({photos}) => {
  if (photos.length === 0) {
    return <Center>No Photos</Center>
  }
  return (
    <ScrollView>
      <HStack>
        <Box>
          {photos
            .filter((_, i) => i % 2 === 0)
            .map(outfit => (
              <Photo key={outfit.id} photo={outfit} />
            ))}
        </Box>
        <Box>
          {photos
            .filter((_, i) => i % 2 !== 0)
            .map(outfit => (
              <Photo key={outfit.id} photo={outfit} />
            ))}
        </Box>
      </HStack>
    </ScrollView>
  )
}

export default Photos
