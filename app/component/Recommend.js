import React, {Component} from 'react';
import {View} from 'react-native';

class Recommend extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 3, backgroundColor: 'white'}}/>
        <View style={{flex: 9, backgroundColor: '#dac5c8', flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: '#da2293'}}></View>
          <View style={{flex: 1, backgroundColor: '#f23123'}}></View>
        </View>
      </View>
    );
  }
}

export default Recommend;