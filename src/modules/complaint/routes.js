import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE_KEYS } from './constants';
import NewComplaint from './containers/NewComplaint';
import Complaints from './containers/Complaints';
import ComplaintsDetail from './containers/ComplaintsDetail';
import ComplaintsList from './containers/ComplaintsList';

const { Navigator, Screen } = createStackNavigator();

export default function UserNavigation() {
    return (
        <Navigator initialRouteName={ROUTE_KEYS.COMPLAINTS} headerMode="none">
            <Screen name={ROUTE_KEYS.COMPLAINT_FORM} getComponent={() => require('./containers/NewComplaint').default} />
            <Screen name={ROUTE_KEYS.COMPLAINTS} getComponent={() => require('./containers/Complaints').default}/>
            <Screen name={ROUTE_KEYS.COMPLAINTS_LIST} getComponent={() => require('./containers/ComplaintsList').default} />
            <Screen name={ROUTE_KEYS.COMPLAINTS_DETAIL} getComponent={() => require('./containers/ComplaintsDetail').default} />
        </Navigator>
    );
}
