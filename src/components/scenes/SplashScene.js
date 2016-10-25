'use strict';

import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: height,
    justifyContent: 'center',
    width: width,
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
      animated: new Animated.Value(0),
      bgAnim : new Animated.Value(0)
    };
  }

  componentDidMount() {
    let animationArray = [];
    animationArray.push(Animated.timing(this.state.animated, {toValue: 1, duration: 2000}));
    animationArray.push(Animated.timing(this.state.animated, {toValue: 0, duration: 2000}));

    //ICON
    Animated.sequence([
      Animated.timing(this.state.animated, {toValue: 1, duration: 1000}),
      Animated.timing(this.state.animated, {toValue: 0, duration: 1000}),
      Animated.timing(this.state.animated, {toValue: 1, duration: 1000}),
      Animated.timing(this.state.animated, {toValue: 0, duration: 1000}),
      Animated.timing(this.state.animated, {toValue: 1, duration: 1000}),
      Animated.timing(this.state.animated, {toValue: 0, duration: 1000}),
    ]).start();

    //BG
    Animated.timing(this.state.bgAnim, {toValue: 1, duration: 4000}).start();
    setTimeout(() => Navigation.push(Navigation.INTRODUCTION_SCENE), 4000);
  }

  render() {
    return (
      <Animated.Image style={[styles.container,{opacity: this.state.bgAnim}]} source={require('../../../assets/Background.png')}>
        <Animated.Image
          style={[styles.icon, {opacity: this.state.animated}]}
          source={require('../../../assets/Portfolioicon.png')}/>
      </Animated.Image>
    );
  }

}