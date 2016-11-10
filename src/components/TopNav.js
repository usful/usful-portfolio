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
    Platform,
    TouchableOpacity,
    View
} from 'react-native';

let {width, height} = Dimensions.get('window');
import Colours from '../styles/Colours';
import Font from '../styles/Font';

const styles= StyleSheet.create({
    activeText: {
      color: Colours.white,
      fontFamily: Font.primaryFont.fontFamily,
      fontSize: 20,
      opacity: 1,
      paddingHorizontal: 40
    },
    container: {
      alignItems: 'center',
      backgroundColor: Colours.navBarBlack,
      flexDirection: 'row',
      height: 75,
      left: 0,
      justifyContent: 'center',
      opacity: 0.5,
      paddingVertical: 10,
      position: 'absolute',
      top: 0,
      width: width,
    },
});

const inputRange = [ -1,  0 , 1, 2 ];
//animationProgress is for words and opacity animation of navBar
let animationProgress =  new Animated.Value(0);
let navBarFading = new Animated.Value(1);

export default class TopNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bar : this.props.bar,
      slidingAnim : new Animated.ValueXY({x: 0, y: 0})
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.pageTransition !== nextProps.pageTransition) return true;
    if (this.props.previousIndex !== nextProps.previousIndex) return true;
    if (this.props.index !== nextProps.index) return true;
    if (this.props.hideNavBar !== nextProps.hideNavBar) return true;
    return false;
  }

  componentWillUpdate(nextProps,nextState) {
    animationProgress.setValue(nextProps.pageTransition);
    //navBarFading.setValue(nextProps.hideNavBar ? 0 : 1);
    this.slide(nextProps.hideNavBar? 'up' : 'down');
  }

  goToPage(page) {
    this.props.bar.scrollTo({x: page * width, y: 0, animated: true});
  }

  slide(direction){
    let val = (direction === 'down') ? 0: -75;
    let duration = (direction === 'down')? 100: 100;
      Animated.timing(this.state.slidingAnim, {
        duration: duration,
        toValue: {
          x: 0,
          y: val,
        },
      }).start();
  }

  render() {

    let transform1Android = [{
      translateX: animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [200, 150, 0, -130],
      })
    }];

    let transform1iOS = [{
      translateX: animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [270, 190, 20, -130],
      })
    }];

    let opacity1 = animationProgress.interpolate({
      inputRange: inputRange,
      outputRange: [1, 1, 0.7, 0.7],
    });

    let transform2Android = [{
      translateX: animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [195, 190, 5, -160],
      })
    }];

    let transform2iOS = [{
      translateX: animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [195, 190, 15, -140],
      })
    }];

    let opacity2 = animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [0.5, 0.5, 1, 0.5],
    });

    let transform3 = [{
      translateX: animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [200, 170, 10, -170],
      })
    }];

    let opacity3 = animationProgress.interpolate({
        inputRange: inputRange,
        outputRange: [0.7, 0.7, 0.7, 1],
    });

    return (
      <Animated.View style={[styles.container, {opacity: navBarFading}, {transform: this.state.slidingAnim.getTranslateTransform()}]}>
        <Animated.View style={{transform: transform1iOS, opacity: opacity1}}>
          <TouchableOpacity onPress={() => this.goToPage(0)}><Text style={styles.activeText}>Products</Text></TouchableOpacity>
        </Animated.View>
        <Animated.View style={{transform: transform2iOS, opacity: opacity2}}>
          <TouchableOpacity onPress={() => this.goToPage(1)}><Text style={styles.activeText}>Stories</Text></TouchableOpacity>
        </Animated.View>
        <Animated.View style={{transform: transform3, opacity: opacity3}}>
          <TouchableOpacity onPress={() => this.goToPage(2)}><Text style={styles.activeText}>Initiative</Text></TouchableOpacity>
        </Animated.View>
      </Animated.View>
    );
  }
}