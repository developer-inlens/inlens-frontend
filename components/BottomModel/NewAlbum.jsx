import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import TextField from "../TextField";
import Button from "../button/Index";
import Title from "../texts/Title";
import SubTitle from "../texts/SubTitle";
import Message from "../texts/Message";
import dayjs from "dayjs";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const NewAlbum = () => {
  const [count, setCount] = useState(1);
  const [date, setDate] = useState(dayjs().add(1, "day"));

  const increment = () => {
    setCount((c) => c + 1);
    setDate(dayjs(date).add(1, "day"));
  };

  const decrement = async () => {
    if (count < 2) {
      alert("Minimum 1 day needed");
      return;
    }
    setCount((c) => c - 1);
    setDate(dayjs(date).subtract(1, "day"));
  };

  return (
    <View style={styles.body}>
      <TextField label="Album Name" />
      <View style={styles.secondSec}>
        <SubTitle title="Total Event Days" />
        <View style={styles.days}>
          <View style={styles.buttonGroup}>
            <Button type={1} isIncrement={false} onPress={decrement} />
            <View style={styles.count}>
              <Title title={count} />
            </View>
            <Button type={1} isIncrement={true} onPress={increment} />
          </View>
          <Message
            title={`Photos taken till ${date.date()} ${
              months[date.month()]
            } can be uploaded to your album`}
          />
        </View>
      </View>
      <Button type={4} title="Create album" />
    </View>
  );
};

export default NewAlbum;

const styles = ScaledSheet.create({
  body: {
    paddingTop: "41@s",
  },
  secondSec: {
    marginTop: "24@s",
    marginBottom: "24@s",
  },
  days: {
    marginTop: "12@s",
    flexDirection: "row",
    paddingRight: "150@s",
  },
  count: {
    marginHorizontal: "10@s",
    justifyContent: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    marginRight: "36@s",
  },
});
