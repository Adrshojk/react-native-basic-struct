import React from 'react'
import { StatusBar, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const C = function (props) {
  const isFocused = useIsFocused()
  if (isFocused) {
    const insets = useSafeAreaInsets()
    const style = { height: insets.top }
    if (props.backgroundColor) {
      style.backgroundColor = props.backgroundColor
    }
    return (
      <View style={style}>
        <StatusBar animated {...props} />
      </View>
    )
  }
  return null
}

export const DarkStatusBar = function (props) {
  return <C backgroundColor='#30D5DD' barStyle='light-content' />
}

export const LightStatusBar = function (props) {
  return <C backgroundColor='#FFF' barStyle='dark-content' />
}

export const TransparentStatusBar = function (props) {
  return <C backgroundColor='#333' barStyle='light-content' />
}