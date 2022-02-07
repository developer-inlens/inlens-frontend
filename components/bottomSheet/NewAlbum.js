import React, {useState} from 'react'
import {
  Heading,
  Box,
  Toast,
  Text,
  HStack,
  VStack,
  Input,
  Button,
} from 'native-base'
import TextField from '../textField/TextField'
import dayjs from 'dayjs'
import Button1 from '../button/Index'
import {colors} from '../../constants/theme'
import Message from '../texts/Message'
import SubTitle from '../texts/SubTitle'
import Title from '../texts/Title'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
    <VStack width="full">
      <Input
        size="2xl"
        color={'white'}
        variant={'underlined'}
        borderWidth={0}
        pt={6}
        mb={4}
        ml={4}
        mr={4}
        placeholder="Name your album..."
        maxLength={32}
      />
      <Text fontSize="lg" opacity={0.6} color={colors.WHITE} ml={4} mt={4}>
        Total days
      </Text>
      <HStack
        direction="row"
        mt="4"
        mb="4"
        justifyContent="space-around"
        width="full">
        <Box flexDir="row" alignItems="center">
          <Button1 type={1} isIncrement={false} onPress={decrement} />
          <Box mx="4" justifyContent="center">
            <Title title={count} />
          </Box>
          <Button1 type={1} isIncrement={true} onPress={increment} />
        </Box>
        <Box flexDirection="row" width="156">
          {/* <Message
            title={`Photos taken till ${date.date()} ${
              months[date.month()]
            } can be uploaded to your album`}></Message> */}
          <Text
            fontSize="sm"
            marginRight={4}
            color={colors.WHITE}
            opacity={0.6}>
            Photos taken till {date.date()} {months[date.month()]} can be
            uploaded to your album...
          </Text>
        </Box>
      </HStack>
      {/* <Button type={4} title="CREATE ALBUM" /> */}
      {/* <Button
        // backgroundColor={'#272727'}
        tintColor="#272727"
        tint
        bu
        ml={4}
        mr={4}
        endIcon={<Icon name="check" size={24} color={colors.LIGHT_GREEN} />}
        p={4}>
        CREATE
      </Button> */}
      <Box flexDirection="row" width={'full'} justifyContent={'flex-end'}>
        <Button1 type={4} title="Create" />
      </Box>
    </VStack>
  )
}
export default NewAlum
