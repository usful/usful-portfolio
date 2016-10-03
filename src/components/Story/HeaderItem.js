import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import styles from '../../styles';

export default class HeaderItem extends Component {
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