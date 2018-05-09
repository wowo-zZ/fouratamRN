import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

class CourseItem extends Component {

  render() {
    console.log(this.props.info);
    return (
      <View style={{width: 375, height: 140, flexDirection: 'row'}}>
        <View style={{flex: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'flex-end'}}>
          <Image source={require('../resource/course.jpg')} style={{width: 120, height: 100}}/>
        </View>
        <View style={{flex: 6, backgroundColor: 'white', justifyContent: 'center'}}>
          <View style={{width: 240, height: 100, backgroundColor: '#ece4e4'}}>
            <View style={{flex: 3, backgroundColor: '#ABCDEF'}}>
              <Text style={styles.baseText} >{this.props.info.title}</Text>
            </View>
            <View style={{flex: 3, backgroundColor: '#CCCCCC'}}>
              <Text style={styles.baseText} >{this.props.info.title}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default CourseItem;