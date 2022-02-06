import React from 'react'
import {
  Button,
  Actionsheet,
  Center,
  Box,
  VStack,
  Heading,
  HStack,
  IconButton,
} from 'native-base'
import {colors} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {TouchableOpacity} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'

const BottomSheet = ({visible, setVisible, onDelete, title, Body}) => {
  return (
    <Actionsheet isOpen={visible} onClose={setVisible}>
      {/* <VStack background="red.100" height="30"> */}
      <Actionsheet.Content background="#272727">
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
            {/* <IconButton
              icon={<Icon name="close" />}
              borderRadius="full"
              onPress={setVisible}
              _icon={{
                color: colors.RED,
                size: 24,
              }}
            /> */}
            <TouchableOpacity onPress={setVisible}>
              <Icon
                name="close"
                color="#EF9A9A"
                size={24}
                style={styles.icon}
              />
            </TouchableOpacity>
          </Box>
        </HStack>
        <Body />
        {/* </VStack> */}
      </Actionsheet.Content>
    </Actionsheet>
  )
}

export default BottomSheet

const styles = ScaledSheet.create({
  icon: {
    // backgroundColor: '#EF9A9A',
    width: '20@s',
    borderRadius: 50,
    textAlign: 'center',
  },
})
