import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

const TypeFive = ({ name, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialIcons name={name} color={colors.BLUE} size={24} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TypeFive;

const styles = ScaledSheet.create({
  button: {
    width: "314@s",
    height: "52@s",
    backgroundColor: colors.BLACK,
    borderRadius: "16@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14@s",
    lineHeight: "16@s",
    letterSpacing: "1.25@s",
    textTransform: "uppercase",
    color: colors.BUTTON_TEXT_WHITE,
  },
});
