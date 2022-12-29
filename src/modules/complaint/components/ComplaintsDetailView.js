

import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Image, NativeBaseProvider, ScrollView, Text } from 'native-base';

import { DarkStatusBar } from '../../../common/components/StatusBar';
import Header from '../../../common/components/Header';
import { Button, Container, Content, Dropdown } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Navigation } from '@react-navigation/native'

function ComplaintsDetailView({ navigation,route },props) {
  // console.log("props:",route.params)
  const { data } = route.params;
  const [service, setService] = useState()
  const siteArray = [
    {
      id: "1",
      ward_id: "Open",
    },
    {
      id: "2",
      ward_id: "Closed",
    },
    {
      id: "3",
      ward_id: "Pending",
    },
  ];

  const back = () => {
    navigation.goBack();
  };

  return (
    <NativeBaseProvider>
      <Container>
        <DarkStatusBar />
        <Header leftType='back' goBack={back} title={'Complaint Status'} />
        <Content>
          <ScrollView>
            <View style={styles.complaintLayout}>
              <View style={styles.statusRow}>
                <View>
                  <View style={styles.complaintRow}>
                    <Text style={styles.complaintDetail}>Complaint ID</Text>
                    <Text style={styles.complaintDesc}>{data.complaintNo}</Text>
                  </View>
                  <View style={styles.complaintRow}>
                    <Text style={styles.complaintDetail}>Category</Text>
                    <Text style={styles.complaintDesc}>{data.typeId.name}</Text>
                  </View>
                  <View style={styles.complaintRow}>
                    <Text style={styles.complaintDetail}>Type</Text>
                    <Text style={styles.complaintDesc}>Dry leaves</Text>
                  </View>
                </View>
                <Image source={{ uri: 'https://images.pexels.com/photos/11919980/pexels-photo-11919980.jpeg?auto=compress&cs=tinysrgb&w=400' }} style={styles.complaintImage} />
              </View>
              <View style={styles.complaintRow}>
                <Text style={styles.complaintDetail}>Complaint Details:</Text>
                <Text style={styles.complaintDesc}>{data.typeId.description}</Text>
              </View>
              <View>
                <Text style={styles.complaintDetail}>Status-Resolved</Text>
                <View style={styles.pickerSelect}>
                  <Dropdown
                    accessibilityLabel=""
                    placeholder="status"
                    setService={setService}
                    siteArray={siteArray}
                  />
                </View>
              </View>
            </View>
            <Button variant='primary' marginTop='30'>
              <Text style={styles.submitBtn}>Submit</Text>
            </Button>
          </ScrollView>
        </Content>
      </Container>
    </NativeBaseProvider>

  );
}
export default ComplaintsDetailView;


const styles = StyleSheet.create({
  complaintLayout: {
    marginHorizontal: 15,
    marginTop: 20
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  complaintRow: {
    marginBottom: 20
  },
  complaintDetail: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE['md'],
    color: COLOR.GREYLIGHT
  },
  complaintDesc: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['sm'],
    color: COLOR.DEFAULT,
    marginTop: 5
  },
  pickerSelect: {
    marginTop: 10
  },
  complaintImage: {
    width: 100,
    height: 100,
    borderRadius: 5
  },
  submitBtn: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT
  },
})
