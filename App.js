

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  WriteStory: { screen: WriteStoryScreen },
  ReadStory: { screen: ReadStoryScreen }
},{
 defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    var route = navigation.state.routeName
    if(route === 'WriteStory'){
      return(
        <Image
        style={{width:40, height:40}}
        source={require('./assets/write.png')}
        />
      )
    }else if(route === 'ReadStory'){
      return(
        <Image
        style={{width:40, height:40}}
        source={require('./assets/read.png')}
        />
      )
    }

  }

 })   
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
