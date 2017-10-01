/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Root from './src/redux/root'
import Home from './src/redux/components/HomeScreen';
import StrackNav from './src/router/MyStrackNav'

export default class MySimpleApp extends Component {
    render() {
        return (
            <Root/>
        );
    }
}
/*
* react-native-image-crop-picker插件要配置
*
* */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('MySimpleApp', () => MySimpleApp);
