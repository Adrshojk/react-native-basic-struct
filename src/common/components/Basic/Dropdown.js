import React, { useState } from "react";
import { Select, Pressable, View } from "native-base";
import {Icon } from '../../../common/components/Basic'

import { COLOR, SIZE, FAMILY } from "@theme/typography";
import { set } from "lodash";


const Dropdown = ({dropdownIcon, ...props }) => {
  const {
    service,
    setService,
    minWidth,
    accessibilityLabel,
    placeholder,
    data,
    setValue,
    ...p
  } = props;
  // console.log("cmcmcmcmc", data);
  //const [show, setShow] = useState(isShow);
  
  return (
    <Select
      variant="outline"
      selectedValue={service}
      minWidth={minWidth}
      accessibilityLabel={accessibilityLabel}
      dropdownIcon={<Icon name='caret-down' type='FontAwesome' style={{fontSize:24, marginRight: 10}}/>}
      placeholder={placeholder}
      placeholderTextColor={'#000'}
      color={'#000'}
      mt={1}
      _selectedItem={{
        bg: COLOR.PRIMARY,
      }}
      onValueChange={(itemValue) => setValue(itemValue)}
    
    >
      {data === undefined || data === ""
        ? null
        : data.content.map((item,i ) => {
          return (
            <Select.Item key={i} label={item.name} value={item.id} />
          );
        })}
      {/* {arrayList.map((item,i ) => {
        return (
          <Select.Item label={item.ward_id} value={item.ward_id} />
        );
      })} */}
    </Select>
  );
};
const styles = {
  inputStyle3: {
    marginLeft: 3,
    marginRight: 3,
  },
};
export default Dropdown;