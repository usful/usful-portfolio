'use strict';

import React, { Component } from 'react';

import {
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

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: CARD_HEIGHT,
    paddingHorizontal: 50,
    marginBottom: 10
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
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: CARD_HEIGHT,
    width: width
  }
});

export default class StoryCard extends Component {

  static defaultProps = {
    content: {},
    onPress: (content) => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    let story = this.props.content;

    return (
      <TouchableOpacity onPress={(e) => this.props.onPress(story)}>
        <View style={styles.container}>
          <Image style={styles.image} source={story.hero.uri} resizeMode="cover"/>
          <LinearGradient colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.4)']} style={styles.linearGradient}/>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{story.name.toUpperCase()}</Text>
            <Text style={styles.title}>{story.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

