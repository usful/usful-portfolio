import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import styles from '../../styles';

export default class BodyItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.global.content}>
        <Text style={style.text}>Hello World</Text>
      </View>

    );

  }
}

const style = StyleSheet.create({

  text: {
    fontFamily: 'Avenir',
    fontSize: 15,
    marginHorizontal: 30,
    flexWrap: 'wrap'
  }
});