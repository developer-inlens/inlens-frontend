import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './style'
const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../assets/welcome-icon.png')}
      />
      <View style={styles.second}>
        <Text style={styles.title}>InLens</Text>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            Hi ,{'\n'}
            We would love to hold your valuable memories with your loved ones.
          </Text>
          <Text style={styles.message}>Get Started...</Text>
        </View>
        <TouchableOpacity style={[styles.btn, styles.btnOne]}>
          <Image
            style={styles.plusIcon}
            source={require('../../assets/plus.png')}
          />
          <Text style={[styles.btnText, styles.btnOneText]}>
            Create new Shared Album
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnTwo]}>
          <Text style={[styles.btnText, styles.btnTwoText]}>
            Join existing Shared Album
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome
