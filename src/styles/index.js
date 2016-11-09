import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import Colours from './Colours';
import Fonts from './Font';

let {width, height} = Dimensions.get('window');

//Set the FPS to 30 in dev mode, no need to try to run high frame rates we can't do in iOS simulator
const SCROLL_FPS = Math.round(1000 / __DEV__ ? 30 : 60);

export default class Style {

  static SCROLL_FPS = SCROLL_FPS;
  
  static colours = Colours;
  static fonts = Fonts;
  
  static width = width;
  static height = height;
  
  static sheets = StyleSheet.create({
      container: {
        flex: 1,
        width: width,
        backgroundColor: '#fff'
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
  )
}