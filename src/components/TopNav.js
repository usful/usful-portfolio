/**
 * Created by mercedes on 2016-09-28.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
  Text,
  Easing,
  View
} from 'react-native';

let {width, height} = Dimensions.get('window');

const styles= StyleSheet.create({
  activeText: {
    opacity: 1,
    color: '#ffffff'

  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    paddingTop: 20,
    width: width ,
    height:45,
    backgroundColor: '#44c7ff',
    opacity: 0.5

  },
  menuItem: {
    paddingHorizontal: 0,

  },
  text: {
    opacity: 0.5,
    color: '#ffffff',

  },

});

export default class TopNav extends Component {

  static defaultProps = {
    page: 0,
    offset: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      tabAnim: new Animated.Value(1),
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.tabAnim,
      {
        toValue: 1,
        duration: 2000,
      },
    ).start();
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.page !== this.props.page) {
      Animated.timing(
        this.state.tabAnim,
        {
          toValue: nextProps.page,
          duration: 350,
          easing: Easing.linear
        }
      ).start();
    }

    return true;
  }

  render() {
    let opacity1 = this.state.tabAnim.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0.8, 0.8, 1]
    });

    let scale1 = this.state.tabAnim.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1.5, 1, 1]
    });

    let translateX1 = this.state.tabAnim.interpolate({
      inputRange: [0, 2],
      outputRange: [65, -180]
    });

    let scale2 = this.state.tabAnim.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 1.5, 1]
    });

    let translateX2 = this.state.tabAnim.interpolate({
      inputRange: [0, 2],
      outputRange: [120, -120]
    });

    let scale3 = this.state.tabAnim.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 1, 1.5]
    });

    let translateX3 = this.state.tabAnim.interpolate({
      inputRange: [0, 2],
      outputRange: [200, -65],
    });

    return (
      <View style={styles.container}>

        <Animated.View
          style={[styles.menuItem, {opacity: opacity1, transform: [{scale: scale1}, {translateX: translateX1}]}]}>
          <Text style={styles.activeText}>Products</Text>
        </Animated.View>

        <Animated.View
          style={[styles.menuItem, {opacity: opacity1, transform: [{scale: scale2}, {translateX: translateX2}]}]}>
          <Text style={[styles.activeText, {paddingHorizontal: 40}]}>Stories</Text>
        </Animated.View>

        <Animated.View
          style={[styles.menuItem, {opacity: opacity1, transform: [{scale: scale3}, {translateX: translateX3}]}]}>
          <Text style={styles.activeText}>Initiatives</Text>
        </Animated.View>

      </View>
    );
  }
}