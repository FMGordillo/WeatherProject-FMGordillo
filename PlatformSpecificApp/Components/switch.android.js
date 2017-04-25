import React, {Component} from 'react';
import {SwitchAndroid} from 'react-native';

const styles = require('../Resources/styles');

class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        }
    }

    _onValueChange = (value) => {
        this.setState({value: value});
        if(this.props.onValueChange) {
            this.props.onValueChange(value);
        }
    }

    render() {
        return(
            <SwitchAndroid 
                onValueChange={this._onValueChange}
                value={this.state.value}/>
        )
    }
}

module.exports = Switch;