import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

export default StyleSheet.create({

  container: {
    flex: 1,
    width: width
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItem: 'center',
    justifyContent: 'center',
    marginBottom: 30
  }
});