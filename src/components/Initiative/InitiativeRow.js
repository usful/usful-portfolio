import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ListView,
  Image,
Dimensions
} from 'react-native';

import Carousel from '../Carousel';

export default class InitiativeRow extends Component {

  static defaultProps = {
    initiatives: [{
      name : '',
      description: ''
    }]

  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
      <Carousel text = {true} slides = {this.props.initiatives} />
      </View>
    );
  }
}
