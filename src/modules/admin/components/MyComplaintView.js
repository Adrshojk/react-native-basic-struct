

import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { DarkStatusBar } from '../../../common/components/StatusBar';
import { FlatList, NativeBaseProvider, ScrollView, Text, HStack, VStack } from 'native-base';
import Header from '../../../common/components/Header';
import { Container, Content } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Navigation, useNavigation } from '@react-navigation/native'
import { navigation } from '../../../common/actions';

function MyComplaintView(props) {
  const data = [{
    id: "1",
    Date: "22-11-2022",
    complainer: "001AT",
    complaintType: "Dead Animals",
    complaintDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }, {
    id: "2",
    Date: "25-11-2022",
    complainer: "002NT",
    complaintType: "Overflow street with dry leaves",
    complaintDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

  },
  ];
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };

  return (
    <NativeBaseProvider>
      <Container>
        <DarkStatusBar />
        <Header leftType='back' goBack={back} title={'My Complaint'} />
        <Content>
          <ScrollView>
            <TouchableOpacity style={styles.complaintContent} onPress={() => navigation.navigate('ComplaintDetail')}>
              <FlatList
                data={data}
                renderItem={({ item }) =>
                  <HStack style={styles.complaintContainer} justifyContent="space-between" alignItems="center">
                    <VStack style={styles.complaintContent}>
                      <Text style={styles.complaintType}>{item.complainer}</Text>
                      <Text style={styles.complaintType}>{item.complaintType}</Text>
                      <Text style={styles.complaintDetail}>{item.complaintDetail}</Text>
                    </VStack>
                    <Text style={styles.complaintDate}>{item.Date}</Text>
                  </HStack>
                }
                keyExtractor={item => item.id} />
            </TouchableOpacity>
          </ScrollView>
        </Content>
      </Container>
    </NativeBaseProvider>

  );
}
export default MyComplaintView;


const styles = StyleSheet.create({
  complaintContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: COLOR.LIGHT,
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  complaintContent: {
    flex: 1,
  },
  complaintType: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['sm'],
    color: COLOR.DEFAULT,
    letterSpacing: 1
  },
  complaintDetail: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE['xs'],
    color: COLOR.LIGHTGREY
  },
  complaintDate: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE['xs'],
    color: COLOR.DEFAULT
  },
})
