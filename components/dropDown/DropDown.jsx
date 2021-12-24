import React from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";
import Item from "./Item";
const DropDown = ({ visible, setVisible, onSelect, filter }) => {
  return (
    <View style={styles.dropDown}>
      <MaterialIcons
        name="filter-list"
        color="#fff"
        size={18}
        onPress={() => setVisible(true)}
      />
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => {}}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setVisible(false)}
          style={styles.parent}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.child}
            onPress={() => setVisible(false)}
          >
            <Item
              title="Recent"
              isSelected={filter === "Recent"}
              slug="recent"
              onClick={onSelect}
              setVisible={setVisible}
            />
            <Item
              title="Created"
              isSelected={filter === "Created"}
              slug="created"
              onClick={onSelect}
              setVisible={setVisible}
            />
            <Item
              title="Joined"
              isSelected={filter === "Joined"}
              slug="joined"
              onClick={onSelect}
              setVisible={setVisible}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default DropDown;

const styles = ScaledSheet.create({
  dropDown: {
    flex: 1,
  },
  parent: {
    backgroundColor: "transparent",
    flex: 1,
  },
  child: {
    backgroundColor: "#121212",
    right: "40@s",
    top: "70@s",
    aspectRatio: 1.5,
    width: "128@s",
    position: "absolute",
  },
});
