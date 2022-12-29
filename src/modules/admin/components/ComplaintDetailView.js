

import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Image, NativeBaseProvider, ScrollView, Text } from 'native-base';

import { DarkStatusBar } from '../../../common/components/StatusBar';
import Header from '../../../common/components/Header';
import { Button, Container, Content, Dropdown } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Navigation } from '@react-navigation/native'

function ComplaintDetailView({ navigation }, props) {
  const [service, setService] = useState()
  const [assign, assignComplaint] = useState('')
  const [status, statusComplaint] = useState('')
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
    {
      id: "4",
      ward_id: "Rejected",
    },
  ];
  const assignArray = [
    {
      id: "1",
      ward_id: "User1",
    },
    {
      id: "2",
      ward_id: "User2",
    },
    {
      id: "3",
      ward_id: "User3",
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
                    <Text style={styles.complaintDetail}>Complainer Name</Text>
                    <Text style={styles.complaintDesc}>User 03</Text>
                  </View>
                  <View style={styles.complaintRow}>
                    <Text style={styles.complaintDetail}>Complaint Date/Time</Text>
                    <Text style={styles.complaintDesc}>22 November 2022 13:28:28</Text>
                  </View>
                  <View style={styles.complaintRow}>
                    <Text style={styles.complaintDetail}>Complaint ID</Text>
                    <Text style={styles.complaintDesc}>001KL00AT0001</Text>
                  </View>
                  <View style={styles.complaintRow}>
                    <Text style={styles.complaintDetail}>Category</Text>
                    <Text style={styles.complaintDesc}>Road Clean</Text>
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
                <Text style={styles.complaintDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </View>
              <View style={styles.complaintRow}>
                <Text style={styles.complaintDetail}>Concerned Organiztion</Text>
                <Text style={styles.complaintDesc}>ULB</Text>
              </View>
              <View>
                <Text style={styles.complaintDetail}>Status-Resolved</Text>
                <View style={styles.pickerSelect}>
                  <Dropdown
                    accessibilityLabel=""
                    placeholder="status"
                    setService={setService}
                    data={siteArray}
                    onChange={statusComplaint}
                  />
                </View>
              </View>
              <View style={{ marginTop: 15 }}>
                <Text style={styles.complaintDetail}>Assigned to</Text>
                <View style={styles.pickerSelect}>
                  <Dropdown
                    accessibilityLabel=""
                    placeholder="status"
                    onChange={assignComplaint}
                    data={assignArray}
                  />
                </View>
              </View>
            </View>
            <Button variant='primary' marginTop='30' marginBottom='50'>
              <Text style={styles.submitBtn}>SAVE</Text>
            </Button>
          </ScrollView>
        </Content>
      </Container>
    </NativeBaseProvider>

  );
}
export default ComplaintDetailView;


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
