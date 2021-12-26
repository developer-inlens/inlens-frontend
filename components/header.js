import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
import { Icon  } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialIcons';


import { ScaledSheet } from "react-native-size-matters";
import BottomModelSheet from "./BottomModal";
import NewAlbum from "./BottomModel/NewAlbum";
const header = ({ title }) => {
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  let Image_Http_URL = {
    uri: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
  };
  return (
    <View style={styles.header}>
      <View style={styles.section}>
        <Image source={Image_Http_URL} style={styles.logo} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.section}>
        <Icon
         name='add-circle-outline'
          color="#64B5F6"
          type="material"
          onPress={toggleBottomNavigationView}
          size={20}
          style={styles.icon}
        />
        <TouchableOpacity>
          <Text style={styles.join}>Join</Text>
        </TouchableOpacity>
      </View>
      <BottomModelSheet
        visible={visible}
        setVisible={toggleBottomNavigationView}
        title={"New Album"}
        Body={NewAlbum}
      />
    </View>
  );
};

export default header;

const styles = ScaledSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: "32@s",
    width: "32@s",
    borderRadius: 50,
  },

  headerText: {
    fontWeight: "bold",
    fontSize: "20@s",
    lineHeight: "24@s",
    fontWeight: "500",
    color: "#ffffffde",
    marginLeft: "24@s",
  },
  join: {
    fontSize: "20@s",
    lineHeight: "24@s",
    fontWeight: "500",
    color: "#64B5F6",
    marginRight: "24@s",
    marginLeft: "24@s",
  },
  icon: {
    height: "20@s",
  },
});
