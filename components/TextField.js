import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

const MyComponent = ({ label, type = 1, value, onChange, onSubmit }) => {
  const [text, setText] = useState("");

  return (
    <TextInput
      style={[styles.textField, type === 2 && styles.search]}
      label={label}
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      theme={{
        colors: {
          text: "#ffffffde",
          accent: "#ffffff",
          primary: "#ffffff61",
          background: type === 2 ? "#121212" : "#ffffff0a",
          placeholder: "#ffffff61",
        },
      }}
    />
  );
};

export default MyComponent;

const styles = ScaledSheet.create({
  search: {
    height: "30@s",
    maxWidth: "150@s",
    marginRight: "10@s",
  },
  // search: {
  //   marginRight: "10@s",
  // },
});
