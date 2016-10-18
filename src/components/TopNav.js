/**
 * Created by mercedes on 2016-09-28.
 */

import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Dimensions,
    Animated,
    Text,
    ListView,
    Easing,
    TouchableOpacity,
    TouchableHighlight,
    View
} from 'react-native';

let {width, height} = Dimensions.get('window');

const styles= StyleSheet.create({

    activeText: {
      fontSize: 20,
      opacity: 1,
      color: '#ffffff',
      fontFamily: 'Courier New'
    },
    container: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        paddingVertical: 10,
        width: width ,
        height: 75,
        backgroundColor: 'black',
        opacity: 0.5

    },
    menuItem: {
      paddingHorizontal: 0,

    },
    navBarTitle: {
      paddingHorizontal: 40
    },
    text: {
        opacity: 0.5,
        color: '#ffffff',
    },

});

const inputRange = [ -1,  0 , 1, 2 ];
//animationProgress is for words and opacity animation of navBar
let animationProgress =  new Animated.Value(0);
let navBarFading = new Animated.Value(1);

export default class TopNav extends Component {

  constructor(props) {
    super(props);
  }

  getTextStyle(page) {
    return styles.activeText;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.pageTransition !== nextProps.pageTransition) return true;
    if (this.props.previousIndex !== nextProps.previousIndex) return true;
    if (this.props.index !== nextProps.index) return true;
    if (this.props.hideNavBar !== nextProps.hideNavBar) return true;
    return true;
  }

  componentWillReceiveProps(nextProps) {
    animationProgress.setValue(nextProps.pageTransition);
    navBarFading.setValue(nextProps.hideNavBar ? 0 : 1);
  }

  render() {
    let transform1 = [{
      translateX: animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [270, 190, 20, -130],
      });

    let opacity1 = animationProgress.interpolate({
      inputRange: inputRange,
      outputRange: [1, 1, 0.7, 0.7],
    });

    let transform2 = [{
      translateX: animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [195, 190, 15, -140],
      });

      let opacity2 = animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [0.5, 0.5, 1, 0.5],
      });

    let transform3 = [{
      translateX: animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [200, 170, 10, -170],
      });

      let opacity3 = animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [0.7, 0.7, 0.7, 1],
      });

    return (
      <Animated.View style={[styles.container, {opacity: navBarFading}]}>
        <Animated.View style={{transform: transform1, opacity: opacity1}}>
          <Text style={[this.getTextStyle(1),styles.navBarTitle]}>Products</Text>
        </Animated.View>
        <Animated.View style={{transform: transform2, opacity: opacity2}}>
          <Text style={[this.getTextStyle(1),styles.navBarTitle]}>Stories</Text>
        </Animated.View>
        <Animated.View style={{transform: transform3, opacity: opacity3}}>
          <Text style={[this.getTextStyle(1),styles.navBarTitle]}>Initiatives</Text>
        </Animated.View>
      </Animated.View>
    );
  }
}