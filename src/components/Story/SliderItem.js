import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../../styles';

import ImageSlider from 'react-native-image-slider';

export default class SliderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.content}>
        <ImageSlider images={this.props.images} />
      </View>

    );

  }
}