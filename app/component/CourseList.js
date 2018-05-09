import React, {Component} from 'react';
import {View, FlatList} from 'react-native';

import CourseItem from './CourseItem';

class CourseList extends Component {

  componentWillMount() {
    this.setState(
      {
        courseList: [
          {
            key: 1,
            title: '语音转写入门精讲',
            hardness: '中级',
            studying_num: 1222,
            price: 0
          },
          {
            key: 2,
            title: '语音听写入门精讲',
            hardness: '低级',
            studying_num: 1242,
            price: 0
          },
          {
            key: 3,
            title: '语音识别入门精讲',
            hardness: '中级',
            studying_num: 1233,
            price: 0
          },
        ]
      }
    );
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <FlatList
          data={this.state.courseList}
          renderItem={({item}) => <CourseItem info={item}/>}
        />
      </View>
    );
  }
}

export default CourseList;
