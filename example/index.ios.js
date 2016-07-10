/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Tab = require('./react-native-tab');

class example extends Component {
    constrctor(){
        this.state = {
            index: 0,
        };
        this._handleClick = this._handleClick.bind(this);
    }
    
    _handleClick(idx) {
        this.state.index = idx;
    }
    
    _renderText() {
        let customStyle = [styles.welcome];
        if(this.state.index==1) {
            customStyle.push(styles.weclome2);
        }
        return (
            <Text style={customStyle}>
              Welcome to React Native!
            </Text>
        );
    }
    
    render() {
    return (
      <View style={styles.container}>
        <Tab idx={this.state.index} tabstr="Tab1,Tab2" tabClick={()=>this._handleClick(idx)}></Tab>
        {this._renderText()}
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  weclome2: {
    color: 'red',
  },    
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
