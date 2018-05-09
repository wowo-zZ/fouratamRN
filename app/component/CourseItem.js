import React, {Component} from 'react';
import {View} from 'react-native';

class CourseItem extends Component {
  render() {
    console.log(this.props.info);
    return (
      <View style={{width:375, height: 140, flexDirection: 'row'}}>
        <View style={{flex:3, backgroundColor:'white'}} />
        <View style={{flex:6, backgroundColor:'pink'}} />
      </View>
    );
  }
}

export default CourseItem;