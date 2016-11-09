import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions
} from 'react-native';

import Style from '../../styles';

export default class ImageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Style.sheets.content}>
        <Image style={this.props.style === 'round' ? style.roundImage : style.image} source={this.props.image}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  image: {
    width: Style.width,
    height: 200
  },
  roundImage: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 0.4,
    borderColor: 'transparent'
  },
  
});