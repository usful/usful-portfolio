"use strict";

import React, {Component} from 'react';

import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

const SPLIT_ON = '';
const PAUSE_ON = [',', '.'];

const styles = StyleSheet.create({
  wrapper: {
    flexDirection:'row',
    flexWrap : 'wrap'
  }
})

export default class Typewriter extends Component {

  
  static defaultProps = {
    space: 12,
    height: 30,
    msg: '',
    split: SPLIT_ON,
    speed: 20,
    colour: 'black',
    fadeIn: true,
    style: {},
    onFinished: () => {}
  };
  
  constructor(props) {
    super(props);
    
    this._isSkipped = false;
    this.setupAnimations();
  }
  
  setupAnimations() {
    this.anims = this.props.msg.split(this.props.split).map((val) => {
      //Add some randomness into the speed.
      const speed = Math.round(this.props.speed + (Math.random() * this.props.speed));
      
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
  
  start(fadeIn) {
    const animations = this.anims.map(obj => Animated.timing(obj.anim, {toValue: fadeIn ? 1 : 0, duration: obj.speed}));
    this._sequence = Animated.sequence(animations);
    this._sequence.start(() => this.props.onFinished());
  }
  
  render() {
    return (
      <View style={styles.wrapper}>
        {this.anims.map((obj, i) =>
          <Animated.Text key={obj.value + i}
                         style={[this.props.style, { height: this.props.height, width: this.props.space ,color:this.props.colour, opacity: this.anims[i].anim}]}>
            {obj.value}
          </Animated.Text>
        )}
      </View>
    );
  }
}