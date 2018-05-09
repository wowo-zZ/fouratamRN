import React, {Component} from 'react';
import {View} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex:1, backgroundColor: 'white'}} />
        <View style={{flex:9, backgroundColor: '#dac5c8'}} />
        <View style={{flex:1, backgroundColor: '#dae5c5'}} />
      </View>
    );
  }
}

export default Header;