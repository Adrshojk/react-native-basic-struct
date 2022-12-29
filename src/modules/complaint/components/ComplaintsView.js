

import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Image, NativeBaseProvider, ScrollView, Skeleton, Text } from 'native-base';

import { DarkStatusBar } from '../../../common/components/StatusBar';
import Footer from '../../../common/components/Footer';
import Header from '../../../common/components/Header';
import { Container, Content } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Navigation, useNavigation } from '@react-navigation/native'

function ComplaintsView(props) {
  const drawer = () => {
    navigation.openDrawer();
  }
  const navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 300);

  return (
    <NativeBaseProvider>
      <Container>
        <DarkStatusBar />
        <Header leftType='menu' openDrawer={drawer} />
        <Content>
          <ScrollView style={{ marginBottom: 80 }}>
            <View style={styles.complaintContent}>

              <TouchableOpacity style={styles.complaintLayout}
                onPress={() => navigation.navigate('NewComplaint')}
              >
                <Image source={require('@asset/images/mycomplaint.png')} resizeMode={'contain'} style={styles.dashboardImg} />
                <Text style={styles.complaintText}>New Complaint</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.complaintLayout}
                onPress={() => navigation.navigate('ComplaintsDetail')}
              >
                <Skeleton h="60" isLoaded={isLoaded} style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                  <Skeleton px="4" mb="4" rounded="md" style={styles.dashboardImg} isLoaded={isLoaded}>
                    <Image source={require('@asset/images/report.png')} resizeMode={'contain'} style={styles.dashboardImg} />
                  </Skeleton>
                  <Skeleton.Text  lines={1} isLoaded={isLoaded}>
                    <Text style={styles.complaintText}>View Status</Text>
                  </Skeleton.Text>
                </Skeleton>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </Content>
      </Container>
      {/* <Footer currentScreen='Dashboard' /> */}
    </NativeBaseProvider>

  );
}
export default ComplaintsView;


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
