/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppTwoScreen from './AppTwo'
import AppThreeScreen from './AppThree'
import SwiftViewScreen from './SwiftView'

const MainNavigator = createStackNavigator({
  AppTwo: {screen: AppTwoScreen},
  AppThree: {screen: AppThreeScreen},
  SwiftView: {screen: SwiftViewScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
