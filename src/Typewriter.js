import React, {Component} from 'react';

import {
  Animated,
  Text,
  View
} from 'react-native';

export default class Typewriter extends Component {

  static defaultProps = {
    msg: "",
    space: 15,
    speed: 1000,
    colour: 'black',
    fadeIn: true,
  };

  constructor(props){
    super(props);
    this.state = {
      animationArray : [],
    }
  }


  startAnim(fadeIn , followingAnim , speed = this.props.speed){
    let toValue = (fadeIn? 1 : 0);
    this.setState({animationArray : []});
    for (let anim of this.anims) {
      this.state.animationArray.push(Animated.timing(anim, {toValue: toValue, duration: speed }));
    }
    this.state.animationArray.push(followingAnim);
    Animated.sequence(this.state.animationArray).start();
  }

  render() {
    this.anims = this.anims || this.props.msg.split(' ').map(() => new Animated.Value(this.props.fadeIn? 0: 1));
    return (
      <Text>
        {this.props.msg.split(' ').map((word, i) => <Animated.Text key={i} style={[this.props.customStyle, {paddingVertical: this.props.space, color:this.props.colour}, {opacity: this.anims[i]}]}>{word + ` `}</Animated.Text>)}
      </Text>
    );
  }

}