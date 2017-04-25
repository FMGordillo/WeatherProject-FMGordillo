import React, { Component } from 'react';
import {
    AppRegistry, 
    Text,
    View,
} from 'react-native';

const Switch = require('./Components/switch');
const styles = require('./Resources/styles');
// var switchComp = <Switch onValueChange={(val) => {console.log(val); }}/>;

class PlatformSpecific extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: false,
        }
    }
    _onValueChange = (val) => {
        this.setState({val: val})
    }

    render() {
        var colorClass = this.state.val ? styles.blueContainer : styles.redContainer;
        return(
            <View style={[styles.container, colorClass]}>
                <Text style={styles.welcome}>
                    Make me blue!
                </Text>
                <Switch onValueChange={this._onValueChange} />
            </View>
        )
    }
}
module.exports = PlatformSpecific;
