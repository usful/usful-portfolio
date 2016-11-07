import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import global from '../../styles';
import Font from '../../styles/Font';
import Colours from '../../styles/Colours';


export default class CloseButton extends Component {
  static defaultProps = {
    onPress: (e) => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={(e) => this.props.onPress(e)} style={[global.content, style.button]}>
        <Text style={style.text}>CLOSE</Text>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colours.transparent,
    padding: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Font.primaryFont.fontFamily,
    fontWeight: '500',
    color: Colours.navBarBlack,
    flexWrap: 'wrap',
  }
});