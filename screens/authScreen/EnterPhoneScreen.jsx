import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import TextField from "../../components/TextField";

const EnterPhoneScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Lets start</Text>
      <TextField label="Phone" />
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnterPhoneScreen;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 20,
    backgroundColor: "white",
  },
});
