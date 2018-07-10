import React, { Component } from 'react';
import { Text, Container, Content, Form, Item, Input, Label } from 'native-base';
import Expo from 'expo';
import firebase from 'firebase'
import { KeyboardAvoidingView, Dimensions, ActivityIndicator, TouchableOpacity, View } from 'react-native'
import AppHeader from './Header';
import Hyperlink from 'react-native-hyperlink'
import AppButton from './Button';
let { height, width } = Dimensions.get('window');


export default class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
      username: '',
      email: '',
      age: '',
      password: '',
      number: '',
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true })
  }

  signup = () => {
   
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((createdUser) => {
        console.log('signed up successfully', createdUser.user.uid);
        let user = this.state;
        user.uid = createdUser.user.uid

        firebase.database().ref('users/' + createdUser.user.uid + '/').set(user)
          .then(() => {
            firebase.database().ref('users/').once('value')
              .then((userData) => {
                let allUsers = userData.val();
                let currentUserUid = firebase.auth().currentUser.uid;

              })
          })
        this.setState({
          isReady: false
        })
        this.props.navigation.navigate('Login')
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });

  }
  render() {

    if (!this.state.isReady) {
      return <ActivityIndicator size="large" color="#4FA7A1" style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
      }} />;
    }
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          {/* <AppHeader title='Signup' subtitle='' /> */}
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input onChangeText={username => this.setState({ username })}
                  value={this.state.username} />
              </Item>
              <Item floatingLabel last>
                <Label>Email</Label>
                <Input onChangeText={email => this.setState({ email })}
                  value={this.state.email} />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input onChangeText={password => this.setState({ password })}
                  value={this.state.password} secureTextEntry={true} />
              </Item>
              <Item floatingLabel last>
                <Label>Mobile Number</Label>
                <Input onChangeText={number => this.setState({ number })}
                  value={this.state.number} />
              </Item>
              <Item floatingLabel>
                <Label>Age</Label>
                <Input onChangeText={age => this.setState({ age })}
                  value={this.state.age} />
              </Item>
              <AppButton text='Signup' btnStyle={{
                flex: 1, backgroundColor: '#4FA7A1', width: (width / 1.1),
                marginLeft: width / 20,
                marginTop: height / 20,
              }}
                onClick={this.signup.bind(this)} />
              <View style={{ alignItems: 'center', marginTop: 10, marginBottom:10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >OR</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Login')
                }
                }>
                  <Text style={{ fontSize: 15 }}>
                    Already Have An account? Click Here
                  </Text>
                </TouchableOpacity>
              </View>
            </Form>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

