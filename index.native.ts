import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import RootStack from './src/screens';
import {name as appName} from './src/app.json';

AppRegistry.registerComponent(appName, () => RootStack);
