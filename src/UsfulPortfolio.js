import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
ScrollView
} from 'react-native';

import DetailedStoryItem from './components/Story/DetailedStoryItem';
import TopNav from './components/TopNav';
import InitiativeView from './components/Initiative/InitiativeView';
import global from './styles';
import InitiativesTesterData from './data/InitiativesTesterData';

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style= {global.container}>
        <InitiativeView data={InitiativesTesterData.data}/>
      </ScrollView>
    );
  }
}