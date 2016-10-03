import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import styles from './styles';
import DetailedStoryItem from './components/Story/DetailedStoryItem';

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DetailedStoryItem />
    );
  }
}