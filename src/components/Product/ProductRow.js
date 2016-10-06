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

import global from '../../styles';
import ProductCard from './ProductCard';
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

    this.state = {
      card: 0
    }
  }

  handleScroll(e) {

    if(e.nativeEvent.contentOffset.x/292 % 1 <= 0.2 && this.state.card !== (Math.round(e.nativeEvent.contentOffset.x /292))) {
      this.setState({
        card: (Math.round(e.nativeEvent.contentOffset.x /292))
    })
    }
  }

  render() {
    return (
      <ScrollView>
      <ScrollView
        horizontal={true}
        snapToInterval={320}
        decelerationRate={0}
        snapToAlignment={'center'}
        scrollEventThrottle={200}
        onScroll={(e) => this.handleScroll(e)}
        showsHorizontalScrollIndicator={false}
        style={styles.cardScroll}>
        {this.props.products.map((obj,index) =>
          <View key = {index} style= {styles.view}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{obj.description}</Text>
            </View>
            <ProductCard name={obj.name}/>
          </View>)}
      </ScrollView>
      <ContactFooter card = {this.state.card} info = {this.props.products}/>
      </ScrollView>


    );

  }
}

const styles = StyleSheet.create({
  cardScroll: {
    height: height-100,
    paddingBottom: 20,
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.2
  },
  textContainer: {
    width: 300,
    marginHorizontal: 10
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: 18,
    color: '#A9A9A9',
    flexWrap: 'wrap',
    marginBottom : 30,
    textAlign: 'center'
  },
})