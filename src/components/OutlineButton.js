import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import openLink from '../helpers/navigation/openLink';

export default class OutlineButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
          <TouchableOpacity style={styles.button} onPress={() => openLink(this.props.uri)} >
            <Text style= {styles.buttonText}>{this.props.text}</Text>
          </TouchableOpacity>
    );
  }
}

const styles= StyleSheet.create({

  buttonText: {
    fontFamily: 'Courier New',
    fontSize: 15,
    textAlign: 'center'
  },
  button: {
    borderWidth: 0.5,
    borderColor: '#000',
    width: 125,
    marginHorizontal: 20,
    paddingVertical: 10
  },
});