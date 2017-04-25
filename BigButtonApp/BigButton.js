'use strict';
import React, {Component} from 'react';
import {
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

const styles = require('./Resources/styles');

class BigButtonApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressing: false
        };
    }

    _onPressIn = () => {
        this.setState({pressing: true})
    }

    _onPressOut = () => {
        this.setState({pressing: false})
    }

    render() {
        return (
        <View style={styles.container}>
            <TouchableHighlight
            onPressIn={this._onPressIn}
            onPressOut={this._onPressOut}
            style={styles.touchable}>
            <View style={styles.button}>
                <Text style={styles.welcome}>
                    {this.state.pressing ? "EEK!" : "PRESS ME!"}
                </Text>
            </View>
            </TouchableHighlight>
        </View>
        );
    }
}

module.exports = BigButtonApp;