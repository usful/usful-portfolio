import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Font from '../../styles/Font';
import global from '../../styles';

export default class QuoteItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={global.content}>
        <Text style={style.byline}>{this.props.byline}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  byline: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: Font.primaryFont.fontFamily,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginHorizontal: 40
  }

});