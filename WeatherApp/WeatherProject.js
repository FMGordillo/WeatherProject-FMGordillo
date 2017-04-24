import React, {Component}  from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

var Forecast = require('./Forecast');

class WeatherProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: null,
            forecast: "",
            inputText: ""
        }

        this._handleTextChange = this._handleTextChange.bind(this);
    }


  _handleTextChange(event) {
    var country = event.nativeEvent.text;
      fetch('http://api.openweathermap.org/data/2.5/weather?q=' +
        country + '&units=metric&APPID=d0bdc1b066712a8a792a4014101cf837')
        .then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            this.setState({
                forecast: {
                    main: responseJSON.weather[0].main,
                    description: responseJSON.weather[0].description,
                    temp: responseJSON.main.temp,
                }
            });
        })
        .catch((error) => {
            console.warn(error);
        });
  }

  render() {
    return (
    <View style={styles.container}>
        <Image source={require('./Resources/flowers.png')}
            resizeMode='cover'
            style={styles.backdrop}>
            <View style={styles.overlay}>
                <View style={styles.row}>
                    <Text style={styles.mainText}>
                        Current weather for {this.state.zip}
                    </Text>
                    <View>
                        <TextInput
                            style={styles.input}
                            value={this.state.zip}
                            returnKeyType='go'
                            onSubmitEditing={this._handleTextChange}/>
                    </View>
                </View>
                <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}/>
            </View>
        </Image>
    </View>
    );
  }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D4D4D',
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column'
    },
    overlay: {
        paddingTop: 5,
        backgroundColor: '#000000',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 30
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40,
        width: 80,
        textAlign: 'center',
    },
});

module.exports = WeatherProject;