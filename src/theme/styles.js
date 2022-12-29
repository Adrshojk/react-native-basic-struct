import { StyleSheet } from 'react-native'

import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {

  /* Layout */
  layout: {
    flex: 1,
    flexGrow: 1,
  },
  layoutFx: {
    flexGrow: 1,
  },
  layoutFxCenter: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  layoutFxBot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'cetner',
    justifyContent: 'space-between',
    backgroundColor: COLOR.LIGHT,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  navIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DEFAULT
  },
  navText: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
  },

  /* Header */
  nav: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15
  },
  navTransparent: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15
  },
  navLeft: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navMiddle: {
    flex: 6.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRight: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  /* Avatar Sizes */
  avatarTiny: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2
  },
  avatarSmall: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2
  },
  avatarMedium: {
    width: 128,
    height: 128,
    borderRadius: 125 / 2
  },
  imgResponsive: {
    width: '100%',
    minHeight: 1
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  /* Label, TextInput, Picker, Placeholder */
  label: {

  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  textInputMulti: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  picker: {

  },
  placeholder: {

  },
  /* Button */
  btnPrimary: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.PRIMARY
  },
  btnDefault: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.DEFAULT
  },
  btnTransparent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.TRANSPARENT,
  },
  btnWarning: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnWarningText: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnDanger: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnSuccess: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnBack: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 5,
    paddingHorizontal: 3,
    paddingVertical: 3
  },

  headerLight: {
    backgroundColor: COLOR.PRIMARY,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerDark: {
    backgroundColor: COLOR.DEFAULT,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerTransparent: {
    backgroundColor: COLOR.TRANSPARENT,
    elevation: 0,
    borderBottomWidth: 0
  },

  /* Colors */
  DARK: {
    color: COLOR.DARK
  },
  LIGHT: {
    color: COLOR.LIGHT
  },
  GREY5: {
    color: COLOR.GREY5
  },
  GREY2: {
    color: COLOR.GREY2
  },
  bgDark: {
    backgroundColor: COLOR.DARK
  },
  bgLight: {
    backgroundColor: COLOR.LIGHT
  },
  GREY3: {
    color: COLOR.GREY3
  },
  DEFAULT: {
    color: COLOR.DEFAULT
  },
  GREY: {
    color: COLOR.GREY
  },
  YELLOW: {
    color: COLOR.YELLOW
  },
  primary: {
    color: COLOR.PRIMARY
  },
  /* Sizes */
  SIZE_10: {
    fontSize: SIZE.SIZE_10
  },
  SIZE_11: {
    fontSize: SIZE.SIZE_11
  },
  SIZE_12: {
    fontSize: SIZE.SIZE_12
  },
  SIZE_13: {
    fontSize: SIZE.SIZE_13
  },
  SIZE_14: {
    fontSize: SIZE.SIZE_14
  },
  SIZE_16: {
    fontSize: SIZE.SIZE_16
  },
  SIZE_18: {
    fontSize: SIZE.SIZE_18
  },
  SIZE_20: {
    fontSize: SIZE.SIZE_20
  },
  SIZE_22: {
    fontSize: SIZE.SIZE_22
  },
  SIZE_24: {
    fontSize: SIZE.SIZE_24
  },
  SIZE_26: {
    fontSize: SIZE.SIZE_26
  },
  SIZE_30: {
    fontSize: SIZE.SIZE_30
  },
  SIZE_36: {
    fontSize: SIZE.SIZE_36
  },
  REGULAR: {
    fontFamily: FAMILY.REGULAR
  },
  BOLD: {
    fontFamily: FAMILY.BOLD
  },
}

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingLeft: 0,
    color: 'black'
  },
  inputAndroid: {
    fontSize: 16,
    paddingLeft: 0,
    color: 'black'
  }
})
