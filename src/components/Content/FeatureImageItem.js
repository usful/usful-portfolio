import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import global from '../../styles';

export default class FeatureImageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={global.content}>
        <Image style={style.roundImage} source={this.props.image}></Image>
        <Text style={style.byline}>{this.props.byline}</Text>
        <Text style={style.author}>{this.props.author}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  roundImage: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 0.4,
    borderColor: 'transparent'
  },
  byline: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 27,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginHorizontal: 40
  },
  author: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'Avenir-Oblique',

  }
});