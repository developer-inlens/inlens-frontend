import React from 'react'
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors, size} from '../../constants/theme'
const TypeOne = ({onPress, title, disabled, loading, icon}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.LIGHT_GREEN}
          style={styles.icon}
        />
      ) : (
        icon && (
          <Icon
            name={'done'}
            color={colors.LIGHT_GREEN}
            size={size.ICON_SIZE}
            style={styles.icon}
          />
        )
      )}
    </TouchableOpacity>
  )
}

export default TypeOne

const styles = ScaledSheet.create({
  button: {
    width: '314@s',
    height: '56@s',
    backgroundColor: colors.BACKGROUND,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '24@s',
    marginBottom: '8@s',
    marginTop: '8@s',
    marginRight: '16@s',
    position: 'relative',
  },
  text: {
    // flex: 1,
    textAlign: 'center',
    fontSize: '14@s',
    fontWeight: '500',
    lineHeight: '16@s',
    letterSpacing: '1.25@s',
    textTransform: 'uppercase',
    color: colors.WHITE_PRIMARY,
    marginRight: '4@s',
  },
  icon: {
    position: 'absolute',
    right: '20@s',
    // marginRight: '60@s',
  },
})
