
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, PermissionsAndroid, Alert, Platform, Image } from 'react-native'
import { Navigation, useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import GetLocation from "react-native-get-location";
import { Formik } from 'formik';

import { DarkStatusBar } from '../../../common/components/StatusBar';
import { Input, Text, Box, ZStack, ScrollView } from 'native-base';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import { Button, Container, Content, Dropdown } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'

import { navigation } from '../../../common/actions';
var RNFS = require('react-native-fs');

function NewComplaintView(props) {
  const [service, setService] = useState()
  const [complaintMod, setComplaintMod] = useState('');
  const [complaintMode, setComplaintMode] = useState('');
  const [category, setCategory] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [type, setType] = useState('');
  const [typeId, setTypeId] = useState('');
  const [district, setDistrict] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [lsgi, setLsgi] = useState('');
  const [lsgiId, setLsgiId] = useState('');
  const [ward, setWard] = useState('');
  const [wardId, setWardId] = useState('');
  const [image, setImage] = useState('')
  const [camera, setCameraImage] = useState('')
  const [video, setVideoImage] = useState('')
  const [imageIcon, setImageIcon] = useState(require('@asset/images/image.png'))
  const [cameraIcon, setCameraIcon] = useState(require('@asset/images/camera.png'))
  const [permissionStatus, setPermissionStatus] = useState('');
  const [pickerShow, setPickerShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then((location) => {
      console.log(location);
      if (location !== null) {
        setLatitude(location.latitude);
        setLongitude(location.longitude);
        // setGeocoder();
      }
    })
    .catch((error) => {
      const { code, message } = error;
      console.warn(code, message);
    });

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
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  }

  useEffect(() => {
    console.log("useEffect []")
    props.getDistrict();
    props.getLsgi();
    props.getWard();
    props.getComplaintMode();
    props.getComplaintCategory();
    props.getComplaintType();
  }, [])

  useEffect(() => {
    setDistrict(props.district.payLoad);
    // console.log('props.district',JSON.stringify(props.district));
    // console.log('district',props.district.payLoad.content)
  }, [props.district])

  useEffect(() => {
    setLsgi(props.lsgi.payLoad);
    // console.log('props.ulb',JSON.stringify(props.ulb));
    // console.log('district',props.ulb.payLoad)
  }, [props.lsgi])

  useEffect(() => {
    setWard(props.ward.payLoad);
  }, [props.ward])

  useEffect(() => {
    setComplaintMod(props.complaintmode.payLoad);
  }, [props.complaintmode])

  useEffect(() => {
    setCategory(props.complaintcategory.payLoad);
  }, [props.complaintcategory])

  useEffect(() => {
    setType(props.complainttype.payLoad);
  }, [props.complainttype])

  const getImage = () => {
    console.log('desert', '' + sfasf)
    setPickerShow(false);
  }

  const renderPickImage = async () => {
    const checkStatus = await permissionCheck();
    if (checkStatus) {
      await imagePickData();
    }
    else {
      await permissionRequest();
    }
  }

  const renderPickCamera = async () => {
    const checkStatus = await permissionCheck();
    if (checkStatus) {
      await cameraPickData();
    }
    else {
      await permissionRequest();
    }
  }


  const permissionCheck = async () => {
    let checkStatus;
    if (Platform.OS === 'android') {
      checkStatus = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    }
    if (checkStatus) {
      setPermissionStatus('granted');
    }
    return checkStatus;
  }

  const permissionRequest = async () => {
    const checkStatus = await permissionCheck();
    if (checkStatus) {
      setPermissionStatus('granted');
      return;
    }
    let requestStatus;
    if (Platform.OS === 'android') {
      requestStatus = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      if (requestStatus === PermissionsAndroid.RESULTS.GRANTED) {
        setPermissionStatus('granted');
        imagePickData();
      } else if (requestStatus === PermissionsAndroid.RESULTS.DENIED) {
        setPermissionStatus('denied');
      } else if (requestStatus === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        setPermissionStatus('blocked');
      }
    }
  }

  const imagePickData = async () => {
    ImagePicker.openPicker({
      cropping: true
    }).then(image => {
      setImage(image.path);
      // RNFS.stat(image.path).then((stats) => {

      //   console.log('pathimage:', image.path)

      //   // setOrgUriSize(stats.size)
      //   // getResizedImage(image.path, quality, stats.size)
      // }).catch((err) => {
      //   return Alert.alert(
      //     // I18n.t('something_wrong')
      //   );
      // });
    }).catch((error) => {
      if (error.code === 'E_PICKER_CANCELLED') {
        return false;
      }
    });
  }

  const cameraPickData = async () => {
    ImagePicker.openCamera({
      multiple: true,
      width: 300,
      height: 400,
      cropping: true,
    }).then(camera => {
      setCameraImage(camera.path);
    });
  }

  const videoPickData = async () => {
    ImagePicker.openCamera({
      mediaType: 'video',
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      __hideBase64: true,
      __showUri: true
    }).then(video => {
      setVideoImage(video.path);
    });
  }

  const renderPickVideo = async () => {
    const checkStatus = await permissionCheck();
    if (checkStatus) {
      await videoPickData();
    }
    else {
      await permissionRequest();
    }
  }

  return (
    <Formik
      // validationSchema={}
      initialValues={{
        complaintMode: '', categoryId: '', typeId: '', complaintDescription: '', districtId: '', lsgiId: '', wardId: '', complaintLocation: ''
      }}
      onSubmit={(values) => {
        let data = {
          complaintMode: { id: complaintMode },
          categoryId: { id: categoryId },
          typeId: { id: typeId },
          complaintDescription: values.complaintDescription,
          districtId: { id: districtId },
          wardId: { id: wardId },
          lsgiId: { id: lsgiId },
          // complaintLocation: { lat: latitude, lon: longitude },
          complaintLocation: latitude + "_" + longitude
        }
        props.addcomplaint(data)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
        console.log('values:', values)

        return <Container>
          <DarkStatusBar />
          <Header leftType='back' goBack={back} title={'Add Complaint'} />
          <Content>
            <ScrollView style={{ marginBottom: 80 }}>
              <View style={{ marginTop: 20 }}>
                {/* <Button onPress={() => setIsOpen(!isOpen)}>
                  {isOpen ? "hide" : "show"}
                </Button> */}
                <Text style={styles.formLabel}>{'Complaint Mode'.toUpperCase()}</Text>
                <View style={styles.pickerSelect}>
                  <Dropdown
                    accessibilityLabel=""
                    placeholder=""
                    data={complaintMod}
                    setValue={setComplaintMode}
                  />
                </View>
                <Text style={styles.formLabel}>{'Complaint Category'.toUpperCase()}</Text>
                <View style={styles.pickerSelect}>
                  <Dropdown
                    accessibilityLabel=""
                    placeholder=""
                    data={category}
                    setValue={setCategoryId}
                  />
                </View>
                <Text style={styles.formLabel}>{'Complaint Type'.toUpperCase()}</Text>
                <View style={styles.pickerSelect}>
                  <Dropdown
                    accessibilityLabel=""
                    placeholder=""
                    data={type}
                    setValue={setTypeId}
                  />

                </View>
                <Text style={styles.formLabel}>{'Complaint Details'.toUpperCase()}</Text>
                <View style={{ marginTop: 10, marginBottom: 15 }}>
                  <Input
                    placeholder='sfasgfasg'
                    isShow={true}
                    style={styles.textInput}
                    multiline
                    variant="transparent"
                    numberOfLines={5}
                  />
                </View>
                {/* <Text style={styles.formLabel}>{'Concerned Organization'.toUpperCase()}</Text>
                <View style={styles.pickerSelect}>
                  <Dropdown
                  accessibilityLabel=""
                  placeholder=""
                  setService={setService}
                  data={data}
                />
                </View> */}
                <Text style={styles.formLabel}>{'District'.toUpperCase()}</Text>
                <View style={styles.pickerSelect}>
                  <Dropdown
                    accessibilityLabel="Choose District"
                    placeholder="Choose District"
                    data={district}
                    setValue={setDistrictId}
                  />
                </View>
                <Text style={styles.formLabel}>{'LSGI'.toUpperCase()}</Text>
                <View style={styles.pickerSelect}>
                  <Dropdown
                    accessibilityLabel="Choose Lsgi"
                    placeholder="Choose Lsgi"
                    data={lsgi}
                    setValue={setLsgiId}
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
                </View>
                <Text style={styles.formLabel}>{'location'.toUpperCase()}</Text>
                <View style={{ marginTop: 10, marginBottom: 15 }}>
                  <Input
                    placeholder='sfasgfasg'
                    value={latitude + "-" + longitude}
                    isShow={true}
                    style={styles.textInput}
                    multiline
                    variant="transparent"
                    numberOfLines={5}
                  />
                </View>
                <Text style={styles.formLabel}>{'Attach File'.toUpperCase()}</Text>
                <View style={styles.uploadFile}>
                  <TouchableOpacity onPress={() => { renderPickImage() }}>
                    <Image source={image ? { uri: image } : imageIcon} resizeMode='contain' style={styles.loginImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { renderPickCamera() }}>
                    <Image source={camera ? { uri: camera } : cameraIcon} resizeMode='contain' style={styles.loginImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { renderPickVideo() }}>
                    <Image source={video ? { uri: video.uri } : cameraIcon} resizeMode='contain' style={styles.loginImg} />
                  </TouchableOpacity>
                </View>
                <Button variant='primary' marginTop={5} onPress={handleSubmit}>
                  <Text style={styles.submitBtn}>SUBMIT</Text>
                </Button>
              </View>

            </ScrollView>
          </Content>
        </Container>
        { pickerShow ? <ImagePicker /> : null }

        <Footer />
      }}
    </Formik>

  );
}
export default NewComplaintView;


const styles = StyleSheet.create({
  formLabel: {
    fontFamily: FAMILY.BOLD,
    color: COLOR.DEFAULT,
    fontSize: SIZE['xs'],
    marginLeft: 20,
    paddingVertical: 3
  },
  pickerSelect: {
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 10
  },
  textInput: {
    marginHorizontal: 15,
    borderColor: '#D4D4D2',
    borderWidth: 1,
    borderRadius: 5
  },
  uploadFile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#D4D4D2',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 10
  },
  loginImg: {
    width: 80,
    height: 120
  },
  submitBtn: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT
  },
})
