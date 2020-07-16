import * as React  from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View,AppRegistry } from 'react-native';
import { WebView } from 'react-native-webview';
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class ActivityIndicatorDemo extends Component {
    render() {
        return (
                <WebView
                    source = {{ uri:'https://ln1.hispindia.org/demo' }}
                    />
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('App', () => ActivityIndicatorDemo);


