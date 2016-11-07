import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import global from '../../styles';

import ImageSlider from 'react-native-image-slider';

export default class SliderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style = {styles.container}>
        <ImageSlider images={this.props.images} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30
  }

});