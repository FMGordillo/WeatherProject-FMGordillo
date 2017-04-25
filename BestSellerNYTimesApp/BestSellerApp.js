'use strict';
import React, {Component} from 'react';
import {
    ListView,
    Text,
    View,
} from 'react-native';

const styles = require('./Resources/styles');
const BookItem = require('./Components/BookItem');
const APPID = "40e89f2145844b1bb7de44b5e844bc0f";
var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=" + APPID;

class BestSellerApp extends Component {
    constructor(props){
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    componentDidMount = () => {
        this._refreshData();
    }

    _refreshData = () => {
        fetch(url)
        .then((response) => response.json())
        .then((resJson) => {
            console.log(resJson)
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(resJson.results)
            });
        })
        .catch(console.warn("UN ERROR EN FETCH"))
    }

    _renderRow = (rowData) => {return (
    <BookItem
        title={rowData.title}
        author={rowData.author} />)}

    _renderHeader = () => {return (
    <View style={styles.sectionDivider}>
        <Text>
            Bestsellers in Hardcover Fiction
        </Text>
    </View> )}

    _renderFooter = () => {return(
    <View style={styles.sectionDivider}>
        <Text>
            Data from the NYTimes Best Seller list.
        </Text>
    </View> )}

    render() {
        return(
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        renderFooter={this._renderFooter}
        enableEmptySections={true}
         />
        )
    }
}

module.exports = BestSellerApp;