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
let {width, height} = Dimensions.get('window');


export default class InitiativeRow extends Component {

  static defaultProps = {
    initiatives: [{
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
      this.setState({
        card: (Math.round(e.nativeEvent.contentOffset.x / 375))
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.card != this.state.card
    )
  }



  render() {

    return (
      <View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.initiatives[this.state.card].description}</Text>
        </View>
      <Carousel slides = {this.props.initiatives} />
      </View>
    );

  }
}

const styles = StyleSheet.create({

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: width-40,
    height: 136,
    marginHorizontal: 10
  },
  text: {
    fontFamily: 'Avenir-Book',
    fontSize: 18,
    color: '#A9A9A9',
    flexWrap: 'wrap',
    marginBottom : 30,
    textAlign: 'center'
  },

})