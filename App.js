import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FlatList, StatusBar as sb, ImageBackground} from 'react-native'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import HotVideo from './component/HotVideo';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import TrendingItem from './component/TrendingItem';



const trendingItemArr = [
  {
    image: 'https://pbs.twimg.com/semantic_core_img/1713203844765691904/ThAoem6l?format=jpg&name=medium',
    title: 'Event Live',
    tag: '#RWC2023 Quarter Finals'
  },
  {
    title: 'Music Trending',
    tag:'WANT SO BAC OUT NOW',
    postCount: '19.4K'
  },
  {
    title: 'Music Trending',
    tag:'WANT SO BAC OUT NOW',
    postCount: '19.4K'
  },
  {
    title: 'Music Trending',
    tag:'WANT SO BAC OUT NOW',
    postCount: '19.4K'
  },
  {}
]

const FirstRoute = () => (
  <View style={{ height: '100%'}}>
    <View style={{flex: 1, height: 10}}>
      <FlatList
        data={trendingItemArr}
        renderItem={
          ({item, index}) => {
            if(index === 0) {
              return (
                <ImageBackground source={{uri: item.image}} resizeMode='cover' style={styles.cover}>
                  <Text>{item.title}</Text>
                </ImageBackground>
              )
            }
            if (index === 4) {
              return  <HotVideo />
            }
            return <TrendingItem trendData={item}></TrendingItem>}
          }
      >
      </FlatList>
      {/* {trendingItemArr.map((item, index) => (
        <TrendingItem key={index} trendData={item}></TrendingItem>
      ))} */}
    </View>
  </View>
)

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
    <Text>test</Text>
  </View>
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: SecondRoute,
  fourth: SecondRoute
})

const renderTabBar = props => (
  <TabBar
    {...props}
    renderLabel={({route, focuded, color}) => (
      <Text style={{ color: 'black', margin: 8 }}>
        {route.title}
      </Text>
    )}
    indicatorStyle={{ backgroundColor: '#72b6f4' }}
    style={{ backgroundColor: 'whilte'}}
  />
);

export default function App() {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {
      key: 'first', title: 'For you'
    },
    {
      key: 'second', title: 'Trending'
    },
    {
      key: 'third', title: 'Music'
    },
    {
      key: 'fourth', title: 'Sports'
    }
  ])
  console.log(sb.currentHeight)
  return (
    <View style={{...styles.container, paddingTop: 40}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      >
      </TabView>
      <StatusBar></StatusBar>
    </View>
    
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
