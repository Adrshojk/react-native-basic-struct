

import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native'
import { NativeBaseProvider, ScrollView, Text } from 'native-base';

import { DarkStatusBar } from '../../../common/components/StatusBar';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import { Container, Content } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Navigation } from '@react-navigation/native'

function DashboardView(props) {

  return (
    <NativeBaseProvider>
      <Container>
        <DarkStatusBar />
        <Header leftType='back' title='Admin' rightType='notify' />
        <Content>
          <ScrollView style={{ marginBottom: 80 }}>
            <View style={styles.complaintContent}>
              <TouchableOpacity style={styles.complaintLayout}
                onPress={() => props.navigation.navigate('MyComplaint')}
              >
                <Image source={require('@asset/images/mycomplaint.png')} resizeMode={'contain'} style={styles.dashboardImg} />
                <Text style={styles.complaintText}>My Complaint</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.complaintLayout} onPress={() => props.navigation.navigate('ComplaintsApproval')}>
                <Image source={require('@asset/images/approval.png')} resizeMode={'contain'} style={styles.dashboardImg} />
                <Text style={styles.complaintText}>My Approvals</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.complaintLayout} onPress={() => props.navigation.navigate('ComplaintPending')}>
                <Image source={require('@asset/images/pending.png')} resizeMode={'contain'} style={styles.dashboardImg} />
                <Text style={styles.complaintText}>Pending for Action</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.complaintLayout} onPress={() => props.navigation.navigate('ComplaintReport')}>
                <Image source={require('@asset/images/report.png')} resizeMode={'contain'} style={styles.dashboardImg} />
                <Text style={styles.complaintText}>Reports</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Content>
      </Container>
      <Footer />
    </NativeBaseProvider>

  );
}
export default DashboardView;


const styles = StyleSheet.create({
  complaintContent: {
    marginTop: 20
  },
  dashboardImg: {
    width: 60,
    height: 60
  },
  complaintLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 5
  },
  complaintText: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['lg'],
    color: COLOR.DEFAULT,
    textAlign: 'center',
    lineHeight: 32
  },
})
