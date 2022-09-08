import React from 'react'
import {VStack, Text, Heading} from 'native-base'

const ExternalScrollView = ({type}) => {
  return (
    <VStack>
      <Heading>Recent Photos</Heading>
      <Text>Displaying recent photos taken since last week</Text>
    </VStack>
  )
}

export default ExternalScrollView
