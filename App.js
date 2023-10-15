import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './screens/Home/Explore';
import Detail from './screens/Detail/Detail';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Explore} />
        <Stack.Screen name="Details" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cover: {
    height: 200,
    width: '100%'
  },
  container: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    top: '70%',
    left: '5%'
  },
  coverText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 900,
  }
});

// /**
//  * Tmall 3c APP
//  * https://github.com/facebook/react-native
//  */
// 'use strict';

// var React = require('react-native');

// var Home = require('./Home');


// var {
//   // Image,
//   AppRegistry,
//   StyleSheet,
//   ScrollView,
//   TabBarIOS,
//   NavigatorIOS,
//   // Text,
//   View,
// } = React;



// var App = React.createClass({

//     render() {

//         // return(
//         //     <Home />
//         // );

//         return (
//           <NavigatorIOS
//             style={{flex : 1,backgroundColor: '#000000'}}
//             tintColor='#cccccc'
//             barTintColor='#cccccc'
//             initialRoute={{
//               title: '天猫电器城',
//               component: Home,
//             }}/>
//         );

        
//     }
// });


// AppRegistry.registerComponent('abcddd', () => App);
