import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import global from '../../../styles';

export default class BodyItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={global.content}>
        <Text style={style.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  text: {
    fontFamily: 'Avenir',
    fontSize: 12,
    marginHorizontal: 30,
    flexWrap: 'wrap'
  }
});