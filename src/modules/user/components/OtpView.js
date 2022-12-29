
import React, { useState, useRef } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';
import * as yup from 'yup';

import { DarkStatusBar } from '../../../common/components/StatusBar';
import { Input, NativeBaseProvider, Text, ScrollView, HStack } from 'native-base';
import Header from '../../../common/components/Header';
import { Button, Container, Content } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Navigation , useNavigation } from '@react-navigation/native'

const screenHeight = Dimensions.get('window').height

function OtpView(props) {
  const loginValidationSchema = yup.object().shape({
    otpnumber: yup
      .string()
      .required(('please_enter_otpnumber')),
  });

  const showToast = () => {
    console.log("in show toast")
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{ otpnumber: '' }}
      onSubmit={values => console.log(values)}
    >

      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <NativeBaseProvider style={{ borderColor: 'red', borderWidth: 1 }}>
          <Container>
            <DarkStatusBar />
            <Header leftType='back' goBack={back} />
            <Content>
              <ScrollView contentContainerStyle={{ bottom: 50 }}>
                <View style={styles.bgOverlay}>
                  <View >
                    <Image source={require('@asset/images/garbage-truck.png')} resizeMode='contain' style={styles.loginImg} />
                    <Text style={styles.loginText}>OTP</Text>
                    <Text style={styles.otpText}>Enter 4 digit OTP passcode</Text>
                    <View style={styles.formRow}>
                      <Input
                        placeholder=''
                        w={{
                          base: "18%",
                        }}
                        value={values.otpnumber}
                        onChangeText={handleChange('otpnumber')}
                        isShow={true}
                        style={styles.textInput}
                        keyboardType='number-pad'
                        maxLength={1}
                      />
                      <Input
                        placeholder=''
                        w={{
                          base: "18%",
                        }}
                        value={values.otpnumber}
                        onChangeText={handleChange('otpnumber')}
                        isShow={true}
                        style={styles.textInput}
                        keyboardType='number-pad'
                        maxLength={1}
                      />
                      <Input
                        placeholder=''
                        w={{
                          base: "18%",
                        }}
                        value={values.otpnumber}
                        onChangeText={handleChange('otpnumber')}
                        isShow={true}
                        style={styles.textInput}
                        keyboardType='number-pad'
                        maxLength={1}
                      />
                      <Input
                        placeholder=''
                        w={{
                          base: "18%",
                        }}
                        value={values.otpnumber}
                        onChangeText={handleChange('otpnumber')}
                        isShow={true}
                        style={styles.textInput}
                        keyboardType='number-pad'
                        maxLength={1}
                      />
                    </View>
                    <Button variant='primary' 
                      // onPress={showToast}
                      onPress={()=>props.navigation.navigate('Complaint', { screen: 'Complaints' })}
                    >
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
export default OtpView;


const styles = StyleSheet.create({
  bgOverlay: {
    marginTop: 100
  },
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
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 20
  },
  textInput: {
    textAlign: 'center',
    borderColor: '#999',
    borderWidth: 1
  },
  otpText: {
    fontFamily: FAMILY.REGULAR,
    color: COLOR.GREY,
    fontSize: SIZE['xs'],
    paddingTop: 12,
    textAlign: 'center',
    marginHorizontal: 5,
    marginBottom: 5
  },
  submitBtn: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT
  },
})
