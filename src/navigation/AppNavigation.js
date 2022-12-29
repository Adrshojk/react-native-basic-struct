import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Box, Center, Divider, Text, NativeBaseProvider, Pressable, HStack, VStack, Image } from "native-base";
import RootNavigation from './RootNavigation';
import { isReadyRef, navigationRef } from './constants';
import { actions } from '../common';

const { routeChanged } = actions;
export const openDrawer = () => {
    navigationRef.dispatch(DrawerActions.openDrawer())
}

class AppNavigation extends Component {

    componentDidMount() {
        isReadyRef.current = false;
    }

    render() {
        return (
            <NavigationContainer
                independent={true}
                ref={navigationRef}
                onReady={() => {
                    isReadyRef.current = true;
                }}
                onStateChange={() => {
                    this.props.routeChanged(navigationRef.current.getCurrentRoute().name);
                }}
            >
                <NativeBaseProvider>
                    <RootNavigation />
                </NativeBaseProvider>

            </NavigationContainer>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    routeChanged: (name) => dispatch(routeChanged(name))
});

export default connect(null, mapDispatchToProps)(AppNavigation);

