import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

const styles = require('../Resources/styles');

class BookItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.bookItem}>
                <View style={styles.info}>
                    <Text style={styles.author}>{this.props.author}</Text>
                    <Text style={styles.title}> {this.props.title}</Text>
                </View>
                
                
            </View>
        )
    }
    
}

module.exports = BookItem;