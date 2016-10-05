import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

export default StyleSheet.create({

    container: {
      flex: 1,
      width: width
    },
    content: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 30,
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    tagsContainer: {
      flexDirection: 'row',
    },
    tagContainer: {
      padding: 5,
      backgroundColor: '#eee',
      borderRadius: 5,
      margin: 2,
    },
    tagRemoveButton: {
      position: 'absolute',
      top: 3,
      right: 3,
      padding: 3,
    },
    tagRemoveButtonText: {
      color: '#999',
      fontSize: 12
    }

  }
);