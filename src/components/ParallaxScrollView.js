'use strict';

import React, {Component} from 'react';
import {Animated, StyleSheet, Dimensions, View, Text, TouchableOpacity, ScrollView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

let {height, width} = Dimensions.get('window');

const CARD_HEIGHT = 350;
const MAX_OFFSET = 0.75;

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
  }
});

export default class ParallaxScrollView extends Component {
  static CARD_HEIGHT = CARD_HEIGHT;
  static MAX_OFFSET = MAX_OFFSET;

  static defaultProps = {
    scrollEventThrottle: (1000 / 30),
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    style: {},
    onMomentumScrollEnd: (e) => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      offset: new Animated.Value(0)
    }
  };

  getOffsetStyle(i) {
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      height: CARD_HEIGHT * (1 + MAX_OFFSET),
      width: width,
      transform: [{
        translateY: this.state.offset.interpolate({
          inputRange: [0, i * CARD_HEIGHT],
          outputRange: [0, CARD_HEIGHT]
        })
      }]
    };
  }

  onScroll(e) {
    let currentOffset = e.nativeEvent.contentOffset.y;
    let direction = currentOffset > offset;

    offset = currentOffset;

    //based on the current y offset we can tell where each story card is in the viewport because we know the story card
    //height.  we can use this to determine the offset for its parallax background scroll.

    let cardsScrolled = Math.floor(e.nativeEvent.contentOffset.y / StoryCard.CARD_HEIGHT);
    let cardsPerScreen = Math.ceil(height / StoryCard.CARD_HEIGHT);

    let storyOffsets = [];
    for (let i=0; i<AppData.stories.length; i++) {
      if (i < cardsScrolled) {
        //cards scrolled by are above the viewport, so set them to max negative offset.
        storyOffsets[i] = -StoryCard.MAX_OFFSET;
      } else if (i > cardsScrolled + cardsPerScreen) {
        //cards past the current bottom of the viewport can be set to max offset.
        storyOffsets[i] = StoryCard.MAX_OFFSET;
      } else {
        let relativeOffset = e.nativeEvent.contentOffset.y - (StoryCard.CARD_HEIGHT * i);
        storyOffsets[i] = (relativeOffset / height);
      }
    }

    //CJR: Rather than set the state on each scroll event, we will check the state to see if it needs to be updated.
    //Every time the state is set the component will try to update, so this prevents unnecessary updates.
    this.setState({
      storyOffsets: storyOffsets,
      hideNavBar: direction
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ScrollView
        style={this.props.style}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.offset}}}])}
        scrollEventThrottle={this.props.scrollEventThrottle}
        showsHorizontalScrollIndicator={this.props.showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={this.props.showsVerticalScrollIndicator}
        onMomentumScrollEnd={this.props.onMomentumScrollEnd}>
        {this.props.data.map((obj, i) =>
          <TouchableOpacity key={obj._id} onPress={(e) => this.props.onPress(obj)}>
            <View style={styles.container}>
              <Animated.Image style={this.getOffsetStyle(i)} source={obj.hero.uri} resizeMode="cover"/>
              <LinearGradient colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.4)']} style={styles.linearGradient}/>
              <View style={styles.textContainer}>
                <Text style={styles.name}>{obj.name.toUpperCase()}</Text>
                <Text style={styles.title}>{obj.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}

