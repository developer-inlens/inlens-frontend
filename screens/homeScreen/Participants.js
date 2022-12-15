import React from 'react'
import {FlatList} from 'react-native'
import {Heading, Skeleton, Text} from 'native-base'
import {colors, margin} from '../../constants/theme'

const Participants = ({participants, renderAvatar, isLoaded}) => {
  return (
    <>
      {/* <Skeleton.Text lines={1} my={margin.MD} size="sm" isLoaded={isLoaded}> */}
      <Text size="lg" color={colors.TITLE} my={margin.MD}>
        Particis
      </Text>
      {/* </Skeleton.Text> */}
      {/* <Skeleton isLoaded={isLoaded}> */}
      <FlatList
        data={participants}
        renderItem={renderAvatar}
        keyExtractor={item => item.user_id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      {/* </Skeleton> */}
    </>
  )
}

export default Participants
