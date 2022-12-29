import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Toast from 'react-native-toast-message';
import { NavigationContainer, DrawerActions, navigationRef } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Box, Center, Divider, Text, NativeBaseProvider, Pressable, HStack, VStack, Image } from "native-base";
import { Icon } from "../common/components/Basic";
import { COLOR, FAMILY, SIZE } from "@theme/typography";
import { MODULE_ROUTE_KEYS } from "../common";
import realm from "../common/realm"
// import { isReadyRef, navigationRef } from './constants';
// import * as Splash from '../modules/splash';
import { toastConfig } from '../common/config';

import * as User from "../modules/user";
import * as Admin from "../modules/admin";
import * as Complaint from "../modules/complaint";

// user
import Login from "../modules/user/containers/Login";
import Signup from "../modules/user/containers/Signup";
import Otp from "../modules/user/containers/Otp";
// complaint
import Complaints from "../modules/complaint/containers/Complaints";
import NewComplaint from "../modules/complaint/containers/NewComplaint";
import ComplaintsList from "../modules/complaint/containers/ComplaintsList";
import ComplaintsDetail from "../modules/complaint/containers/ComplaintsDetail";
//Admin
import Dashboard from "../modules/admin/containers/Dashboard";
import MyComplaint from "../modules/admin/containers/MyComplaint";
import ComplaintDetail from "../modules/admin/containers/ComplaintDetail";
import ComplaintReport from "../modules/admin/containers/ComplaintReport";
import ComplaintEscalate from "../modules/admin/containers/ComplaintEscalate";

import * as Splash from "../modules/splash"

const { Navigator, Screen } = createStackNavigator();

// export default function RootNavigation() {
//     return (
//         <Navigator initialRouteName={MODULE_ROUTE_KEYS.USER} headerMode="none">
//             <Screen name={MODULE_ROUTE_KEYS.SPLASH} component={Splash.routes} />
//             <Screen name={MODULE_ROUTE_KEYS.USER} component={User.routes} />
//             <Screen name={MODULE_ROUTE_KEYS.COMPLAINT} component={Complaint.routes} />
//         </Navigator>
//     );
// }


const Drawer = createDrawerNavigator();

const getIcon = (screenName) => {
  switch (screenName) {
    case "ComplaintsList":
      return "cleaning-services";
    case "Complaints":
      return "cleaning-services";
    case "Logout":
      return "logout";
    default:
      return undefined;
  }
};
function CustomDrawerContent(props) {
  return (
    <HStack style={{ backgroundColor: COLOR.LIGHT, flex: 1 }}>
      <DrawerContentScrollView {...props} safeArea>
        <VStack space="6" my="2" mx="1">
          <Box flexDirection='row' alignItems={'center'} style={{ marginHorizontal: 15, marginVertical: 10 }}>
            <Image source={require('@asset/images/avatar.png')} resizeMode='contain' style={{ width: 50, height: 50 }} />
            <Text bold style={{ color: COLOR.DARK, marginLeft: 10, }}>Customer Name</Text>
          </Box>
          <VStack divider={<Divider />}>
            <VStack>
              {props.state.routeNames.map((name, index) => (
                <Pressable
                  bg={
                    index === props.state.index
                      ? "rgba(6, 182, 212, 0.3)"
                      : "transparent"
                  }
                  onPress={(event) => {
                    props.navigation.navigate(name);
                  }}
                >
                  <HStack padding={2} alignItems={"center"}>
                    {/* <Image
                source={getIcon(name)}
                style={{height: 20, width:20}}
                resizeMode='contain'
              /> */}
                    <Icon
                      name={getIcon(name)}
                      type="MaterialIcons"
                      style={{
                        color:
                          index === props.state.index ? COLOR.red : COLOR.white,
                        fontSize: 24,
                      }}
                    />
                    <Text
                      marginLeft={2}
                      fontFamily={FAMILY.BOLD}
                      fontWeight="400"
                      fontSize={SIZE["md"]}
                      color={
                        index === props.state.index ? COLOR.red : COLOR.white
                      }
                    >
                      {name}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack>
          </VStack>
        </VStack>
        <DrawerItem
          label={() => (
            <HStack marginLeft={-1} marginTop={-4} alignItems={"center"} >
              <Icon
                name="logout"
                type="MaterialIcons"
                style={{
                  color: COLOR.logout_clr,
                  fontSize: 24,
                }}
              />
              <Text
                marginLeft={2}
                fontWeight="400"
                fontSize={SIZE["xl"]}
                color={COLOR.logout_clr}
              >
                Logout
              </Text>
            </HStack>
          )}
          onPress={() => alert("Are you sure to Log out?")}
        />
      </DrawerContentScrollView>
    </HStack>
  );
}
function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        initialRouteName={MODULE_ROUTE_KEYS.COMPLAINT}
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name={'ComplaintsList'}
          component={ComplaintsList}
        />
        <Drawer.Screen
          name={'Complaints'}
          component={Complaints}
        />
      </Drawer.Navigator>
    </Box>
  );
}


function MyStack() {
  return (
    <Box safeArea flex={1}>
      <Navigator
        sceneAnimationEnabled={false}
        initialRouteName={MODULE_ROUTE_KEYS.USER}
        screenOptions={{ headerShown: false }}
      >
        <Screen
          name={MODULE_ROUTE_KEYS.ADMIN}
          component={Admin.routes}
        />
        <Screen
          options={{ backgroundColor:'#FFF', borderColor: 'red',borderWidth:1 }}
          name={MODULE_ROUTE_KEYS.USER}
          component={User.routes}
        />
        <Screen
          name={MODULE_ROUTE_KEYS.COMPLAINT}
          component={MyDrawer}
        />
        <Screen
          name={MODULE_ROUTE_KEYS.SPLASH}
          component={Splash.routes}
        />
        <Screen
          name={'NewComplaint'}
          component={NewComplaint}
        />
        <Screen
          name={'ComplaintsList'}
          component={ComplaintsList}
        />
        <Screen
          name={'ComplaintsDetail'}
          component={ComplaintsDetail}
        />
        <Screen
          name={'Login'}
          component={Login}
        />
        <Screen
          name={'Signup'}
          component={Signup}
        />
        <Screen
          name={'Otp'}
          component={Otp}
        />
        {/* Admin */}
        <Screen
          name={'Dashboard'}
          component={Dashboard}
        />
        <Screen
          name={'MyComplaint'}
          component={MyComplaint}
        />
        <Screen
          name={'ComplaintDetail'}
          component={ComplaintDetail}
        />
        <Screen
          name={'ComplaintReport'}
          component={ComplaintReport}
        />
        <Screen
          name={'ComplaintEscalate'}
          component={ComplaintEscalate}
        />
      </Navigator>
    </Box>
  );
}

export default function RootNavigation() {
  return (
    // <NavigationContainer 
    //     // independent={true} 
    //     ref={navigationRef}
    //     onReady={() => {
    //         isReadyRef.current = true;
    //     }}
    //     onStateChange={() => {
    //         this.props.routeChanged(navigationRef.current.getCurrentRoute().name);
    //     }}
    // >
    <NativeBaseProvider>
      {/* <MyDrawer /> */}
      <MyStack />
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </NativeBaseProvider>
    // </NavigationContainer>
  );
}