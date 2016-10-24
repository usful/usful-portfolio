'use strict';

import React, { Component } from 'react';

import {
  Animated,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  Easing,
  TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

let {height, width} = Dimensions.get('window');

const CARD_HEIGHT = 350;
const EXPANDO_HEIGHT = 200;
const MAX_OFFSET = 0.75;
const CARD_ENTRY = 1000;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: CARD_HEIGHT,
    paddingHorizontal: 50,
    marginBottom: 10,
    overflow: 'hidden'
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: CARD_HEIGHT
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
    textAlign: 'center',
    marginBottom: 34,
  },
  title: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontFamily: 'Courier New',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22
  },
  expando: {
    position: 'absolute',
    top: CARD_HEIGHT,
    left: 0,
    height: EXPANDO_HEIGHT,
    width: width,
    padding: 20
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
    entrySpeed: CARD_ENTRY,
  };

  constructor(props) {
    super(props);

    this.state = {
      offset: new Animated.Value(0),
      opacity: new Animated.Value(0),
      height: new Animated.Value(CARD_HEIGHT)
    };

    this.expanded = false;
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

  onPress() {
    //this.props.onPress(story);

    Animated
      .timing(this.state.height, {
        toValue: this.expanded ? CARD_HEIGHT : CARD_HEIGHT + EXPANDO_HEIGHT,
        duration: 1000,
        easing: Easing.bounce
      })
      .start()
    ;

    this.expanded = !this.expanded;
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
      height: this.state.height
    };

    return (
      <TouchableOpacity onPress={(e) => this.onPress()}>
        <Animated.View style={[styles.container, viewStyle]}>
          <Animated.Image style={offsetStyle} source={story.hero.uri} resizeMode="cover"/>
          <LinearGradient colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.5)']} style={styles.linearGradient}/>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{story.name.toUpperCase()}</Text>
            <Text style={styles.title}>{story.title}</Text>
          </View>
          <Animated.View style={styles.expando}>
            <Text style={{color: 'transparent', fontSize: 16}}>
              Artisan brunch XOXO vexillologist, synth listicle cardigan art party enamel pin. Meh cornhole subway tile gluten-free, poke succulents fashion axe sriracha. Lumbersexual you probably haven't heard of them godard, lyft try-hard biodiesel hammock helvetica farm-to-table forage. Shoreditch twee art party drinking vinegar lyft. Shabby chic normcore flannel, tumeric next level blog health goth trust fund kinfolk forage tattooed. Single-origin coffee meggings scenester, master cleanse franzen meditation tacos knausgaard authentic man braid gochujang enamel pin kale chips viral. Mumblecore stumptown aesthetic drinking vinegar dreamcatcher health goth jianbing tacos.
            </Text>
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

