
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { dateUtils } from "../../../common/utils";

import { DarkStatusBar } from '../../../common/components/StatusBar';
import { Image, Input, NativeBaseProvider, Pressable, Text, Box, ZStack, ScrollView } from 'native-base';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import { Button, Container, Content, Dropdown, DateAndTimePicker, Icon } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'

function ComplaintReportView({navigation}, props) {
  const [service, setService] = useState()
  const [status, assignComplaint] = useState('')
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [show, setShow] = useState(false);
  const [click, setClick] = useState("from");
  const { convertToLocalDate } = dateUtils;
  const assignArray = [
    {
      id: "1",
      ward_id: "Ward Level",
    },
    {
      id: "2",
      ward_id: "Municipality Level",
    },
    {
      id: "3",
      ward_id: "District Level",
    },
  ];

  const onChange = (event, selectedDate) => {
    console.log("slsfdfd", "" + event + "---" + selectedDate);
    if (event?.type === "dismissed") {
      console.tron.log("in event cancel");
      // setDate(date);
      setShow(false);
      return;
    }
    if (mode == "date") {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
      if (click === "from") {
        setDateFrom(convertToLocalDate(currentDate));
      } else {
        setDateTo(convertToLocalDate(currentDate));
      }
    }
  };

  const back = () =>{
    navigation.goBack();
  }

  return (
    <NativeBaseProvider>
      <Container>
        <DarkStatusBar />
        <Header leftType='back' goBack={back} title={'Reports'} />
        <Content>
          <ScrollView >
            <View style={{marginTop: 20}}>
              <View style={styles.datepickerRow}>
                <View style={{flex:1}}>
                  <Text style={styles.dateText}>From Date</Text>
                  <Pressable style={styles.dateSelectRow}
                    onPress={() => {
                      setClick("from"), setShow(true);
                    }}
                  >
                    <Text style={{ marginRight: 5 }}>{dateFrom}</Text>
                    <Icon
                      name="calendar-today"
                      type="MaterialIcons"
                      style={{ fontSize: SIZE["xl"] }}
                    />
                  </Pressable>
                </View>
                <View View style={{flex:1, marginLeft: 10}}>
                  <Text style={styles.dateText}>To Date</Text>
                  <Pressable style={styles.dateSelectRow}
                    onPress={() => {
                      setClick("to"), setShow(true);
                    }}
                  >
                    <Text style={{ marginRight: 5 }}>{dateTo}</Text>
                    <Icon
                      name="calendar-today"
                      type="MaterialIcons"
                      style={{ fontSize: SIZE["xl"] }}
                    />
                  </Pressable>
                </View>
              </View>
              <Text style={styles.formLabel}>{'Concerned Organization'.toUpperCase()}</Text>
              <View style={styles.pickerSelect}>
                <Dropdown
                  accessibilityLabel=""
                  placeholder=""
                  onChange={assignComplaint}
                  setService={setService}
                  data={assignArray}
                />
              </View>
              <Text style={styles.formLabel}>{'Report Schedule'.toUpperCase()}</Text>
              <View style={styles.pickerSelect}>
                <Dropdown
                  accessibilityLabel=""
                  placeholder=""
                  onChange={assignComplaint}
                  setService={setService}
                  data={assignArray}
                />
              </View>
              <Button variant='primary' marginTop={5} onPress={() => props.navigation.navigate('ComplaintsList')}>
                <Text style={styles.submitBtn}>SUBMIT</Text>
              </Button>
              {show && (
                <DateAndTimePicker
                  onChange={onChange}
                  date={date}
                  mode={mode}
                  requestedDate={date}
                />
              )}

            </View>

          </ScrollView>
        </Content>
      </Container>
    </NativeBaseProvider>

  );
}
export default ComplaintReportView;


const styles = StyleSheet.create({
  datepickerRow: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 10
  },
  dateSelectRow: {
    flex:1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'flex-end',
    borderColor: COLOR.LIGHTGREY,
    borderWidth: 1
  },
  dateText:{
    fontFamily: FAMILY.BOLD,
    color: COLOR.DEFAULT,
    fontSize: SIZE['md'],
    marginBottom: 8
  },
  formLabel: {
    fontFamily: FAMILY.BOLD,
    color: COLOR.DEFAULT,
    fontSize: SIZE['xs'],
    marginTop: 3,
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
  submitBtn: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE['md'],
    color: COLOR.DEFAULT
  },
})
