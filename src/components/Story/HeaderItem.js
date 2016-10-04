import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
Image
} from 'react-native';

import global from '../../styles';

let {width,height} = Dimensions.get('window');

export default class HeaderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={global.content}>
        <Image style = {style.image} source={this.props.image}/>
        <Text style={style.date}>{this.props.date}</Text>
      </View>

    );

  }
}

const style = StyleSheet.create({

  date: {
    alignSelf: 'flex-end',
    fontSize: 10,
    color: '#B4B4B4',
    marginTop: 10,
    marginRight: 10

  },
  image: {
    width: width,
    height: 200,
  }

})