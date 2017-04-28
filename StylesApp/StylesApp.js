import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class StylesApp extends Component {

    render() {
        return(
            <View style={styles.parent}>
                <Text style={styles.child}> Child one </Text>
                <Text style={styles.child}> Child two </Text>
                <Text style={styles.child}> Child three </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: "#F5FCFF",
        borderColor: "#0099AA",
        borderWidth: 5,
        marginTop: 30
    },
    child: {
        borderColor: "#AA0099",
        borderWidth: 5,
        textAlign: "center",
        fontSize: 24,
    }
});

module.exports = StylesApp;