import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import AppData from './AppData';

import DetailedStoryItem from './components/Story/DetailedStoryItem';
import Portfolio from './components/Portfolio';
import TagView from './components/TagView';

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DetailedStoryItem story={AppData.stories[0]} nextStory={AppData.stories[1]}/>
    );
  }
}