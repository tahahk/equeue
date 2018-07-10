import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { Dimensions } from 'react-native';
let { height, width } = Dimensions.get('window');


const AppButton = (props) => {
    return (
        <Button onPress={props.onClick} block style={props.btnStyle} >
            <Text>{props.text}</Text>
        </Button>
    );
}

export default AppButton;