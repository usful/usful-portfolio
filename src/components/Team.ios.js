import React, {Component} from 'react';
import {
  Dimensions,
  View,
  ScrollView,
  Animated,
} from 'react-native';

import Style from '../styles';
import TeamBase from './TeamBase';

export default class Team extends TeamBase {
  static MAX_SCALE = 1.2;
  static REGULAR_SCALE = 1;

  constructor(props) {
    super(props);
  }
  
  onScroll(e) {
    let page = Math.floor(e.nativeEvent.contentOffset.x / Style.width);
    let offset = (e.nativeEvent.contentOffset.x - (page * Style.width)) / Style.width;
  
    if (page < 0) {
      return;
    }
    
    this.state.scales[page].setValue(this.constructor.MAX_SCALE - (this.constructor.MAX_SCALE - this.constructor.REGULAR_SCALE) * offset);

    if (page + 1 >= this.props.team.length) {
      return;
    }
    
    this.state.scales[page + 1].setValue((this.constructor.MAX_SCALE - this.constructor.REGULAR_SCALE) * offset + this.constructor.REGULAR_SCALE);
  }
  
  render() {
    return (
      <View style={{transform: [{scale: 0.8}]}}>
        <ScrollView
          horizontal={true}
          scrollEnabled={true}
          pagingEnabled={true}
          style={{overflow: 'visible'}}
          scrollEventThrottle={Style.SCROLL_FPS}
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => this.onScroll(e)} >
          {this.props.team.map((person, i) => this.renderStoryCard(person, i))}
        </ScrollView>
      </View>
    );
  }
}