import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const Item = ({ title, slug, isSelected, onClick, setVisible }) => {
  const onSelect = () => {
    onClick(title);
    setVisible(false);
  };

  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.item, isSelected && styles.selected]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = ScaledSheet.create({
  item: {
    height: "32@s",
    padding: "6@s",
    borderRadius: "4@s",
  },
  selected: {
    backgroundColor: "#C4C4C433",
  },
  title: {
    fontSize: "14@s",
    lineHeight: "20@s",
    letterSpacing: "0.25@s",
    color: "#ffffffde",
  },
});
