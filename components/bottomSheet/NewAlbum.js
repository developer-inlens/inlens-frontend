import React, {useState} from 'react'
import {Heading, Box, Center, Text, HStack, VStack} from 'native-base'
import TextField from '../textField/TextField'
import dayjs from 'dayjs'
import Button from '../button/Index'
import {colors} from '../../constants/theme'
import Message from '../texts/Message'
import SubTitle from '../texts/SubTitle'
import Title from '../texts/Title'
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const NewAlum = () => {
  const [count, setCount] = useState(1)
  const [date, setDate] = useState(dayjs().add(1, 'day'))

  const increment = () => {
    setCount(c => c + 1)
    setDate(dayjs(date).add(1, 'day'))
  }

  const decrement = async () => {
    if (count < 2) {
      alert('Minimum 1 day needed')
      return
    }
    setCount(c => c - 1)
    setDate(dayjs(date).subtract(1, 'day'))
  }

  return (
    <VStack width="full" py="4">
      <TextField />
      <SubTitle title="Total Event Days" mt={4} />
      <HStack
        direction="row"
        mt="2"
        mr="2"
        mb="4"
        justifyContent="space-around"
        width="full">
        <Box flexDir="row" mr="4" alignItems="center">
          <Button type={1} isIncrement={false} onPress={decrement} />
          <Box mx="2" justifyContent="center">
            <Title title={count} />
          </Box>
          <Button type={1} isIncrement={true} onPress={increment} />
        </Box>
        <Box flexDirection="row" width="156">
          <Message
             title={`Photos taken till ${date.date()} ${
              months[date.month()]
            } can be uploaded to your album`}
            
          />
        </Box>
      </HStack>
      <Button type={4} title="CREATE ALBUM" />
    </VStack>
  )
}
export default NewAlum
