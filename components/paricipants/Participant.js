import React from 'react'
import {Pressable, Text, Avatar, IconButton, Box} from 'native-base'
import {colors} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Participant = ({id, photo, name}) => {
  let Image_Http_URL = {uri: photo}

  return (
    <Pressable mr="2">
      {photo && photo.length > 0 ? (
        <Avatar size="sm" bg="#272727" source={Image_Http_URL} />
      ) : (
        <Box>
          {id === 0 ? (
            <IconButton
              icon={<Icon name="add" />}
              borderRadius="full"
              bgColor="#272727"
              _icon={{
                color: colors.LIGHT_GREEN,
                size: 20,
              }}
            />
          ) : (
            <Avatar size="sm" bg="#272727">
              <Text fontSize="sm" color={colors.LIGHT_GREEN}>
                {name && name[0]}
              </Text>
            </Avatar>
          )}
        </Box>
      )}
    </Pressable>
  )
}

export default Participant
