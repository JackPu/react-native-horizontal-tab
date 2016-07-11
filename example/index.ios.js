/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var Css = require('./css');
var Tab = require('react-native-horizontal-tab');

let cutemars = require('./images/mars_200.png');
let cutecomputers = require('./images/cute-emoji-computer_200.png');
class example extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            idx: 0,
        };
        this._handleClick = this._handleClick.bind(this);
    }
    
    _handleClick(idx) {
        this.setState({
            idx:idx
        });
    }
    
    _renderText() {
        let customStyle = [Css.welcome];
        let imageSrc = cutemars;
        if(this.state.idx==1) {
            customStyle.push(Css.weclome2);
            imageSrc = cutecomputers;
        }
        return (
            <View style={{alignItems:'center'}}>
                <Image source={imageSrc} style={Css.thumb} />
                <Text style={customStyle}>
                  This is Tab {this.state.idx + 1}
                </Text>
            </View>
        );
    }
    
    render() {
        return (
          <View style={Css.container}>
            <View style={Css.navbar}>
                <Text style={Css.navbarText}>react-native-horizontal-tab</Text>
            </View>
            <View style={Css.main}>
                <Tab idx={this.state.idx} tabstr="Tab1,Tab2" tabClick={(idx)=>this._handleClick(idx)}></Tab>
            {this._renderText()}
            </View>
            
          </View>
        );
  }
}



AppRegistry.registerComponent('example', () => example);
