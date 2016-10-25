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
import global from '../../styles';
let {width, height} = Dimensions.get('window');
import ContactFooter from '../ContactFooter';

export default class ProductRow extends Component {

  static defaultProps = {
    products: [{
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
      <Carousel text = {true} slides = {this.props.products} />
      </View>
    );

  }
}