import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import global from '../../styles';

export default class TeamCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={global.title}>Hello World</Text>
      </View>

    );

  }
}