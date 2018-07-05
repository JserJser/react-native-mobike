import { AppRegistry } from 'react-native';
import App from './App';
import setup, {AppNavigator} from "./js-app/setup";
AppRegistry.registerComponent('OOM', () => AppNavigator);
