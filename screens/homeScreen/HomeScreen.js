import React, {useState} from 'react'
import {
  HStack,
  Stack,
  Heading,
  Menu,
  Box,
  FlatList,
  Text,
  Fab,
} from 'native-base'
import {useSelector} from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {colors, margin, size} from '../../constants/theme'
import AlbumCard from '../../components/albumCard/AlbumCard'
import Participant from '../../components/paricipants/Participant'
import Photo from '../../components/photo/Photo'
import {TouchableOpacity, View} from 'react-native'
import BottomModelSheet from '../../components/bottomSheet/BottomSheet'
import UploadPhoto from '../../components/bottomSheet/PhotoUpload'
import Header from '../../components/header/Header'
const numColumns = 2

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

const renderPhotos = ({item}) => {
  return <Photo empty={item.empty} photo={item} />
}

const HomeScreen = ({navigation}) => {
  const {albums} = useSelector(state => state.album)

  const [yOffset, setYoffset] = useState(0)
  const [currentAlbum, setCurrentAlbum] = useState(albums[0])
  const [photo, setPhoto] = useState('')
  const [chooseUpload, setChooseUpload] = useState(false)

  const PHOTOS = [
    ...albums.filter(item => item.id === currentAlbum.id)[0].photos,
  ]

  const toggleBottomNavigationView = () => {
    setChooseUpload(!chooseUpload)
  }

  const renderAlbum = ({item}) => (
    <AlbumCard
      name={item.title}
      color={item.color}
      isSelected={item.id === currentAlbum?.id}
      onPress={() => setCurrentAlbum(item)}
    />
  )

  const getHeader = () => {
    return (
      <Stack px="2">
        <HStack justifyContent="space-between" space={8} alignItems="center">
          <Heading size="sm" color={colors.TITLE}>
            Recent
          </Heading>
          <Box flexDirection="row" alignItems="center" mb={margin.MD}>
            <Menu
              w="160"
              background={colors.SECONDARY}
              borderColor={colors.BACKGROUND}
              trigger={triggerProps => {
                return (
                  <TouchableOpacity
                    accessibilityLabel="Filter"
                    {...triggerProps}>
                    <View>
                      <Icon
                        name="filter-list"
                        color={colors.WHITE_PRIMARY}
                        size={size.ICON_SIZE}
                      />
                    </View>
                  </TouchableOpacity>
                )
              }}>
              <Menu.Item
                _text={{
                  color: colors.WHITE,
                }}
                android_ripple={true}>
                Recent
              </Menu.Item>
              <Menu.Item
                _text={{
                  color: colors.WHITE,
                }}>
                Created
              </Menu.Item>
              <Menu.Item
                _text={{
                  color: colors.WHITE,
                }}>
                Joined
              </Menu.Item>
            </Menu>
          </Box>
        </HStack>
        <FlatList
          data={albums}
          renderItem={renderAlbum}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Heading size="sm" color={colors.TITLE} my={margin.MD}>
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
        <Heading size="sm" color={colors.TITLE} my={margin.MD}>
          Photos
        </Heading>
      </Stack>
    )
  }
  return (
    <>
      <FlatList
        data={formatData(PHOTOS, numColumns)}
        renderItem={renderPhotos}
        keyExtractor={item => item.id}
        onScroll={e => {
          if (yOffset <= 0 && e.nativeEvent.contentOffset.y > 0) {
            navigation.setOptions({
              headerTitle: currentAlbum?.title,
              headerStyle: {
                backgroundColor: currentAlbum?.color,
              },
            })
          } else if (yOffset > 0 && e.nativeEvent.contentOffset.y <= 0) {
            navigation.setOptions({
              headerTitle: () => <Header title="Shared Albums" />,
              headerStyle: {
                backgroundColor: colors.BACKGROUND,
              },
            })
          }
          setYoffset(e.nativeEvent.contentOffset.y)
        }}
        // style={styles.photos}
        numColumns={numColumns}
        contentContainerStyle={{paddingBottom: 0}}
        // style={{marginVertical: 10}}
        ListHeaderComponent={getHeader}
        // ListFooterComponent={<Text>Loading..</Text>}
        ListEmptyComponent={<Text color={colors.WHITE}>No photos added</Text>}
      />
      <Fab
        position="absolute"
        size="sm"
        backgroundColor={colors.PRIMARY}
        // label="Upload"
        icon={<Icon name={'done'} color={colors.BLACK} size={size.ICON_SIZE} />}
        onPress={toggleBottomNavigationView}
      />
      <BottomModelSheet
        visible={chooseUpload}
        setVisible={toggleBottomNavigationView}
        Body={UploadPhoto}
        title={'New Album'}
        headerVisible={false}
        albumId={currentAlbum.id}
      />
    </>
  )
}
HomeScreen.navigationOptions = {
  headerTitle: 'Fahad',
}
export default HomeScreen
