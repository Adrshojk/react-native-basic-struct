
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DarkStatusBar } from '../../../common/components/StatusBar';
import { Image, Input, NativeBaseProvider, Text, Box, ZStack, ScrollView } from 'native-base';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import { Button, Container, Content, Dropdown } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Navigation } from '@react-navigation/native'

function ComplaintEscalateView( props ) {
  const [service, setService] = useState()
  const [assign, assignComplaint] = useState('')
  const [status, statusComplaint] = useState('')
  const siteArray = [
    {
      id: "1",
      ward_id: "ULB",
    },
    {
      id: "2",
      ward_id: "WARD",
    },
    {
      id: "3",
      ward_id: "DISTRICT",
    },
   
  ];
  const assignArray = [
    {
      id: "1",
      ward_id: "Cleaning",
    },
    {
      id: "2",
      ward_id: "Road",
    },
    {
      id: "3",
      ward_id: "Tank",
    },
   
  ];

  return (
    <NativeBaseProvider>
      <Container>
        <DarkStatusBar />
        <Header leftType='back' title={'Escalate Complaint'} />
        <Content>
          <ScrollView style={{ marginBottom: 80 }}>
            <View style={{marginTop: 20}}>
              <Text style={styles.formLabel}>{'Concerned Organization'.toUpperCase()}</Text>
              <View style={styles.pickerSelect}>
                <Dropdown
                  accessibilityLabel=""
                  placeholder=""
                  data={siteArray}
                  setService={setService}
                  onChange={statusComplaint}
                />
              </View>
              <Text style={styles.formLabel}>{'Complaint Type'.toUpperCase()}</Text>
              <View style={styles.pickerSelect}>
                <Dropdown
                  accessibilityLabel=""
                  placeholder=""
                  onChange={assignComplaint}
                  setService={setService}
                  data={assignArray}
                />
              </View>
              <Text style={styles.formLabel}>{'Complaint Category'.toUpperCase()}</Text>
              <View style={styles.pickerSelect}>
                <Dropdown
                  accessibilityLabel=""
                  placeholder=""
                  onChange={assignComplaint}
                  setService={setService}
                  data={assignArray}
                />
              </View>
              <Text style={styles.formLabel}>{'Concerned Organization'.toUpperCase()}</Text>
              <View style={styles.pickerSelect}>
                <Dropdown
                  accessibilityLabel=""
                  placeholder=""
                  setService={setService}
                  data={assignArray}
                />
              </View>
              <Text style={styles.formLabel}>{'Escalate to'.toUpperCase()}</Text>
              <View style={styles.pickerSelect}>
                <Dropdown
                  accessibilityLabel=""
                  placeholder=""
                  setService={setService}
                  data={assignArray}
                />
              </View>
              <Text style={styles.formLabel}>{'Escalate Date'.toUpperCase()}</Text>
              <View style={styles.pickerSelect}>
                <Dropdown
                  accessibilityLabel=""
                  placeholder=""
                  setService={setService}
                  data={assignArray}
                />
              </View>
             
              <Button variant='primary' marginTop={5} onPress={() => props.navigation.navigate('ComplaintsList')}>
                <Text style={styles.submitBtn}>SUBMIT</Text>
              </Button>
            </View>

          </ScrollView>
        </Content>
      </Container>

      <Footer />
    </NativeBaseProvider>

  );
}
export default ComplaintEscalateView;


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
    width: 60,
    height: 60
  },
  submitBtn:{
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT
  },
})
