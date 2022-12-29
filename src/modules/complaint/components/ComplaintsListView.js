

import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { DarkStatusBar } from '../../../common/components/StatusBar';
import { FlatList, Modal, NativeBaseProvider, ScrollView, Text, HStack, VStack } from 'native-base';
import Header from '../../../common/components/Header';
import { Container, Content, Icon } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Navigation, useNavigation } from '@react-navigation/native'
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

function ComplaintsListView(props) {
  const { complaintsList: { payLoad: { content } } } = props;
  // const { data } = props.route.params;
  // console.tron.log("content:",content)
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   props.fetchComplaints(data.id);

  // }, []);
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  }

  useEffect(() => {
    props.fetchComplaints()
  }, [])
  useEffect(() => {
  })



  return (
    <NativeBaseProvider>
      <Container>
        <DarkStatusBar />
        <Header leftType='back' goBack={back} title={'Complaint List'} />
        <Content>
          <ScrollView>
            <View style={{ marginTop: 20 }}>
              {content && <FlatList
                data={content}
                renderItem={({ item, index }) => {
                  return <TouchableOpacity style={styles.complaintContent} onPress={() => navigation.navigate('ComplaintsDetail', { data: item })}>
                    <HStack style={styles.complaintContainer} justifyContent="space-between" alignItems="center">
                      <VStack style={styles.complaintContent}>
                        <Text style={styles.complaintType}>{item.complaintNo}</Text>
                        <Text style={styles.complaintDetail}>{item.typeId.name}</Text>
                        <Text style={styles.complaintDetail}>{item.typeId.description}</Text>
                        <Text style={styles.complaintDetail}>{item.mobileNo}</Text>
                      </VStack>
                      <VStack style={styles.complaintInfo}>
                        <Text style={styles.complaintDate}>{item.complaintLocation}</Text>
                        <TouchableOpacity onPress={() => setShowModal(true)}>
                          <Icon name='trash' type='FontAwesome' style={styles.trashIcon} />
                        </TouchableOpacity>
                      </VStack>
                    </HStack>
                  </TouchableOpacity>
                }
                }
                keyExtractor={item => item.id} />}

            </View>
          </ScrollView>
        </Content>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="350px">
            {/* <Modal.CloseButton /> */}
            <Modal.Body>
              <Text>You want to delete this complaint</Text>
            </Modal.Body>

            <Modal.Footer>
              <View style={{ flexDirection: 'row' }}></View>
              <TouchableOpacity style={styles.modalDelete} onPress={() => {
                setShowModal(false);
              }}>
                <Text style={styles.deleteBtn}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalCancel} onPress={() => {
                setShowModal(false);
              }}>
                <Text style={styles.cancelBtn}>Cancel</Text>
              </TouchableOpacity>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Container>
    </NativeBaseProvider>

  );
}
export default ComplaintsListView;


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
    flex: 1
  },
  complaintType: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT,
    letterSpacing: 1
  },
  complaintDetail: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE['xs'],
    color: COLOR.GREY
  },
  complaintInfo: {
    alignItems: 'center'
  },
  trashIcon: {
    fontSize: SIZE['2xl'],
    color: COLOR.GREY,
    paddingTop: 50
  },
  complaintDate: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE['xs'],
    color: COLOR.DEFAULT
  },
  modalDelete: {
    backgroundColor: COLOR.PRIMARY,
    marginRight: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  deleteBtn: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['sm'],
    color: COLOR.DARK
  },
  modalCancel: {
    backgroundColor: COLOR.LIGHTGREY,
    marginRight: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
})
