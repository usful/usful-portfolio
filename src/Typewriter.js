import React, {Component} from 'react';

import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


const styles = StyleSheet.create({
  wrapper: {
    height: Platform.OS === 'ios'? 30 : 35,
    flexDirection:'row',
    flexWrap : 'wrap'
  }
})
export default class Typewriter extends Component {

  static defaultProps = {
    msg: '',
    space: 15,
    speed: 1000,
    colour: 'black',
    fadeIn: true,
    style: {}
  };

  constructor(props){
    super(props);
    this.setupAnimations();
  }

  setupAnimations() {
    this.anims = this.props.msg.split(' ').map(() => new Animated.Value(this.props.fadeIn ? 0: 1));
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.msg !== this.props.msg) {
      this.setupAnimations();
    }
  }

  startAnim(fadeIn, followingAnim, speed = this.props.speed) {
    const animations = this.anims.map(anim => Animated.timing(anim, {toValue: fadeIn ? 1 : 0, duration: speed}));
    animations.push(followingAnim);
    Animated.sequence(animations).start();
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.props.msg.split(' ').map((word, i) =>
          <Animated.Text key={i} style={[this.props.style, { color:this.props.colour, opacity: this.anims[i]}]}>
            {`${word} `}
          </Animated.Text>
        )}
      </View>
    );
  }

}