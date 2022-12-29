
import React, { useState, useRef } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { DarkStatusBar } from '../../../common/components/StatusBar';

import { Formik } from 'formik';
import * as yup from 'yup';

import { FormControl, NativeBaseProvider, Text, ScrollView } from 'native-base';
import Header from '../../../common/components/Header';
import { Button, Container, Content, Input } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Navigation } from '@react-navigation/native'

const screenHeight = Dimensions.get('window').height

function ForgotpasswordView({ navigation }) {
  const loginValidationSchema = yup.object().shape({
    mobilenumber: yup
      .string()
      .required(('please_enter_mobilenumber')),
  });


  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{ mobilenumber: '' }}
      onSubmit={values => console.log(values)}
    >

      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <NativeBaseProvider style={{ borderColor: 'red', borderWidth: 1 }}>
          <Container>
            <DarkStatusBar />
            <Header leftType='back' />
            <Content>
              <ScrollView contentContainerStyle={{ bottom: 50 }}>
                <View style={styles.bgOverlay}>
                  <View style={{ width: '100%' }}>
                    <Image source={require('@asset/images/garbage-truck.png')} resizeMode='contain' style={styles.loginImg} />
                    <Text style={styles.loginText}>Forgot Password</Text>
                    <Text style={styles.forgotText}>Let us know your registered mobile number and we will send you password reset instructions.</Text>
                    <FormControl isRequired >
                      <Input
                        placeholder='Mobile Number'
                        value={values.mobilenumber}
                        onChangeText={handleChange('mobilenumber')}
                        isShow={true}
                        style={styles.textInput}
                        keyboardType='number-pad'
                        maxLength={10}
                      />
                    </FormControl>
                    <Button variant='primary'
                      onPress={handleSubmit} >
                      <Text style={styles.submitBtn}>SUBMIT</Text>
                    </Button>
                  </View>
                </View>
              </ScrollView>
            </Content>
          </Container>
        </NativeBaseProvider>
      )}
    </Formik>
  );
}
export default ForgotpasswordView;


const styles = StyleSheet.create({
  loginImg: {
    width: 76,
    height: 76,
    alignSelf: 'center',
    marginTop: 80
  },
  loginText: {
    fontFamily: FAMILY.BOLD,
    color: COLOR.DEFAULT,
    fontSize: SIZE['xl'],
    paddingTop: 12,
    textAlign: 'center',
    letterSpacing: 2
  },
  forgotText: {
    fontFamily: FAMILY.REGULAR,
    color: COLOR.GREY,
    fontSize: SIZE['xs'],
    paddingTop: 12,
    textAlign: 'center',
    marginHorizontal: 5
  },
  submitBtn: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT
  },
})
