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

export default class ProductRow extends Component {
  
  static defaultProps = {
    products: [{
      name: '',
      description: ''
    }]
    
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View>
        <Carousel
          text={'Usful products are inspired by our guiding initiatives. They are developed by our team to have purpose and impact.'}
          slides={this.props.products}/>
      </View>
    );
    
  }
}