
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DarkStatusBar } from '../../../common/components/StatusBar';
import { Button, NativeBaseProvider, Text, Box, ZStack, ScrollView } from 'native-base';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import { Container, Content, Checkbox, Icon, Radio } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import { Navigation } from '@react-navigation/native'

function DummyView({ navigation }) {
  const [checked1, setChecked1] = useState(true);
  let datacheck = [{ value: 'dot', name: 'dot' },
  { value: '', name: 'circle' },
  { value: 'square', name: 'square' }]

  const dataRadio = [
    { value: 'Apple' },
    { value: 'Samsung' },
    { value: 'Blackberry' },
  ];
  const [valueRadio, setValueRadio] = useState(dataRadio[0].value);

  return (
    <NativeBaseProvider style={{borderColor: 'red',borderWidth:1}}>
      <Container>
        <DarkStatusBar />
        <Header leftType='menu' title={'il'} rightType='notify' />
        <Content>
          <ScrollView contentContainerStyle={{ bottom: 30 }}>
            <Button style={{ backgroundColor: 'white' }} onPress={() => { navigation.navigate('Splash') }}>
              <Text bold underline style={{ fontSize: SIZE['2xl'] }}>Home</Text>
            </Button>
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
              <Text bold style={{ marginBottom: 10, fontSize: SIZE['xl'] }}>CheckBox</Text>
              <Checkbox onChange={() => setChecked1()} data={datacheck} />
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
              <Text bold style={{ marginBottom: 10, fontSize: SIZE['xl'] }}>Radio</Text>
              <Radio
                checked={valueRadio}
                onChange={v => setValueRadio(v)}
                data={dataRadio}
              />
            </View>
          </ScrollView>
        </Content>
      </Container>

      <Footer />
    </NativeBaseProvider>

  );
}
export default DummyView;


const styles = StyleSheet.create({
})
