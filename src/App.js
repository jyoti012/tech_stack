import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => { this.props.navigation.push('Details') }} >
            <Text style={{ 
              borderWidth: 1, 
              height: 50, 
              width: 100,
              paddingTop: 18, 
              textAlign: 'center' }}>
              Go to Details
            </Text>
        </TouchableOpacity>
      </View>
    );
  }  
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('Home') }}>
            <Text style={{ 
              borderWidth: 1, 
              height: 50, 
              width: 100,
              paddingTop: 18, 
              textAlign: 'center' }}>
              Go to Home
            </Text>
          </TouchableOpacity>
      </View>
    );
  }  
}

export default createStackNavigator({
  Home: {
    screen: App,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});