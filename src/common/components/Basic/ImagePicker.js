import ImagePicker from 'react-native-image-crop-picker';

import { COLOR } from '@theme/typography'
import React from 'react'

const ImgPicker = (props) => {
  const { getImage,...p } = props
  //console.log('getImage',''+ data);
  return (
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      getImage();
    
     // setImage(image);
     // (itemValue) => onChange(itemValue)
    })
  )
}

const styles = {
  button: {
    primary: {
      backgroundColor: COLOR.PRIMARY,
      marginHorizontal: 15,
      paddingTop: 12,
      paddingBottom: 12
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

export default ImgPicker
