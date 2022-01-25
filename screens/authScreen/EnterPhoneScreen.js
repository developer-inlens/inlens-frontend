import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {authenticate} from '../../redux/slices/authSlice'
// import TextField from '../../components/TextField'

const EnterPhoneScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.authenticate.user)
  const sendPhoneNumber = () => {
    dispatch(authenticate('9645508854'))
    navigation.replace('Home')
    console.log('###', user)
  }

  return (
    <View>
      <Text>Lets start</Text>
      {/* <TextField label="Phone" /> */}
      <TouchableOpacity onPress={sendPhoneNumber}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EnterPhoneScreen

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 20,
    backgroundColor: 'white',
  },
})
