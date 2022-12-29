import { Pressable } from 'react-native'

import { COLOR } from '@theme/typography'
import React from 'react'
import { Button } from 'native-base'

const Btn = ({ variant = 'DEFAULT', children, style, marginTop, leftIcon, RightIcon, onPress, color, ...props }) => {
  const btnStyle = [styles.button[variant]]
  return (
    <Button
      variant={variant}
      {...props}
      style={btnStyle}
      onPress={onPress}
      marginTop={marginTop}
    >
      {children}
    </Button>
  )
}


// export const Btn = ({variant = 'DEFAULT', disabled, style, children, ...props}) => {
//   const btnStyle = [styles.button[variant]]
//   if (disabled) {
//     btnStyle.push(styles.disabled)
//   }
//   if (style) {
//     btnStyle.push(style)
//   }
//   return <Button
//       {...props}
//       style={btnStyle}
//   >
//     {children}
//   </Button>
// }

const styles = {
  button: {
    primary: {
      backgroundColor: COLOR.PRIMARY,
      marginHorizontal: 15,
      paddingTop: 12,
      paddingBottom: 12,
      marginTop: 30
    },
    default: {
      backgroundColor: COLOR.DEFAULT,
      borderRadius: 5,
      alignItems: 'center',
      paddingVertical: 17,
    },
    secondary: {

    },
  },
  disabled: {
    backgroundColor: COLOR.DARK
  },
  size: {}
}

export default Btn
