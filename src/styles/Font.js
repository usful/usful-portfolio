import React, { Component } from 'react';

import {
  Platform
} from 'react-native';

export default {
  primaryFont: {
    fontFamily: (Platform.OS === 'ios') ? 'Courier New' : 'Courier-New',
  },
  secondaryFont: {
    fontFamily: 'Avenir-Book'
  },
  bold: {
    fontWeight: 'bold'
  },
  italics: {
    fontStyle: 'italic'
  },
  tags: {
    fontFamily: (Platform.OS === 'ios') ? 'Courier New' : 'Courier-New'
  }
}