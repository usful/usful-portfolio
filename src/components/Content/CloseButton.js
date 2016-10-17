import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import global from '../../styles';

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
    backgroundColor: 'transparent',
    padding: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    color: '#000',
    flexWrap: 'wrap',
  }
});