import React, { Component } from 'react';
import { Text, Container, Content, Form, Item, Input, Label } from 'native-base';
import Expo from 'expo';
import firebase from 'firebase'
import { KeyboardAvoidingView, Dimensions, ActivityIndicator } from 'react-native'
import AppHeader from './Header';
import AppButton from './Button';
let { height, width } = Dimensions.get('window');


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
      email: '',
      password: '',
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true })
  }
  Login = ()=>{
    this.props.navigation.navigate('Menu')

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
          {/* <AppHeader title='Login' subtitle='' /> */}
          <Content>
            <Form>
              
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
              
              <AppButton text='Login' onClick={this.Login.bind(this)} btnStyle={{ flex: 1, backgroundColor: '#4FA7A1', width: (width / 1.1), marginLeft: width / 20, marginTop: height / 6 }} />
            </Form>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

