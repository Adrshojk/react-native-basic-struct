import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE_KEYS } from './constants';
import Splash from './containers/Splash';

const { Navigator, Screen } = createStackNavigator();

export default function UserNavigation() {
    return (
        <Navigator initialRouteName={ROUTE_KEYS.SPLASH} headerMode="none">
            <Screen name={ROUTE_KEYS.SPLASH} component={Splash} />
        </Navigator>
    );
}
