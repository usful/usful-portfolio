import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
ScrollView
} from 'react-native';

import DetailedStoryItem from './components/Story/DetailedStoryItem';
import TagView from './components/TagView';

import global from './styles';

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style= {global.container}>
        <DetailedStoryItem />
      </ScrollView>
    );
  }
}