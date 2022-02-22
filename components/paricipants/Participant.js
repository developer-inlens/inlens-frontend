import React from 'react'
import {Pressable, Text, Avatar, IconButton, Box} from 'native-base'
import {colors} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Participant = ({id, photo, name}) => {
  let Image_Http_URL = {uri: photo}

  return (
    <Pressable mr="2">
      {photo && photo.length > 0 ? (
        <Avatar size="sm" bg={colors.SECONDARY} source={Image_Http_URL} />
      ) : (
        <Box>
          {id === 0 ? (
            <IconButton
              icon={<Icon name="add" />}
              borderRadius="full"
              bgColor={colors.SECONDARY}
              _icon={{
                color: colors.PRIMARY,
                size: 20,
              }}
            />
          ) : (
            <Avatar size="sm" bg={colors.SECONDARY}>
              <Text fontSize="md" color={colors.LIGHT_GREEN}>
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
