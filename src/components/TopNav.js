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
    TouchableHighlight,
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
      <Animated.View style={[styles.container, {opacity: navBarFading}]}>
        <Animated.View style={{transform: transform1iOS, opacity: opacity1}}>
          <Text style={styles.activeText}>Products</Text>
        </Animated.View>
        <Animated.View style={{transform: transform2iOS, opacity: opacity2}}>
          <Text style={styles.activeText}>Stories</Text>
        </Animated.View>
        <Animated.View style={{transform: transform3, opacity: opacity3}}>
          <Text style={styles.activeText}>Initiatives</Text>
        </Animated.View>
      </Animated.View>
    );
  }
}