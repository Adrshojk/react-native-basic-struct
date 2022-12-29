import React from 'react'
import { View } from 'react-native'

import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Checkbox } from 'native-base';

const CB = ({ variant = 'default', ...props }) => {
  const { style, onChange, prefix, suffix, color, data, ...p } = props
  const [groupValues, setGroupValues] = React.useState([]=data.map((item)=>item.value));


  return (
    <View>
        <Checkbox.Group colorScheme="green" onChange={setGroupValues} value={groupValues}>
          {data.map((item,index)=> {
            return (
              <Checkbox value={item.name} key={index} >{item.name}</Checkbox>
            )
          })}
        </Checkbox.Group>
    </View>

  )
}

const styles = {
  container: {

  }
}

export default CB
