import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

import DetailedStoryItem from './components/Story/DetailedStoryItem';
import TagView from './components/TagView';


export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <DetailedStoryItem />
      </View>
    );
  }
}