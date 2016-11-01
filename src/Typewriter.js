"use strict";

import React, {Component} from 'react';

import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const SPLIT_ON = '';
const PAUSE_ON = [',', '.'];

const styles = StyleSheet.create({
  wrapper: {
    height: (Platform.OS === 'ios') ? 30 : 35,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default class Typewriter extends Component {
  
  static defaultProps = {
    msg: '',
    split: SPLIT_ON,
    speed: 25,
    colour: 'black',
    fadeIn: true,
    style: {}
  };
  
  constructor(props) {
    super(props);
    
    this.setupAnimations();
  }
  
  setupAnimations() {
    this.anims = this.props.msg.split(this.props.split).map((val) => {
      //Add some randomness into the speed.
      const speed = Math.round(this.props.speed + (Math.random() * this.props.speed * 0.3));
      
      return {
        value: val,
        speed: PAUSE_ON.includes(val) ? speed * 5 : speed,
        anim: new Animated.Value(this.props.fadeIn ? 0 : 1)
      };
    });
  }
  
  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.msg !== this.props.msg) {
      this.setupAnimations();
    }
  }
  
  startAnim(fadeIn, followingAnim) {
    const animations = this.anims.map(obj => Animated.timing(obj.anim, {toValue: fadeIn ? 1 : 0, duration: obj.speed}));
    
    animations.push(followingAnim);
    
    Animated.sequence(animations).start();
  }
  
  render() {
    return (
      <View style={styles.wrapper}>
        {this.anims.map((obj, i) =>
          <Animated.Text key={obj.value + i} style={[this.props.style, {color:this.props.colour, opacity: this.anims[i].anim}]}>
            {obj.value}
          </Animated.Text>
        )}
      </View>
    );
  }
}