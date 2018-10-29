import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

class App extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Home'),
      headerRight: (
        <TouchableOpacity
          onPress={() => alert('Contact you soon')}
          style={{ height: 50, width: 100, textAlign: 'center', borderRadius: 5  }} >
          <Text style={{ paddingTop: 15, paddingBottom: 10, alignSelf: 'center', color: '#fff', }}>Help</Text>
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => { this.props.navigation.push('Details', 
            {
              itemId: Math.floor(Math.random() * 100),
              title: 'Details',
              otherParam: 'Lorem Ipsum',
            }) 
          }} >
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
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Details page'),
    };
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'No-ID');
    const otherParam = navigation.getParam('otherParam', 'Dummy data');
    console.log(this.props.navigation.state.params)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
});