import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';

import Font from '../../styles/Font';
import global from '../../styles';

let {width,height} = Dimensions.get('window');

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
    width: width,
    fontFamily: Font.secondaryFont.fontFamily,
    fontSize: 15,
    paddingHorizontal: 30,
    flexWrap: 'wrap'
  }
});