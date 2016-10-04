import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import global from '../styles';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.global.title}>Hello World</Text>
      </View>
    );
  }
}