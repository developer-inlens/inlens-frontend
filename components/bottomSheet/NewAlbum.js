import React, {useState, useEffect} from 'react'
import {
  Box,
  Text,
  HStack,
  VStack,
  Input,
  Heading,
  Alert,
  useToast,
} from 'native-base'
import {Keyboard} from 'react-native'
import dayjs from 'dayjs'
import Button1 from '../button/Index'
import {colors, margin} from '../../constants/theme'
import {useSelector, useDispatch} from 'react-redux'
import {createAlbum as newAlbum} from '../../redux/slices/albumSlice'
import {createAlbum} from '../../redux/actions/album'
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
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const toast = useToast()

  const onAlbumCreate = async () => {
    if (name.length === 0) return
    setLoading(true)
    const {data, err} = await createAlbum({
      album_name: name,
      // no_of_days: count,
    })
    console.log('%%', data, err)
    if (err) {
      setVisible(false)
      return toast.show({
        render: () => {
          return (
            <Box
              bg="#272727"
              px="5"
              py="5"
              rounded="md"
              mb={5}
              flexDir="row"
              justifyContent="center"
              alignItems="center">
              <Alert.Icon color="#FFCC80" />
              <Text marginLeft={5}>{err}</Text>
            </Box>
          )
        },
      })
    }
    dispatch(
      newAlbum({
        AlbumId: data.id,
        album_title: name,
        count,
        color: colors.LIGHT_GREEN,
        photos: [],
        participants: [],
      }),
    )
    setLoading(false)
    setName('')
    setCount(1)
    setVisible(false)
  }

  const increment = () => {
    setCount(c => c + 1)
    setDate(dayjs(date).add(1, 'day'))
  }

  const decrement = async () => {
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
        defaultValue={name}
        selectTextOnFocus={true}
      />
      {/* <Text
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
          <Button1
            type={1}
            isIncrement={false}
            onPress={decrement}
            disabled={count === 1}
          />
          <Box mx={margin.MD} justifyContent="center">
            <Heading color={colors.TITLE} size="md">
              {count}
            </Heading>
          </Box>
          <Button1
            type={1}
            isIncrement={true}
            onPress={increment}
            disabled={count === 14}
          />
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
      </HStack> */}
      <Box flexDirection="row" width={'full'} justifyContent={'flex-end'}>
        <Button1
          type={4}
          title="Create"
          onPress={onAlbumCreate}
          loading={loading}
        />
      </Box>
    </VStack>
  )
}
export default NewAlum
