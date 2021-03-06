'use strict';

import React, { Component } from 'react';

import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeMethodsMixin
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Style from '../../styles';
import Colours from '../../styles/Colours';
let {height, width} = Dimensions.get('window');

const CARD_HEIGHT = 350;
const MAX_OFFSET = 0.75;
const CARD_ENTRY = 3000;

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
    backgroundColor: Colours.transparent,
    flex: 1,
  },
  name: {
    backgroundColor: Colours.transparent,
    color: Colours.white,
    fontFamily: Style.fonts.primaryFont.fontFamily,
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 34,
    textAlign: 'center',
  },
  title: {
    backgroundColor: Colours.transparent,
    color: Colours.white,
    fontFamily: Style.fonts.tags.fontFamily,
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
      opacity: new Animated.Value(0),
      titleAnim: new Animated.Value(0),
      copyAnim: new Animated.Value(0)
    };

    this.hasEntered = false;
  }

  /**
   * This will trigger this component to animate its entry into a scene. IE. Fade in.
   */
  animateEntry(i) {
    if (this.hasEntered) {
      return;
    }
    Animated.sequence([
      Animated.delay(400),
      Animated.parallel([
        Animated.timing(this.state.opacity, {toValue: 1, duration: CARD_ENTRY}),
        Animated.timing(this.state.titleAnim, {toValue: 1, duration: CARD_ENTRY }),
        Animated.timing(this.state.copyAnim, {toValue: 1, duration: CARD_ENTRY }),
      ])
    ]).start();

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
    let copyAnim = {
      opacity: this.state.copyAnim
    };
    let titleAnim = {
      opacity: this.state.titleAnim
    };

    return (
      <TouchableOpacity ref="sc" onPress={(e) => this.props.onPress(story)}>
        <Animated.View style={[styles.container, viewStyle]}>
          <Animated.Image style={offsetStyle} source={story.hero.uri} resizeMode="cover"/>
          <LinearGradient colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.5)']} style={styles.linearGradient}/>
          <View style={styles.textContainer}>
            <Animated.Text style={[styles.name, titleAnim]}>{story.name.toUpperCase()}</Animated.Text>
            <Animated.Text style={[styles.title, copyAnim]}>{story.title}</Animated.Text>
          </View>
        </Animated.View>

      </TouchableOpacity>
    );
  }
}

