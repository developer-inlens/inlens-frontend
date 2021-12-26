import React, { useState } from "react";
import { Animated, View, SafeAreaView, FlatList } from "react-native";
import ParallaxScrollView from "./ParallelaxScrollView";
// import { MaterialIcons } from "@expo/vector-icons";
import { Icon as MaterialIcons , } from 'react-native-elements';

import styles from "./style";
import Album from "../../components/Album";
import Participant from "../../components/Participant";
import Photo from "../../components/Photo";
import DropDown from "../../components/dropDown/DropDown";
import TextField from "../../components/TextField";
import SubTitle from "../../components/texts/SubTitle";
import { scale } from "react-native-size-matters";
import Button from "../../components/button/Index";

const numColumns = 3;

const PHOTOS = [
  {
    id: 1,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 2,
    photo: "https://i.ibb.co/BsQ6Q1q/pexels-designecologist-1779487.jpg",
  },
  {
    id: 3,
    photo: "https://i.ibb.co/McV5BBY/pexels-luis-gomes-546819.jpg",
  },
  {
    id: 4,
    photo: "https://i.ibb.co/YQ7hfGn/pexels-kevin-ku-577585.jpg",
  },
  {
    id: 5,
    photo: "https://i.ibb.co/g9BqyjQ/pexels-junior-teixeira-2047905.jpg",
  },
  {
    id: 6,
    photo: "https://i.ibb.co/LZhy0xw/1634143707923.jpg",
  },
  {
    id: 7,
    photo: "https://i.ibb.co/s2mBY8Q/cosmetic.png",
  },
  {
    id: 8,
    photo: "https://i.ibb.co/LZhy0xw/1634143707923.jpg",
  },
  {
    id: 9,
    photo: "https://i.ibb.co/JmL64c6/Cosmetic-Industry.jpg",
  },
  {
    id: 10,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 11,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 12,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 13,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 1,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 2,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 3,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 4,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 5,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 6,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 7,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 8,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 9,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 10,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 11,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 12,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
  {
    id: 13,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Album",
    color: "#A5D6A7",
    isSelected: true,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Album",
    color: "#EF9A9A",
    isSelected: false,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Album",
    color: "#FFCC80",
    isSelected: false,
  },
  {
    id: "58694a0f-3d1-471f-bd96-145571e29d72",
    title: "Album",
    color: "#80DEEA",
    isSelected: false,
  },
];
const PR = [
  { id: 0 },
  {
    id: 1,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    name: "Fahad",
  },
  { id: 2, photo: "", name: "Adhul" },
  { id: 3, photo: "", name: "Elson" },
  {
    id: 4,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    name: "Vinay",
  },
  {
    id: 5,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    name: "John",
  },
  {
    id: 6,
    photo:
      "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    name: "Amal",
  },
];
const renderAlbum = ({ item }) => (
  <Album
    name={item.title}
    color={item.color}
    // isSelected={item.id === currentAlbum}
    isSelected={item.isSelected}
  />
);
const renderAvatar = ({ item }) => (
  <Participant id={item.id} photo={item.photo} name={item.name} />
);
const renderPhotos = ({ item }) => {
  return <Photo empty={item.empty} uri={item.photo} />;
};

const Home = () => {
  const [filter, setFilter] = useState("Recent");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState("");

  const onTextChange = (value) => setSearch(value);

  const onSearch = () => {
    console.log("###", search);
  };

  const onFilter = (e) => {
    setFilter(e);
    console.log(e);
  };

  const renderParallaxHeader = (value) => {
    return (
      <View style={styles.subContainer}>
        <View style={styles.menu}>
          <View style={styles.filterText}>
            <SubTitle title={filter} />
          </View>
          {searching ? (
            <TextField type={2} onChange={onTextChange} onSubmit={onSearch} />
          ) : (
            <MaterialIcons
              name="search"
              color="#fff"
          type="material"
              size={20}
              style={styles.icon}
              onPress={() => setSearching(true)}
            />
          )}
          <DropDown
            visible={showDropdown}
            setVisible={setShowDropdown}
            onSelect={onFilter}
            filter={filter}
          />
        </View>
        <FlatList
          data={DATA}
          renderItem={renderAlbum}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
        />
        <View style={styles.participants}>
          <SubTitle title="Participants" />
          <FlatList
            data={
              // data.filter((item) => item.id === currentAlbum)[0].participants
              PR
            }
            renderItem={renderAvatar}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            style={styles.participantsList}
          />
        </View>
      </View>
    );
  };

  const renderStickyHeader = (value) => {
    const opacity = value.interpolate({
      inputRange: [0, 150, 200],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });
    return (
      <View style={styles.stickyHeader}>
        {/* <Animated.View style={[styles.stickyHeaderBackground, { opacity }]} /> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ParallaxScrollView
        style={{ flex: 1 }}
        parallaxHeaderHeight={scale(240)}
        stickyHeaderHeight={scale(100)}
        parallaxHeader={renderParallaxHeader}
        stickyHeader={renderStickyHeader}
      >
        <View style={[styles.participants, styles.photosList]}>
          <View style={styles.photosHead}>
            <SubTitle title="Photos" />
          </View>
          <FlatList
            data={formatData(PHOTOS, numColumns)}
            renderItem={renderPhotos}
            keyExtractor={(item) => item.id}
            style={styles.photos}
            numColumns={3}
            contentContainerStyle={{ paddingBottom: 0 }}
          />
        </View>
      </ParallaxScrollView>
      <Button type={6} />
    </SafeAreaView>
  );
};

export default Home;
