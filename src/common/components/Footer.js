import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Button, Pressable } from 'native-base';
import { Icon } from '../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { useNavigation, useNavigationContainerRef } from '@react-navigation/native';

const isActive = (currentScreen, name) => (currentScreen == name)

const Item = (props, navigation) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity style={props.isActive ? [styles.btn, styles.btnActive] : styles.btn} onPress={() => navigate(props.routeName)} >
      {
        props.icon
          ? (<Icon name={props.icon.name} type={props.icon.type} style={props.isActive ? [styles.icon, styles.iconActive] : styles.icon} />)
          : null
      }
    </TouchableOpacity>
  )
}

const Footer = (props, navigation) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Item
          isActive={isActive(props.currentScreen === 'Dashboard')} routeName='Dashboard' icon={{ name: 'home', type: 'SimpleLineIcons' }}
        />
        <Item
          isActive={isActive(props.currentScreen === 'NewComplaint')} routeName='NewComplaint' icon={{ name: 'plus', type: 'SimpleLineIcons' }}
        />
        <Item
          isActive={isActive(props.currentScreen, 'MyComplaint')} routeName='MyComplaint' icon={{ name: 'grid-outline', type: 'Ionicons' }}
        />
      </View>
    </View>
  )
}

const styles = {
  container: {
    width: '100%',
    borderRadius: 5,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 5,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLOR.PRIMARY,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.PRIMARY,
    paddingVertical: 8
  },
  btn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  btnActive: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor:COLOR.DEFAULT
  },
  iconBg: {
    fontSize: SIZE['2xl'],
    color: COLOR.LIGHT,
  },
  iconBgActive: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT,
  },
  icon: {
    fontSize: SIZE['xl'],
    color: COLOR.DEFAULT,
  },
  iconActive: {
    fontSize: SIZE['2xl'],
    color: COLOR.LIGHT,
  },
}

export default Footer
