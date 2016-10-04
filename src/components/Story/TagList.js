import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import global from '../../styles';

export default class TagList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.list}>
        {this.props.tags.map(function (name, index) {
            return (
              <Text key={index} style={style.tag}>{name} | </Text>
            )
          }
        )
        }
      </View>
    )
  }
}

const style = StyleSheet.create({
  tag: {
    fontFamily: 'Courier New',
    color: '#B4B4B4',
    fontSize: 10
  },
  list: {
    flexDirection: 'row',
    marginTop: 10
  }
})