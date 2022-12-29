import React, { useState } from "react";
import { Dimensions, Platform, View } from "react-native";
import { Icon } from "../Basic"
import { Input, Pressable } from "native-base";
import { COLOR, SIZE } from '@theme/typography'

const TextInput = (props) => {
  const { borderWidth, borderColor, rightIcon, isShow, name, style, value, onChangeText, keyboardType, maxLength,type, placeholder, ...p } = props
  const [show, setShow] = useState(isShow);
  return (
    <View style={styles.inputContent}>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor='#999'
        maxLength={maxLength}
        variant="outline"
        // borderWidth={2}
        // borderColor={'red'}
        keyboardType={keyboardType}
        type={type}
        _focus={{ borderColor: 'warmGray.300' }}
        borderColor="warmGray.300"
        borderBottomWidth={2}
        InputLeftElement={
          <Icon
            name={name}
            type="MaterialIcons"
            style={{ fontSize: SIZE["2xl"], color: "muted.400" }}
          />
        }
        InputRightElement={
          rightIcon ? (
            <Pressable onPress={() => setShow(!show)}>

              <Icon
                name={show ? "visibility" : "visibility-off"}
                type="MaterialIcons"
                style={{ fontSize: SIZE["md"], color: COLOR.GREY, marginRight: 20, }}
              />
            </Pressable>
          ) : null
        }
        style={props.style ? [styles.container, props.style] : styles.container}>{props.children}</Input>
    </View>
  )
}

const deviceHeight = Dimensions.get('window').height;

const styles = {
  container: {
   
  },
  inputContent: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5
  },
}

export default TextInput