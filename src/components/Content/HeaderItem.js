import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image
} from 'react-native';

import Style from '../../styles';

export default class HeaderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Style.sheets.content}>
        <Image style={style.image} source={this.props.image}/>
        {this.props.type === 'Story' ? <Text style={style.date}>{this.props.date}</Text> : undefined}
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
    width: Style.width,
    height: 200,
  }
});