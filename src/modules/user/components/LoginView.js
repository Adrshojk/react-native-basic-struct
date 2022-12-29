
import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import { FormControl, Image, ScrollView, Text } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';

import { DarkStatusBar } from '../../../common/components/StatusBar';
import { Button, Container, Content, Input } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography';
import { navigation } from '../../../common/actions';

const screenHeight = Dimensions.get('window').height

function LoginView(props) {
  const loginValidationSchema = yup.object().shape({
    username: yup
      .string()
      .required(('please_enter_username')),
    password: yup
      .string()
      .required(('please_enter_password')),
  });
  const mobilenumberInputRef = useRef();
  const passwordInputRef = useRef();
  const loginButtonRef = useRef();

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{ mobilenumber: '', password: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <Container>
          <Content>
            <DarkStatusBar />
            <ScrollView >
              <View style={styles.bgOverlay}>
                <View style={{ width: '100%', marginTop: 100 }}>
                  <Image source={require('@asset/images/garbage-truck.png')} resizeMode='contain' style={styles.loginImg} />
                  <TouchableOpacity onPress={() => props.navigateToForgotpassword()}>
                    <Text style={styles.loginText}>KSWMP</Text>
                  </TouchableOpacity>

                  <FormControl isRequired isInvalid={'mobilenumber' in errors}>
                    {console.log('errors', errors)}
                    <Input
                      placeholder='Mobile Number'
                      value={values.mobilenumber}
                      onChangeText={handleChange('mobilenumber')}
                      keyboardType='number-pad'
                      maxLength={10}
                      isShow={true}
                      style={styles.textInput}
                      _focus={{ borderColor: '#333' }}
                      borderColor="#333"
                    />
                    <FormControl.ErrorMessage>
                      {errors.username}
                    </FormControl.ErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={'password' in errors}>
                    <Input
                      placeholder='Password'
                      value={values.password}
                      onChangeText={handleChange('password')}
                      rightIcon={true}
                      style={styles.textInput}
                    />
                    <FormControl.ErrorMessage>
                      {errors.password}
                    </FormControl.ErrorMessage>
                  </FormControl>
                 
                  <Button variant='primary'
                    onPress={() => props.navigation.navigate('Otp')}>
                    <Text style={styles.loginBtn}>OTP</Text>
                  </Button>
                  <TouchableOpacity style={styles.signupRow} onPress={() => props.navigation.navigate('Signup')}>
                    <Text style={styles.newText}>New to KSWMP? </Text>
                    <Text style={styles.signupText}>SIGNUP</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </Content>
        </Container>

      )}
    </Formik>

  );
}
export default LoginView;

const styles = StyleSheet.create({
  loginImg: {
    width: 76,
    height: 76,
    alignSelf: 'center',
    marginTop: 80
  },
  loginText: {
    fontFamily: FAMILY.LOGO,
    color: COLOR.DEFAULT,
    fontSize: SIZE['2xl'],
    paddingTop: 12,
    textAlign: 'center',
    letterSpacing: 3
  },
  bgOverlay: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
  },
  forgotText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT,
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10
  },
  loginBtn: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  newText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE['sm'],
    color: COLOR.DEFAULT,
    letterSpacing: 1
  },
  signupText: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT
  }
})
