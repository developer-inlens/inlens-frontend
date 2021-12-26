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
    fontSize: "20@s",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "24@s",
    letterSpacing: "0.15@s",
    color: colors.TITLE,
  },
});
