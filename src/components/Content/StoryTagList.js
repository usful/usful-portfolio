import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Font from '../../styles/Font';

export default class TagList extends Component {
  static defaultProps = {
    tags: []
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.list}>
        {this.props.tags.map((name, index) => <Text key={index} style={style.tag}>{name} | </Text>)}
      </View>
    )
  }
}

const style = StyleSheet.create({
  tag: {
    fontFamily: Font.primaryFont.fontFamily,
    color: '#B4B4B4',
    fontSize: 10
  },
  list: {
    flexDirection: 'row',
    marginTop: 10
  }
});