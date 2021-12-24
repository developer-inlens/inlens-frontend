import React from "react";
import { Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../constants/theme";
const SubTitle = ({ title }) => {
  return <Text style={styles.text}>{title}</Text>;
};

export default SubTitle;

const styles = ScaledSheet.create({
  text: {
    fontSize: "12@s",
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: "16@s",
    letterSpacing: "0.4@s",
    color: colors.PINK,
  },
});
