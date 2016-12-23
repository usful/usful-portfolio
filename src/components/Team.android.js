import React, {Component} from 'react';
import {
  View,
  ViewPagerAndroid
} from 'react-native';

import Style from '../styles';
import TeamBase from './TeamBase';

export default class Team extends TeamBase {
  static MAX_SCALE = 1;
  static REGULAR_SCALE = 0.8

  constructor(props) {
    super(props);
  }

  onPageScroll(e) {
    let page = e.nativeEvent.position;
    let offset = e.nativeEvent.offset;
  
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
      <View style={{flex:1}}>
        <ViewPagerAndroid
          style={{flex:1}}
          pageMargin={Math.floor(-Style.width * 0.1)}
          onPageScroll={(e) => this.onPageScroll(e)}>
          {this.props.team.map((person, i) => this.renderStoryCard(person, i))}
        </ViewPagerAndroid>
      </View>
    );
  }
}