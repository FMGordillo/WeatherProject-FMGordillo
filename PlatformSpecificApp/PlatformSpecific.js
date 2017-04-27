import React, { Component } from 'react';
import {
    AppRegistry, 
    Text,
    Switch,
    View,
} from 'react-native';
// import {Switch} from './Components/switch';

const styles = require('./Resources/styles');

class PlatformSpecific extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: false,
        }
    }
    _onValueChange = (value) => {
        this.setState({val: value})
    }

    render() {
        var colorClass = this.state.val ? styles.blueContainer : styles.redContainer;
        return(
            <View style={[styles.container, colorClass]}>
                <Text style={styles.welcome}>
                    Make me blue!
                </Text>
                <Switch onValueChange={(value) => this.setState({val: value})}
                    value={this.state.val}/>
            </View>
        )
    }
}
module.exports = PlatformSpecific;
