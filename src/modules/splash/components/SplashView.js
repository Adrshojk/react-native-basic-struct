
import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { DarkStatusBar } from '../../../common/components/StatusBar';
import { Button, NativeBaseProvider, Text, Box, ZStack, ScrollView } from 'native-base';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import { Container, Content, Checkbox, Icon, Radio } from '../../../common/components/Basic'
import { COLOR, SIZE, FAMILY } from '@theme/typography'
import SplashScreen from 'react-native-splash-screen'


function Splash({ navigation }) {
  useEffect(() => {
    SplashScreen.hide();
}, []);

  return (
    <NativeBaseProvider>
      <Container>
        <Content style={{ backgroundColor: '#30D5DD',alignItems: 'center',justifyContent: 'center', borderColor: 'red',borderWidth:1 }}>
          <View >
            <Button style={{ backgroundColor: '#30D5DD' }} >
              <Text bold underline style={{ fontSize: SIZE['2xl'] }}>KSWMP</Text>
            </Button>
           
          </View>
        </Content>
      </Container>

    </NativeBaseProvider>

  );
}
export default Splash;


const styles = StyleSheet.create({
})
