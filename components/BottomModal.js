import React from "react";
import { View, Text } from "react-native";
import { BottomSheet } from "react-native-btr";
import { ScaledSheet } from "react-native-size-matters";
// import { MaterialIcons } from "@expo/vector-icons";
import { Icon as MaterialIcons  } from 'react-native-elements';
import Title from "./texts/Title";

const App = ({ visible, setVisible, onDelete, title, Body }) => {
  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={setVisible}
      onBackdropPress={setVisible}
    >
      <View style={styles.bottomNavigationView}>
        <View style={styles.header}>
          {/* <Text style={styles.title}>New Album</Text> */}
          <View style={styles.title}>
            <Title title="New Album" />
          </View>
          {onDelete && (
            <MaterialIcons
              name="delete"
              color="#FF6262"
              onPress={onDelete}
              size={25}
              style={styles.delete}
            />
          )}
          <MaterialIcons
            name="close"
            color="#000"
            onPress={setVisible}
            size={20}
            style={styles.icon}
          />
        </View>
        <Body />
      </View>
    </BottomSheet>
  );
};

export default App;

const styles = ScaledSheet.create({
  // container: {
  //   flex: 1,
  //   margin: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#E0F7FA',
  // },
  bottomNavigationView: {
    backgroundColor: "#121212",
    borderTopRightRadius: "16@s",
    borderTopLeftRadius: "16@s",
    width: "100%",
    height: "338@s",
    paddingVertical: "20@s",
    paddingHorizontal: "15@s",
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    //  justifyContent:'space-between'
  },
  icon: {
    backgroundColor: "#EF9A9A",
    width: "20@s",
    borderRadius: 50,
    textAlign: "center",
  },
  delete: {
    marginRight: "18@s",
  },
  title: {
    flex: 1,
  },
});
