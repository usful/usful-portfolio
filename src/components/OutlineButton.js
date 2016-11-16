import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Style from '../styles';
import openLink from '../helpers/navigation/openLink';

export default class OutlineButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
          <TouchableOpacity style={[{height: this.props.height || undefined}, styles.button]} onPress={() => openLink(this.props.uri)} >
            <Text style= {styles.buttonText}>{this.props.text}</Text>
          </TouchableOpacity>
    );
  }
}

const styles= StyleSheet.create({

  buttonText: {
    fontFamily: Style.fonts.primaryFont.fontFamily,
    fontSize: 15,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    width: 125,
    marginHorizontal: 20,
    paddingVertical: 10
  },
});