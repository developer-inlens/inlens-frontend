import React from 'react'
import {
  Button,
  Actionsheet,
  useDisclose,
  Center,
  Box,
  VStack,
  Heading,
  HStack,
  IconButton,
} from 'native-base'
import {colors, padding} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'

const BottomSheet = ({visible, setVisible, onDelete, title, Body}) => {
  return (
    <Actionsheet isOpen={visible} onClose={setVisible}>
      {/* <VStack background="red.100" height="30"> */}
      <Actionsheet.Content background="#121212">
        <HStack
          pl="4"
          justifyContent="space-between"
          alignItems="center"
          width="full">
          <Heading size="md" color={colors.WHITE} opacity={0.6}>
            {title}
          </Heading>

          <Box>
            {onDelete && (
              <IconButton
                icon={<Icon name="add-circle-outline" />}
                borderRadius="full"
                _icon={{
                  color: colors.BLUE,
                  size: 20,
                }}
              />
            )}
            <IconButton
              icon={<Icon name="close" />}
              borderRadius="full"
              _icon={{
                color: colors.RED,
                size: 24,
              }}
            />
          </Box>
        </HStack>
        <Body />
        {/* </VStack> */}
      </Actionsheet.Content>
    </Actionsheet>
  )
}

export default BottomSheet
