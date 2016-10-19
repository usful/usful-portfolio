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
import InitiativeCard from './InitiativeCard';
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


  }

  render() {
    return (

      <ScrollView
        horizontal={true}
        snapToInterval={320}
        decelerationRate={0}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        style={styles.cardScroll}>
        {this.props.initiatives.map((obj,index) =>
          <View key = {index} style= {styles.view}>
            <View style={styles.textContainer}>
            <Text style={styles.text}>{obj.description}</Text>
            </View>
            <InitiativeCard id={obj._id} name={obj.name}/>
          </View>)}
      </ScrollView>


    );

  }
}

const styles = StyleSheet.create({
  cardScroll: {
    marginBottom: 20
  },
  textContainer: {
    width: 300,
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