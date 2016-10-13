'use strict';

import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 200,
    width: 200
  }
});


import Navigation from '../../helpers/Navigation';

export default class SplashScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      animated: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.animated,
      {toValue: 1, duration: 1000}
    ).start();

    setTimeout(() => Navigation.push(Navigation.INTRODUCTION_SCENE), 3000);
  }

  render() {
    return (
      <View style={styles.container}>

        <Animated.Image
          style={[styles.icon, {opacity: this.state.animated}]}
          source={require('../../../assets/Portfolioicon.png')}/>

      </View>
    );
  }

}