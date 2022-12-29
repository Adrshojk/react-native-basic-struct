import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { getUserRoles } from '../../../modules/user/selectors';
import { navigation } from '../../actions';
import Icon from '../../components/Basic/Icon';
import { Button } from 'native-base';
import { connect } from 'react-redux';

import { COLOR, SIZE, FAMILY } from '@theme/typography'

const Left = (props) => {
  const {goBack, openDrawer, ...p  } = props;
  let C
  if (props.leftContent) {
    C = props.leftContent
  } else if (props.leftType === 'menu') {
    C = (
      <Button style={styles.btn} onPress={()=> openDrawer()}>
        <Icon name='sort' type='MaterialIcons' style={{ color: '#000', fontSize: 24 }} />
      </Button>
    )
  } else if (props.leftType === 'back') {
    C = (
      <TouchableOpacity style={styles.btn} onPress={()=> goBack()}>
        <Icon name='arrow-left' type='MaterialCommunityIcons' style={styles.btnIcon} />
      </TouchableOpacity>
    )
  }
  return (
    <View style={props.leftStyle ? [styles.left, props.leftStyle] : styles.left}>
      {C}
    </View>
  )
}

const Middle = (props) => {
  let C
  if (props.middleContent) {
    C = props.middleContent
  } else if (props.title) {
    const titleStyle = []
    if (props.titleAlign) {
      titleStyle.push(styles[props.titleAlign])
    }
    if (props.titleColor) {
      titleStyle.push(styles[props.titleColor])
    }
    C = <Text style={styles.navTitle}>{props.title}</Text>
  }
  return (
    <View style={props.middleStyle ? [styles.middle, props.middleStyle] : styles.middle}>
      {C}
    </View>
  )
}

const Right = (props) => {
  let C
  if (props.rightContent) {
    C = props.rightContent
  } else if (props.rightType === 'notify') {
    C = (
      <Button style={styles.btn} >
        <Icon name='bell-outline' type='MaterialCommunityIcons' style={styles.rightIcon} />
      </Button>
    )
  }
  else if (props.rightType === 'fav') {
    C = (
      <Button style={styles.btn} >
        <Icon name='hearto' type='AntDesign' style={styles.rightIcon} />
      </Button>
    )
  }
  return (
    <View style={props.rightStyle ? [styles.right, props.rightStyle] : styles.right}>
      {C}
    </View>
  )
}

const Header = ({ navigateBack, onBackPress, variant = 'primary', ...props }) => {
  const cs = { ...styles.container }
  if (variant === 'primary') {
    cs.backgroundColor = COLOR.PRIMARY
  }
  return (
    <View style={props.style ? [cs, props.style] : cs}>
      <Left {...props} variant={variant} />
      <Middle {...props} variant={variant} />
      <Right {...props} variant={variant} />
    </View>
  )
}


const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR.PRIMARY,
    paddingVertical: 5
  },
  left: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {

  },
  LIGHT: {
    color: '#FFF'
  },
  DARK: {
    color: '#000'
  },
  // bold: {
  //   fontFamily: FAMILY.BOLD,
  // },
  navTitle: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT
  },
  btn: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    paddingVertical: 15,

  },
  btnIcon: {
    fontSize: 20,
    color: COLOR.DEFAULT
  },
  rightIcon: {
    fontSize: 20,
    color: '#000',
    marginRight: 5
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5
  }
}

const mapDispatchToProps = dispatch => ({
   navigateBack: () => dispatch(navigateBack()),
});

export default connect(mapDispatchToProps)(Header);

