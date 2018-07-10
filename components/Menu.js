import React, { Component } from 'react';
import { Text, View, PanResponder, ActivityIndicator, Dimensions } from 'react-native';
import { Dropdown, TextField } from 'react-native-material-dropdown';
import Button from './Button'

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.onChangeText = this.onChangeText.bind(this);

        this.codeRef = this.updateRef.bind(this, 'code');
        this.nameRef = this.updateRef.bind(this, 'name');
        this.sampleRef = this.updateRef.bind(this, 'sample');
        this.typographyRef = this.updateRef.bind(this, 'typography');
        this.PaymentOptionsRef = this.updateRef.bind(this, 'PaymentOptions');

        this.state = {
            sample: 'The quick brown fox jumps over the lazy dog',
            typography: 'Select One',
            name: 'Select One',
            code: 'Select One',
            PaymentOptions: 'Select One',
            isReady: false

        };
    }

    onChangeText(text) {
        ['name', 'code', 'sample', 'typography', 'PaymentOptions']
            .map((name) => ({ name, ref: this[name] }))
            .filter(({ ref }) => ref && ref.isFocused())
            .forEach(({ name, ref }) => {
                this.setState({ [name]: text });
            });
    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ isReady: true })
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
        let { typography, name, code, sample, PaymentOptions } = this.state;

        let textStyle = [
            styles.text,
            styles[typography],
            styles[name + code],
        ];

        return (
            <View style={styles.screen}>
                <View style={styles.container}>
                    <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        onChangeText={this.onChangeText}
                        label='Restaurants'
                        data={typographyData}
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Dropdown
                                ref={this.nameRef}
                                value={name}
                                onChangeText={this.onChangeText}
                                label='Food Type'
                                data={colorNameData}
                            />
                        </View>

                        <View style={{ width: 96, marginLeft: 8 }}>
                            <Dropdown
                                ref={this.codeRef}
                                value={code}
                                onChangeText={this.onChangeText}
                                label='Quantity'
                                data={colorCodeData}
                                propsExtractor={({ props }, index) => props}
                            />
                        </View>
                    </View>

                    <Dropdown
                        ref={this.PaymentOptionsRef}
                        value={PaymentOptions}
                        onChangeText={this.onChangeText}
                        label='Payment type'
                        data={PaymentOptionsData}
                    />
                    <View style={{ marginTop: deviceHeight * 30 / 100, }}>
                        <Button text='Proceed' btnStyle={{ backgroundColor: '#4FA7A1' }} />
                    </View>
                </View>

            </View>
        );
    }
}



const styles = {
    screen: {
        flex: 1,
        padding: 4,
        paddingTop: 56,
        backgroundColor: '#E8EAF6',
    },

    container: {
        marginHorizontal: 4,
        marginVertical: 8,
        paddingHorizontal: 8,
    },
};

const typographyData = [
    { value: 'Bonbistro', },
    { value: "Bamzee's", },
    { value: 'Creamy Ice' },
    { value: 'Kabaistan' },

];
const PaymentOptionsData = [
    { value: 'Cash', },
    { value: "Cheque", },
    { value: 'Credit/Debit Card' },

];

const colorNameData = [
    { value: 'Burgers' },
    { value: 'Desi Food' },
    { value: 'Icecreams' },
    { value: 'Shakes' },
];

const colorCodeData = [
    { value: '1', props: { disabled: true } },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
];