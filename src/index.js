import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import configureStore from './redux';
import { AppNavigation } from './navigation';
// import { toastConfig } from './config';
// import Orientation from 'react-native-orientation-locker';

// Orientation.lockToPortrait();

// TODO: Remove when fixed
// LogBox.ignoreLogs([
//   'Animated: `useNativeDriver` was not specified.', // Some modules not using native driver for animations
//   'Warning: Cannot update a component', // Stop redux-form log spamming
//   'Warning: Cannot update during an existing state transition', // Happens due to slow emulator performance
//   'componentWillReceiveProps', // componentWillReceiveProps deprecated
//   'currentlyFocusedField', // currentlyFocusedField deprecated
//   'TouchID error', // Stop TouchID is not supported warning in emulator 
//   'Setting a timer'
// ]);

export const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      {/* <IconRegistry icons={icons} /> */}
        <SafeAreaProvider>
          <AppNavigation />
          {/* <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} /> */}
        </SafeAreaProvider>
    </Provider>
  );
}
