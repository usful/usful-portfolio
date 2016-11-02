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
  tags: {
    fontFamily: 'Courier-New-PS-Italic'
  }
}