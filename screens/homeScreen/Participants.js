import React from 'react'
import {FlatList} from 'react-native'
import {Heading} from 'native-base'
import {colors, margin} from '../../constants/theme'

const Participants = ({participants, renderAvatar}) => {
  return (
    <>
      <Heading size="sm" color={colors.TITLE} my={margin.MD}>
        Participants
      </Heading>
      <FlatList
        data={participants}
        renderItem={renderAvatar}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}

export default Participants
