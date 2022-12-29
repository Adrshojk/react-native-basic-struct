
import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import { FormControl, Image, ScrollView, HStack, Text } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';

import { DarkStatusBar } from '../../../common/components/StatusBar';
import { Button, Container, Content, Dropdown, Input, Radio } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography';
import { navigation } from '../../../common/actions';
import { COMMON_SIGNUP_LABELS, GENDER_DATA } from '../constants'
import { prop } from 'lodash/fp';

const screenHeight = Dimensions.get('window').height

function SignupView(props) {
  const dataRadio = [
    { value: '' },
    { value: '' },
    { value: '' },
  ];
  const [valueRadio, setValueRadio] = useState(dataRadio[0].value);
  const [service, setService] = useState()
  const [gender, setGender] = useState('');
  const [genderId, setGenderId] = useState('');
  const [userType, setUserType] = useState('');
  const [userTypeId, setUserTypeId] = useState(2);
  const [loginType, setLoginType] = useState('');
  const [loginTypeId, setLoginTypeId] = useState(2);

  const [district, setDistrict] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [ulb, setUlb] = useState('');
  const [ulbId, setUlbId] = useState('');
  const [ward, setWard] = useState('');
  const [wardId, setWardId] = useState('');
  // const [districtId, setdistrictId] = useState(14);
  // const [selectedIndexGender, setSelectedIndex] = useState(0);


  const data = [
    {
      id: "1",
      ward_id: "Trivandrum",
    },
    {
      id: "2",
      ward_id: "Kollam",
    },
    {
      id: "3",
      ward_id: "Pathanamthitta",
    },
    {
      id: "3",
      ward_id: "Idukki",
    },
  ];

  const loginValidationSchema = yup.object().shape({
    userName: yup
      .string()
      .required(('please_enter_userName')),
    emailId: yup
      .string()
      .email('please_enter_valid_emailId')
      .required('please_enter_email'),
    mobileNo: yup
      .number()
      .required(('please_enter_mobileNo'))
      .min(10, 'please_enter_validmobileNo'),
    // firstName: yup
    //   .string()
    //   .required(('please_enter_firstName')),
    // userPassword: yup
    //   .string()
    //   .required(('please_enter_userPassword')),
    // alternateNo: yup
    //   .string()
    //   .required(('please_enter_alternativeNo')),

    // districtId: yup
    //   .string()
    //   .required(('please_select_distirct')),
  });
  const firstNameInputRef = useRef();
  const mobileNoInputRef = useRef();
  const emailIdInputRef = useRef();
  // const loginButtonRef = useRef();
  // const passwordInputRef = useRef();
  // const alternateNoInputRef = useRef();

  useEffect(() => {
    console.log("useEffect []")
    // props.getDistrict();
    // props.getUlb();
    // props.getWard();
    props.getGender();
    props.getUserType();
    props.getLoginType();
  }, [])

  // useEffect(() => {
  //   setDistrict(props.district.payLoad);
  //   // console.log('props.district',JSON.stringify(props.district));
  //   // console.log('district',props.district.payLoad.content)
  // }, [props.district])

  // useEffect(() => {
  //   setUlb(props.ulb.payLoad);
  //   // console.log('props.ulb',JSON.stringify(props.ulb));
  //   // console.log('district',props.ulb.payLoad)
  // }, [props.ulb])

  // useEffect(() => {
  //   setWard(props.ward.payLoad);
  //   console.log('props.ulb', props.ward)
  // }, [props.ward])

  useEffect(() => {
    setGender(props.gender.payLoad);
    console.log('props.gender', props.gender)
  }, [props.gender])

  useEffect(() => {
    setUserType(props.usertype.payLoad);
    console.log('props.userType', props.userType)
  }, [props.userType])

  useEffect(() => {
    setUserType(props.logintype.payLoad);
    console.log('props.loginType', props.loginType)
  }, [props.loginType])

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{
        userName: '', genderId: '', mobileNo: '', emailId: '', loginType: '', userType: '',
      }}
      onSubmit={(values) => {
        let data = {
          userName: values.userName,
          genderId: { id: genderId },
          mobileNo: values.mobileNo,
          // emailId: values.emailId,
          // loginType: loginTypeId,
          // userType: userTypeId,
          // alternateNo: values.alternateNo,
          // firstName: values.firstName,
          // districtId: districtId,
          // wardId: wardId,
          // ulbId: { id: ulbId },
          activeProfile: {
            emailId: values.emailId,
            loginType: { id: loginTypeId },
            userType: { id: userTypeId },
          },
        }
        props.authenticate(data)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
        console.log('values:', values)
        return <Container>
          <Content>
            <DarkStatusBar />
            <ScrollView >
              <View style={styles.bgOverlay}>
                <View style={{ width: '100%' }}>
                  <Image source={require('@asset/images/garbage-truck.png')} resizeMode='contain' style={styles.loginImg} />
                  <TouchableOpacity onPress={() => props.navigation.navigate('Forgotpassword')}>
                    <Text style={styles.header}>SIGNUP</Text>
                  </TouchableOpacity>
                  <Text style={styles.formLabel}>{'username'.toUpperCase()}</Text>
                  <FormControl isRequired isInvalid={'userName' in errors}>
                    <Input
                      placeholder={COMMON_SIGNUP_LABELS.USER_NAME}
                      value={values.userName}
                      onChangeText={handleChange('userName')}
                      onBlur={handleBlur('userName')}
                      onSubmitEditing={() => mobileNoInputRef.current.focus()}
                      blurOnSubmit={false}
                      autoCapitalize='none'
                      returnKeyType='next'
                      style={styles.textInput}
                      _focus={{ borderColor: '#333' }}
                      borderColor="#333"

                    />
                    <FormControl.ErrorMessage>
                      {errors.userName}
                    </FormControl.ErrorMessage>
                  </FormControl>
                  {/* <Text style={styles.formLabel}>{'firstname'.toUpperCase()}</Text>
                  <FormControl isRequired isInvalid={'firstName' in errors}>
                    <Input
                      ref={firstNameInputRef}
                      placeholder={COMMON_SIGNUP_LABELS.FIRST_NAME}
                      value={values.firstName}
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      onSubmitEditing={() => passwordInputRef.current.focus()}
                      blurOnSubmit={false}
                      autoCapitalize='none'
                      returnKeyType='next'
                      style={styles.textInput}
                      _focus={{ borderColor: '#333' }}
                      borderColor="#333"
                    />
                    <FormControl.ErrorMessage>
                      {errors.firstName}
                    </FormControl.ErrorMessage>
                  </FormControl> */}
                  {/* <Text style={styles.formLabel}>{'userPassword'.toUpperCase()}</Text>
                  <FormControl isRequired isInvalid={'userPassword' in errors}>
                    <Input
                      ref={passwordInputRef}
                      placeholder={COMMON_SIGNUP_LABELS.USER_PASSWORD}
                      value={values.userPassword}
                      onChangeText={handleChange('userPassword')}
                      onBlur={handleBlur('userPassword')}
                      onSubmitEditing={() => mobileNoInputRef.current.focus()}
                      blurOnSubmit={false}
                      autoCapitalize='none'
                      returnKeyType='next'
                      style={styles.textInput}
                      _focus={{ borderColor: '#333' }}
                      borderColor="#333"
                    />
                    <FormControl.ErrorMessage>
                      {errors.userPassword}
                    </FormControl.ErrorMessage>
                  </FormControl> */}
                  <Text style={styles.formLabel}>{'Gender'.toUpperCase()}</Text>
                  <View style={styles.radioContent}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                      <Radio
                        // checked={selectedIndexGender}
                        // onChange={setSelectedIndex}
                        // data={GENDER_DATA}
                        checked={genderId}
                        data={gender}
                        setValue={setGenderId}
                      />
                      {/* <Text style={{ paddingHorizontal: 5, color: 'red' }} numberOfLines={2}>
                        {selectedIndexGender}
                      </Text> */}
                    </View>

                  </View>
                  <Text style={styles.formLabel}>{'Mobile Number'.toUpperCase()}</Text>
                  <FormControl isRequired isInvalid={'mobileNo' in errors}>
                    <Input
                      ref={mobileNoInputRef}
                      placeholder={COMMON_SIGNUP_LABELS.MOBILE_NO}
                      value={values.mobileNo}
                      onChangeText={handleChange('mobileNo')}
                      onBlur={handleBlur('mobileNo')}
                      returnKeyType='next'
                      onSubmitEditing={() => emailIdInputRef.current.focus()}
                      blurOnSubmit={false}
                      maxLength={10}
                      style={styles.textInput}
                      _focus={{ borderColor: '#333' }}
                      borderColor="#333"
                      keyboardType='numeric'
                    />
                    <FormControl.ErrorMessage>
                      {errors.mobileNo}
                    </FormControl.ErrorMessage>
                  </FormControl>
                  {/* <Text style={styles.formLabel}>{'Alternative Mobile Number'.toUpperCase()}</Text>
                  <FormControl isInvalid={'alternateNo' in errors}>
                    <Input
                      ref={alternateNoInputRef}
                      placeholder={COMMON_SIGNUP_LABELS.ALTERNATE_NO}
                      value={values.alternateNo}
                      onChangeText={handleChange('alternateNo')}
                      onBlur={handleBlur('alternateNo')}
                      returnKeyType='next'
                      onSubmitEditing={() => emailInputRef.current.focus()}
                      blurOnSubmit={false}
                      maxLength={10}
                      style={styles.textInput}
                    />
                    <FormControl.ErrorMessage>
                      {errors.alternateNo}
                    </FormControl.ErrorMessage>
                  </FormControl> */}
                  <Text style={styles.formLabel}>{'Email ID'.toUpperCase()}</Text>
                  <FormControl isInvalid={'emailId' in errors}>
                    <Input
                      ref={emailIdInputRef}
                      placeholder={COMMON_SIGNUP_LABELS.EMAIL}
                      value={values.emailId}
                      onChangeText={handleChange('emailId')}
                      onBlur={handleBlur('emailId')}
                      returnKeyType='next'
                      onSubmitEditing={() => districtInputRef.current.focus()}
                      blurOnSubmit={false}
                      style={styles.textInput}
                    />
                    <FormControl.ErrorMessage>
                      {errors.emailId}
                    </FormControl.ErrorMessage>
                  </FormControl>

                  {/* <Text style={styles.formLabel}>{'District'.toUpperCase()}</Text>
                  <FormControl isRequired isInvalid={'district' in errors}>
                    <View style={styles.pickerSelect}>
                      <Dropdown
                        accessibilityLabel="Choose District"
                        placeholder="Choose District"
                        data={district}
                        setValue={setDistrictId}
                      />
                    </View>
                    <FormControl.ErrorMessage>
                      {errors.districtId}
                    </FormControl.ErrorMessage>
                  </FormControl>

                  <Text style={styles.formLabel}>{'Ulb'.toUpperCase()}</Text>
                  <View style={styles.pickerSelect}>
                    <Dropdown
                      accessibilityLabel="Choose Ulb"
                      placeholder="Choose Ulb"
                      data={ulb}
                      setValue={setUlbId}
                    />
                  </View>
                  <Text style={styles.formLabel}>{'Ward'.toUpperCase()}</Text>
                  <View style={styles.pickerSelect}>
                    <Dropdown
                      accessibilityLabel="Choose Ward"
                      placeholder="Choose Ward"
                      data={ward}
                      setValue={setWardId}
                    />
                  </View> */}
                  <Button variant='primary'
                    onPress={handleSubmit} >
                    <Text style={styles.loginBtn}>SAVE</Text>
                  </Button>
                  <TouchableOpacity style={styles.signupRow} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.newText}>Already have an account? </Text>
                    <Text style={styles.signupText}>LOGIN</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </Content>
        </Container>
      }}
    </Formik>

  );
}
export default SignupView;

const styles = StyleSheet.create({
  loginImg: {
    width: 76,
    height: 76,
    alignSelf: 'center',
    marginTop: 30
  },
  header: {
    fontFamily: FAMILY.BOLD,
    color: COLOR.DEFAULT,
    fontSize: SIZE['xl'],
    paddingTop: 12,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 5
  },
  formLabel: {
    fontFamily: FAMILY.BOLD,
    color: COLOR.DEFAULT,
    fontSize: SIZE['xs'],
    marginLeft: 20,
    paddingVertical: 3
  },
  bgOverlay: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
  },
  radioContent: {
    paddingBottom: 10
  },
  pickerSelect: {
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 10
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
    paddingTop: 20,
    marginBottom: 30
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
