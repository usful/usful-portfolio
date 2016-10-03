import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import styles from '../../styles';

export default class DetailedStoryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style ={styles.global.container}>
          <HeaderItem image='' date=''/>
          <TitleItem title='' />
          <BodyItem text=''/>
          <FeatureImageItem image='' byline='' author=''/>
          <BodyItem text=''/>
          <SliderItem images=''/>
          <BodyItem text=''/>
          <ImageItem image=''/>
          <BodyItem text=''/>
          <NextStoryButton title='' image=''/>
      </View>

    );

  }
}