import React, { Component } from 'react';
import { Left, Title, Body, Subtitle, Right, Header } from 'native-base';
import Expo from 'expo';
import { KeyboardAvoidingView, Dimensions } from 'react-native'


const AppHeader = (props)=>{
        return (
            <Header style={{
                paddingTop: 25,
                height: 90,
                backgroundColor: '#4FA7A1',
                elevation: 1
            }}>
                <Left />
                <Body>
                    <Title>{props.title}</Title>
                    <Subtitle>{props.subtitle}</Subtitle>
                </Body>
                <Right />
            </Header>
        )
    }
export default AppHeader;