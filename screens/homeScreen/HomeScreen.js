import React, {useState} from 'react'
import {
  HStack,
  Stack,
  IconButton,
  Heading,
  Menu,
  Pressable,
  Box,
  Input,
  Spacer,
  FlatList,
  Text,
} from 'native-base'

import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors} from '../../constants/theme'
import AlbumCard from '../../components/albumCard/AlbumCard'
import Participant from '../../components/paricipants/Participant'
import NewAlbum from '../../components/bottomSheet/NewAlbum'
import Photo from '../../components/photo/Photo'
import {TouchableOpacity, View} from 'react-native'
const numColumns = 3

const PHOTOS = [
  {
    id: 1,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 2,
    photo: 'https://i.ibb.co/BsQ6Q1q/pexels-designecologist-1779487.jpg',
  },
  {
    id: 3,
    photo: 'https://i.ibb.co/McV5BBY/pexels-luis-gomes-546819.jpg',
  },
  {
    id: 4,
    photo: 'https://i.ibb.co/YQ7hfGn/pexels-kevin-ku-577585.jpg',
  },
  {
    id: 5,
    photo: 'https://i.ibb.co/g9BqyjQ/pexels-junior-teixeira-2047905.jpg',
  },
  {
    id: 6,
    photo: 'https://i.ibb.co/LZhy0xw/1634143707923.jpg',
  },
  {
    id: 7,
    photo: 'https://i.ibb.co/s2mBY8Q/cosmetic.png',
  },
  {
    id: 8,
    photo: 'https://i.ibb.co/LZhy0xw/1634143707923.jpg',
  },
  {
    id: 9,
    photo: 'https://i.ibb.co/JmL64c6/Cosmetic-Industry.jpg',
  },
  {
    id: 10,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 11,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 12,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 13,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 1,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 2,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 3,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 4,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 5,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 6,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 7,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 8,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 9,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 10,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 11,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 12,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
  {
    id: 13,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  },
]

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns)

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true})
    numberOfElementsLastRow++
  }

  return data
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Munnar Trip',
    color: '#A5D6A7',
    isSelected: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fahad Wedding',
    color: '#EF9A9A',
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Elson Engagement',
    color: '#FFCC80',
    isSelected: false,
  },
  {
    id: '58694a0f-3d1-471f-bd96-145571e29d72',
    title: 'InLens release',
    color: '#80DEEA',
    isSelected: false,
  },
]

const PR = [
  {id: 0},
  {
    id: 1,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
    name: 'Fahad',
  },
  {id: 2, photo: '', name: 'Adhul'},
  {id: 3, photo: '', name: 'Elson'},
  {
    id: 4,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
    name: 'Vinay',
  },
  {
    id: 5,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
    name: 'John',
  },
  {
    id: 6,
    photo:
      'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
    name: 'Amal',
  },
]

const renderAvatar = ({item}) => (
  <Participant id={item.id} photo={item.photo} name={item.name} />
)

const renderAlbum = ({item}) => (
  <AlbumCard
    name={item.title}
    color={item.color}
    // isSelected={item.id === currentAlbum}
    isSelected={item.isSelected}
  />
)

const renderPhotos = ({item}) => {
  return <Photo empty={item.empty} uri={item.photo} />
}

const HomeScreen = () => {
  const [selectSearch, setSelectSearch] = useState(false)

  const getHeader = () => {
    return (
      <Stack px="2">
        <HStack justifyContent="space-between" space={8} alignItems="center">
          <Heading size="sm" color={colors.TITLE}>
            Recent
          </Heading>
          <Box flexDirection="row" alignItems="center" mb={4}>
            {/* <IconButton
              android_ripple={{color: 'red', borderless: false, radius: 10}}
              icon={<Icon name="search" />}
              // borderRadius="full"
              onPress={() => setSelectSearch(true)}
              _icon={{
                color: colors.WHITE,
                size: 24,
              }}
            /> */}
            <Menu
              w="160"
              background="#272727"
              borderColor={colors.PRIMARY}
              trigger={triggerProps => {
                return (
                  <TouchableOpacity
                    accessibilityLabel="More options menu"
                    {...triggerProps}>
                    <View>
                      <Icon name="filter-list" color="#fafafa" size={24} />
                    </View>
                  </TouchableOpacity>
                )
              }}>
              <Menu.Item
                _text={{
                  color: 'white',
                }}
                // androidRippleColor={{color: '#', borderless: false}}
                android_ripple={true}>
                Recent
              </Menu.Item>
              <Menu.Item
                _text={{
                  color: 'white',
                }}>
                Created
              </Menu.Item>
              <Menu.Item
                _text={{
                  color: 'white',
                }}>
                Joined
              </Menu.Item>
            </Menu>
          </Box>
        </HStack>
        <FlatList
          data={DATA}
          renderItem={renderAlbum}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Heading size="sm" color={colors.TITLE} mt="4" mb="4">
          Participants
        </Heading>
        <FlatList
          data={
            // data.filter((item) => item.id === currentAlbum)[0].participants
            PR
          }
          renderItem={renderAvatar}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // style={styles.participantsList}
        />
        <Heading size="sm" color={colors.TITLE} mt={4} mb={4}>
          Photos
        </Heading>
      </Stack>
    )
  }
  return (
    <FlatList
      data={formatData(PHOTOS, numColumns)}
      renderItem={renderPhotos}
      keyExtractor={item => item.id}
      // style={styles.photos}
      numColumns={3}
      contentContainerStyle={{paddingBottom: 0}}
      // style={{marginVertical: 10}}
      ListHeaderComponent={getHeader}
      // ListFooterComponent={<Text>Loading..</Text>}
      ListEmptyComponent={<Text>No photos added</Text>}
    />
  )
}

export default HomeScreen
