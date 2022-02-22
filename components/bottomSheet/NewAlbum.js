import React, {useState} from 'react'
import {Box, Text, HStack, VStack, Input, Heading} from 'native-base'
import dayjs from 'dayjs'
import Button1 from '../button/Index'
import {colors, margin} from '../../constants/theme'
import {useSelector, useDispatch} from 'react-redux'
import {createAlbum} from '../../redux/slices/albumSlice'

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

const NewAlum = ({setVisible}) => {
  const [count, setCount] = useState(1)
  const [date, setDate] = useState(dayjs().add(1, 'day'))
  const [name, setName] = useState(`album_${dayjs().format('DD-MM-YY')}`)

  const dispatch = useDispatch()

  const onAlbumCreate = () => {
    dispatch(
      createAlbum({
        id: Math.random().toString(),
        title: name,
        count,
        color: colors.LIGHT_GREEN,
        photos: [],
      }),
    )
    setName('')
    setCount(1)
    setVisible(false)
  }

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
        mb={margin.MD}
        mx={margin.MD}
        placeholder="Name your album..."
        maxLength={32}
        value={name}
        onChangeText={setName}
      />
      <Text
        fontSize="lg"
        opacity={0.6}
        color={colors.WHITE}
        ml={margin.MD}
        mt={margin.MD}>
        Total days
      </Text>
      <HStack
        direction="row"
        my={margin.MD}
        justifyContent="space-around"
        width="full">
        <Box flexDir="row" alignItems="center">
          <Button1 type={1} isIncrement={false} onPress={decrement} />
          <Box mx={margin.MD} justifyContent="center">
            <Heading color={colors.TITLE} size="md">
              {count}
            </Heading>
          </Box>
          <Button1 type={1} isIncrement={true} onPress={increment} />
        </Box>
        <Box flexDirection="row" width="156">
          <Text
            fontSize="sm"
            marginRight={margin.MD}
            color={colors.WHITE}
            opacity={0.6}>
            Photos taken till {date.date()} {months[date.month()]} can be
            uploaded to your album...
          </Text>
        </Box>
      </HStack>
      <Box flexDirection="row" width={'full'} justifyContent={'flex-end'}>
        <Button1 type={4} title="Create" onPress={onAlbumCreate} />
      </Box>
    </VStack>
  )
}
export default NewAlum
