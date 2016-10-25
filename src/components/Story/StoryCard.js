'use strict';

import React, { Component } from 'react';

import {
  Animated,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

let {height, width} = Dimensions.get('window');

const CARD_HEIGHT = 350;
const MAX_OFFSET = 0.75;
const CARD_ENTRY = 1000;

let styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: CARD_HEIGHT,
    justifyContent: 'center',
    marginBottom: 10,
    overflow: 'hidden',
    paddingHorizontal: 50,
  },
  linearGradient: {
    height: CARD_HEIGHT,
    left: 0,
    position: 'absolute',
    top: 0,
    width: width,
  },
  textContainer: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  name: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontFamily: 'Courier New',
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 34,
    textAlign: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontFamily: 'Courier New',
    lineHeight: 22,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  }
});

export default class StoryCard extends Component {
  static CARD_HEIGHT = CARD_HEIGHT;
  static MAX_OFFSET = MAX_OFFSET;
  static CARD_ENTRY = CARD_ENTRY;

  static defaultProps = {
    content: {},
    onPress: (content) => {},
    /** A percentage to parallax scroll the background image by*/
    offset: 0,
    entrySpeed: CARD_ENTRY
  };

  constructor(props) {
    super(props);

    this.state = {
      offset: new Animated.Value(0),
      opacity: new Animated.Value(0)
    };

    this.hasEntered = false;
  }

  /**
   * This will trigger this component to animate its entry into a scene. IE. Fade in.
   */
  animateEntry() {
    if (this.hasEntered) {
      return;
    }

    Animated
      .timing(this.state.opacity, {toValue: 1, duration: CARD_ENTRY})
      .start(() => {
        console.log('Opacity animation is done');
      })
    ;

    this.hasEntered = true;
  }

  componentWillReceiveProps(nextProps) {
    this.state.offset.setValue(nextProps.offset * CARD_HEIGHT);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) return true;

    return false;
  }


  render() {
    let story = this.props.content;

    let offsetStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      height: CARD_HEIGHT * (1 + MAX_OFFSET),
      width: width,
      transform: [{translateY: this.state.offset}]
    };

    let viewStyle = {
      opacity: this.state.opacity,
    };

    return (
      <TouchableOpacity onPress={(e) => this.props.onPress(story)}>

        <Animated.View style={[styles.container, viewStyle]}>
          <Animated.Image style={offsetStyle} source={story.hero.uri} resizeMode="cover"/>
          <LinearGradient colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.5)']} style={styles.linearGradient}/>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{story.name.toUpperCase()}</Text>
            <Text style={styles.title}>{story.title}</Text>
          </View>
        </Animated.View>

      </TouchableOpacity>
    );
  }
}

