/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Copilot from './android/src/MyComponent';
import App from './App';
AppRegistry.registerComponent(appName, () => App);
