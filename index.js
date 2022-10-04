/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import App from './src/app'
import { name as appName } from './app.json'
import { inspect } from 'react-native-flipper-xstate'

if (__DEV__) {
  inspect()
}
AppRegistry.registerComponent(appName, () => App)
