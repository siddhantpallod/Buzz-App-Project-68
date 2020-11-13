import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FbScreen from './screens/fb';
import InsScreen from './screens/ins';
import {createAppContainer} from 'react-navigation';
import {Header} from 'react-native-elements';

export default class App extends React.Component {
  render(){
  return (
    <View>
      <Header
      backgroundColor = 'pink'
      centerComponent = {{
        text: 'Buzz App',
        style : {color : 'black', fontSize : 28}
      }}
      />
    <AppContainer/>
    </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen: FbScreen},
  Instagram : {screen : InsScreen}
})

const AppContainer = createAppContainer(TabNavigator)