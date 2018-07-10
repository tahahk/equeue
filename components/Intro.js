import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/14.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/2.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/3.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#6CBAB3',
  }
];

export default class Intro extends Component {
  constructor(props){
    super(props)
   this.onDon = this.onDon.bind(this) 
  }
  onDon = () => {
    this.props.navigation.navigate('Signup')
  }
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        onDone={this.onDon}
      />
    );
  }
}

