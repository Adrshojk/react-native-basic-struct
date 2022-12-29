import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE_KEYS } from './constants';

const { Navigator, Screen } = createStackNavigator();

export default function UserNavigation() {
    return (
        <Navigator initialRouteName={ROUTE_KEYS.DASHBOARD} headerMode="none">
            <Screen name={ROUTE_KEYS.DASHBOARD} getComponent={() => require('./containers/Dashboard').default} />
            <Screen name={ROUTE_KEYS.MY_COMPLAINT} getComponent={() => require('./containers/MyComplaint').default} />
            <Screen name={ROUTE_KEYS.COMPLAINT_DETAIL} getComponent={() => require('./containers/ComplaintDetail').default} />
            <Screen name={ROUTE_KEYS.COMPLAINT_REPORT} getComponent={() => require('./containers/ComplaintReport').default} />
            <Screen name={ROUTE_KEYS.COMPLAINT_ESCALATE} getComponent={() => require('./containers/ComplaintEscalate').default} />
        </Navigator>
    );
}
