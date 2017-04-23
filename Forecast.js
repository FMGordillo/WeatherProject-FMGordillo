import React, {Component}  from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.bigText}>
          Main:{this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp}°C
        </Text>
      </View>
    );
  }
};


var styles = StyleSheet.create({
  bigText: {
    flex: 0,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    // flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})

module.exports = Forecast;