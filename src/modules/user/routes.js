import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE_KEYS } from './constants';

const { Navigator, Screen } = createStackNavigator();

export default function UserNavigation() {
    return (
        <Navigator initialRouteName={ROUTE_KEYS.SIGNUP_FORM} headerMode="none">
            <Screen name={ROUTE_KEYS.LOGIN_FORM} getComponent={() => require('./containers/Login').default} />
            <Screen name={ROUTE_KEYS.SIGNUP_FORM} getComponent={() => require('./containers/Signup').default} />
            <Screen name={ROUTE_KEYS.OTP_FORM} getComponent={() => require('./containers/Otp').default} />
            <Screen name={ROUTE_KEYS.FORGOT_PASSWORD}  getComponent={() => require('./containers/Forgotpassword').default}/>
            <Screen name={ROUTE_KEYS.DUMMY} getComponent={() => require('./containers/Dummy').default}  />
        </Navigator>
    );
}
