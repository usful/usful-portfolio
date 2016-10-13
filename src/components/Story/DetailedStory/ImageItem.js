import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
Dimensions
} from 'react-native';
import global from '../../../styles';

let {width,height} = Dimensions.get('window');

export default class ImageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={global.content}>
        <Image style={style.image} source={this.props.image}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  image: {
    width: width
  }
});