'use strict';

import React, { Component } from 'react';
import Navigation from '../../helpers/Navigation';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class ProductCard extends Component {

  static defaultProps = {
    content: {},

  };

  constructor(props) {
    super(props);
  }

  onContentPressed(content){
    Navigation.goContent(content)
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.onContentPressed(this.props.content)}>
        <View style={[styles.card]}>
          <Text style={styles.text}>{this.props.content.name}</Text>
        </View>
      </TouchableOpacity>
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
});