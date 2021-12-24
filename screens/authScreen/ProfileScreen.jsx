import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import TextField from "../../components/TextField";
const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Profile screen</Text>
      <TextField label="Phone" />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 20,
    backgroundColor: "white",
  },
});
