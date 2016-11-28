import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import Style from '../../styles';

export default class CloseButton extends Component {
  static defaultProps = {
    onPress: (e) => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={(e) => this.props.onPress(e)} style={[Style.sheets.content, style.button]}>
        <Text style={[style.text, {color: this.props.color}]}>CLOSE</Text>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Style.colours.transparent,
    padding: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Style.fonts.primaryFont.fontFamily,
    fontWeight: '500',
    flexWrap: 'wrap',
  }
});