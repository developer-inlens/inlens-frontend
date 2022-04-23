import React from 'react'
import {Pressable, Text, Avatar, Box, Popover} from 'native-base'
import {colors} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Participant = ({id, photo, name, color, onPress}) => {
  let Image_Http_URL = {uri: photo}

  return (
    <Pressable mr="2" onPress={onPress}>
      {photo && photo.length > 0 ? (
        <Avatar size="sm" bg={colors.SECONDARY} source={Image_Http_URL} />
      ) : (
        <Box>
          {id === 0 ? (
            <Avatar size="sm" bg={colors.SECONDARY}>
              <Icon name="add" color={colors.PRIMARY} size={20} />
            </Avatar>
          ) : (
            <Avatar size="sm" bg={colors.SECONDARY}>
              <Popover
                trigger={triggerProps => {
                  return (
                    <Text {...triggerProps} fontSize="md" color={color}>
                      {name[0]}
                    </Text>
                  )
                }}>
                <Popover.Content w="56">
                  <Popover.Arrow />
                  <Popover.CloseButton />
                  <Popover.Header>{name}</Popover.Header>
                </Popover.Content>
              </Popover>
            </Avatar>
          )}
        </Box>
      )}
    </Pressable>
  )
}

export default Participant
