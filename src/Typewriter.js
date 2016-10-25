import React, {Component} from 'react';

import {
  Animated,
  Text,
  View
} from 'react-native';

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

    this.state = {
      animationArray : [],
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.msg !== this.props.msg) {
      this.anims = this.anims || this.props.msg.split(' ').map(() => new Animated.Value(this.props.fadeIn? 0: 1));
    }
  }

  startAnim(fadeIn, followingAnim, speed = this.props.speed) {

    const animationArray = this.anims.map(anim => Animated.timing(anim, {toValue: fadeIn ? 1 : 0, duration: speed}));
    animationArray.push(followingAnim);

    Animated.sequence(animationArray).start();

    this.setState({animationArray: animationArray});
  }

  render() {
    const animatedStyle = [
      this.props.style,
      {
        paddingVertical: this.props.space,
        color:this.props.colour,
        opacity: this.anims[i]
      }
    ];

    return (
      <Text>
        {this.props.msg.split(' ').map(word =>
          <Animated.Text key={word} style={animatedStyle}>{`${word} `}</Animated.Text>
        )}
      </Text>
    );
  }

}