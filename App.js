import React from 'react';
import { StyleSheet } from 'react-native';
import Intro from './components/Intro';
import SignupForm from './components/Signup';
import Login from './components/Login';
import firebase from 'firebase/app';
import Menu from './components/Menu'
// import Intro from './components/Intro'

import { createStackNavigator } from 'react-navigation';


const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});

var config = {
  apiKey: "AIzaSyAJRZulaVNWqsh4RL2TpZzBJHf7QBXICe8",
  authDomain: "equeueproject.firebaseapp.com",
  databaseURL: "https://equeueproject.firebaseio.com",
  projectId: "equeueproject",
  storageBucket: "equeueproject.appspot.com",
  messagingSenderId: "1099260946495"
};
firebase.initializeApp(config);
console.disableYellowBox = true;
const App = createStackNavigator({
  Home: {
    screen: Intro,
    navigationOptions: () => ({
      header: null,
    })
  },
  Signup: {
    screen: SignupForm,
    navigationOptions: () => ({
      title: 'Signup',
      headerStyle: {
        backgroundColor: '#4FA7A1',
      },
      headerLeft: null
    })
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: 'Login',
      headerStyle: {
        backgroundColor: '#4FA7A1',
      },
    })
  },
  Menu: {
    screen: Menu,
    navigationOptions: () => ({
      title: 'Choose your order',
      headerStyle: {
        backgroundColor: '#4FA7A1'
      }
    })
  }

});

export default App;
