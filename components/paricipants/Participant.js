import React, {useState, useEffect} from 'react'
import {TouchableOpacity} from 'react-native'
import {Pressable, Text, Avatar, Box, Popover, Button} from 'native-base'
import {colors} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Participant = ({id, photo, name, color, onPress}) => {
  let Image_Http_URL = {uri: photo}
  const [isOpen, setIsOpen] = useState(false)

  const openPopover = () => setIsOpen(true)
  const closePopover = () => setIsOpen(false)

  useEffect(() => {
    setTimeout(() => {
      // setIsOpen(false)
    }, 2000)
  }, [isOpen])
  // console.log('@@@', name)
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
            // <Box w="100%" alignItems="flex-end">
            //   <Popover
            //     offset={10}
            //         placement="bottom"

            //     trigger={triggerProps => {
            //       return (
            //         <Button {...triggerProps} colorScheme="danger">
            //           {name}
            //         </Button>
            //       )
            //     }}>
            //     <Popover.Content accessibilityLabel="Delete Customerd" w="56">
            //       <Popover.Arrow />
            //       <Popover.CloseButton />
            //       <Popover.Body>
            //         This will remove all data relating to Alex. This action
            //         cannot be reversed. Deleted data can not be recovered.
            //       </Popover.Body>
            //     </Popover.Content>
            //   </Popover>
            // </Box>

            <TouchableOpacity onPress={openPopover}>
              <Avatar size="sm" bg={colors.SECONDARY} position="relative">
                <Popover
                  trigger={triggerProps => {
                    return (
                      <TouchableOpacity {...triggerProps} onPress={openPopover}>
                        <Text fontSize="md" color={color}>
                          {name}
                        </Text>
                      </TouchableOpacity>
                    )
                  }}
                  isOpen={isOpen}
                  onClose={closePopover}>
                  <Popover.Content borderColor={color} borderWidth={0}>
                    <Popover.Arrow borderColor={color} color={color} />
                    <Popover.Body backgroundColor={color} color="white">
                      {name}
                    </Popover.Body>
                  </Popover.Content>
                </Popover>
              </Avatar>
            </TouchableOpacity>
          )}
        </Box>
      )}
    </Pressable>
  )
}

export default Participant
