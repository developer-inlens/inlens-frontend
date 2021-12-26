import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
// import { MaterialIcons } from "@expo/vector-icons";
import { Icon as MaterialIcons  } from 'react-native-elements';


const Participant = ({ id, photo, name }) => {
  let Image_Http_URL = { uri: photo };

  return (
    <View>
      {photo && photo.length > 0 ? (
        <Image source={Image_Http_URL} style={styles.logo} />
      ) : (
        <View style={styles.avatar}>
          {id === 0 ? (
            <MaterialIcons
              name="add"
              color="#64B5F6"
              size={30}
              style={styles.icon}
            />
          ) : (
            <Text style={styles.name}>{name && name[0]}</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default Participant;

const styles = ScaledSheet.create({
  logo: {
    height: "30@s",
    width: "30@s",
    borderRadius: 50,
    marginRight: "6@s",
  },
  avatar: {
    height: "30@s",
    width: "30@s",
    backgroundColor: "#272727",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "6@s",
  },
  name: {
    color: "#A5D6A7",
    fontWeight: "500",
    fontSize: "14@s",
    letterSpacing: "1.25@s",
    textTransform: "uppercase",
    lineHeight: "16@s",
  },
});
