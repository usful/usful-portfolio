import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import global from '../../styles';

export default class BodyItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={global.content}>
        <Text style={this.props.style || style.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  text: {
    fontFamily: 'Avenir-Book',
    fontSize: 15,
    marginHorizontal: 30,
    flexWrap: 'wrap'
  }
});