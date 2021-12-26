import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { colors } from "../../constants/theme";

const TypeSix = () => {
  return (
    <FAB
      style={styles.fab}
      small={false}
      icon="upload"
      label="Upload"
      color={colors.BLACK}
      onPress={() => console.log("Pressed")}
    />
  );
};

export default TypeSix;

const styles = StyleSheet.create({
  fab: {
    backgroundColor: colors.BLUE,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
