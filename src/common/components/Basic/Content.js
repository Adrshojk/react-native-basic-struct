import React from 'react'
import { Dimensions, View } from 'react-native'

import { COLOR } from '@theme/typography'

const Content = (props) => {
  return (
    <View style={props.style ? [styles.content, props.style] : styles.content}>{props.children}</View>
  )
}

const deviceHeight = Dimensions.get('window').height

const styles = {
  content: {
    flex:1,
    backgroundColor: COLOR.LIGHT
  }
}

export default Content
