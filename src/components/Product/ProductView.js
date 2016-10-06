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

import ProductRow from './ProductRow';
import ContactFooter from '../ContactFooter';

let {width,height} = Dimensions.get('window');

export default class ProductView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView >
        <View style={styles.container}>
          <ProductRow products = {this.props.products}/>
        </View>
      </ScrollView>

    );

  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#000'
  },
  container: {
    paddingTop: 100,

  }
})