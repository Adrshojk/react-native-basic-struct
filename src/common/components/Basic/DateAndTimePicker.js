import React, { useState } from "react";
import { Button, Pressable, View } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "./Icon";
import { COLOR, SIZE, FAMILY } from "@theme/typography";

const DateAndTimePicker = ({ ...props }) => {
  const { type,mode,onChange,date,requestedDate} = props || {};
 // const { ...p } = props;

  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={requestedDate}
      mode={mode}
      is24Hour={true}
      onChange={onChange}
      timeZoneOffsetInSeconds={3600}
      // maximumDate={new Date()}
      // minimumDate={new Date()}
     // maximumDate={new Date(2030, 10, 20)}
    />
  );
};

const styles = {};

export default DateAndTimePicker;