import React, { Component } from 'react';
import Navigation from '../../helpers/Navigation';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  ListView,
  Image
} from 'react-native';

import global from '../../styles';



export default class ProductCard extends Component {

  static defaultProps = {
    products: [{
      name : '',
    }]

  };

  constructor(props) {
    super(props);

  }
  openProducts() {

    Navigation.push({id: Navigation.DETAILED_PRODUCT_SCENE.id, productId: this.props.id});

  }

  render() {
    return (
      <TouchableOpacity
      onPress={() => this.openProducts()} >
      <View style={[styles.card]}>
        <Text style= {styles.text}>{this.props.name}</Text>
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
})