import React, {useState} from 'react'
import {Input, FormControl, WarningOutlineIcon, Text, Box} from 'native-base'
const TextField = ({placeholder, err}) => {
  const [focused, setFocused] = useState(false)
  return (
    <Input
      variant="underlined"
      placeholder="Underlined"
      borderBottomColor="#ffffff99"
      backgroundColor="#ffffff0a"
      color="#ffffffde"
      placeholderTextColor="#ffffff61"
      style={{borderColor: 'transparent'}}
    />
  )
}

export default TextField
