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

    this.state = {
      card: 0
    }

  }

  handleScroll(e) {
    if(e.nativeEvent.contentOffset.x/250 % 1 <= 0.2 && this.state.card !== (Math.round(e.nativeEvent.contentOffset.x /292))) {
      this.setState({
        card: (Math.round(e.nativeEvent.contentOffset.x /292))

      })
    }
  }

  render() {
    return (

      <ScrollView
        horizontal={true}
        snapToInterval={width}
        decelerationRate={0}
        snapToAlignment={'center'}
        onScroll={(e) => this.handleScroll(e)}
        scrollEventThrottle={300}
        showsHorizontalScrollIndicator={false}
        style={styles.cardScroll}>
        {this.props.initiatives.map((obj,index) =>
          <View key = {index} style= {styles.view}>
            <View style={styles.textContainer}>
            <Text style={styles.text}>{obj.description}</Text>
            </View>
            <InitiativeCard content={obj}/>
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
    alignSelf: 'center',
    width: width-40,
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