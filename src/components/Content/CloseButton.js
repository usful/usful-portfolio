import React, { Component } from 'react';
import Navigation from '../../helpers/Navigation';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import global from '../../styles';

export default class CloseButton extends Component {
  constructor(props) {
    super(props);
  }

  popBack() {
    Navigation.popToRoute(Navigation.MAIN_SCENE);
  }

  render() {
    return (
      <TouchableOpacity onPress = {() => this.popBack()} style={[global.content, style.button]}>
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