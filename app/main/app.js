import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Header from '../component/Header';
import Recommend from '../component/Recommend';
import CourseList from '../component/CourseList';

class App extends Component {

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 1.5, backgroundColor: 'skyblue'}}>
          <Header/>
        </View>
        <View style={{flex: 5.5, backgroundColor: 'steelblue'}}/>
        <View style={{flex: 7, backgroundColor: 'yellow'}}>
          <Recommend />
        </View>
        <View style={{flex: 12, backgroundColor: 'white'}}>
          <CourseList />
        </View>
        <View style={{flex: 2, backgroundColor: '#125721'}}/>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;