import React, {useEffect, useState} from 'react'
import {Actionsheet, Box, Heading, HStack, IconButton} from 'native-base'
import {colors, padding, size} from '../../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {TouchableOpacity, Dimensions, View, Keyboard} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'

const BottomSheet = ({
  visible,
  setVisible,
  onDelete,
  title,
  Body,
  albumId,
  headerVisible = true,
}) => {
  const [keyBoardHeight, setKeyBoardHeight] = useState(0)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setKeyBoardHeight(e.endCoordinates.height)
      },
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyBoardHeight(0)
      },
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return (
    <View>
      <Actionsheet isOpen={visible} onClose={setVisible}>
        <Actionsheet.Content
          background={colors.SECONDARY}
          paddingBottom={keyBoardHeight}>
          {headerVisible && (
            <HStack
              justifyContent="space-between"
              alignItems="center"
              width="full"
              paddingX={padding.MD}
              marginBottom={padding.MD}>
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
                      size: size.ICON_SIZE,
                    }}
                  />
                )}
                <TouchableOpacity onPress={setVisible}>
                  <Icon
                    name="close"
                    color={colors.PINK}
                    size={size.ICON_SIZE}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </Box>
            </HStack>
          )}
          <Body setVisible={setVisible} albumId={albumId} />
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  )
}

export default BottomSheet

const styles = ScaledSheet.create({
  icon: {
    width: '24@s',
    borderRadius: 40,
    textAlign: 'center',
  },
})
