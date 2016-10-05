import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
ScrollView
} from 'react-native';

import AppData from './AppData';

import DetailedStoryItem from './components/Story/DetailedStoryItem';


import InitiativeView from './components/Initiative/InitiativeView';
import global from './styles';

import Portfolio from './components/Portfolio';
import TagView from './components/TagView';
import TopNav from './components/TopNav';

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <ScrollView style= {global.container}>
        <TopNav />
        <InitiativeView initiatives={AppData.initiatives}/>
      </ScrollView>
    );




  }
}