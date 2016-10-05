import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ListView,
  Image
} from 'react-native';

import global from '../../styles';



export default class InitiativeView extends Component {

  static defaultProps = {
    initiatives: [{
      name : '',
      description: ''
    }]

  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={[styles.card]}>
        <Text style= {styles.text}>{this.props.name}</Text>
      </View>

    );

  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: '#A9A9A9',

  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#999',
    borderWidth: 0.3,
    width: 300,
    height: 400,
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
    marginHorizontal: 10,

  }
})