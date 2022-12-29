import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron
  .configure() // controls connection & communication settings
  .use(sagaPlugin())
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux());

if (__DEV__) {
  reactotron.connect(); // let's connect!
  reactotron.clear();
}

console.tron = reactotron;

export default reactotron;
