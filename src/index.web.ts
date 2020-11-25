import {AppRegistry} from 'react-native';
import AppWrapper from './AppWrapper';
import {name as appName} from './app.json';

import 'html5-device-mockups/dist/device-mockups.min.css';

AppRegistry.registerComponent(appName, () => AppWrapper);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
