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
import InitiativesTesterData from './data/InitiativesTesterData';

import Portfolio from './components/Portfolio';
import TagView from './components/TagView';


export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <ScrollView style= {global.container}>
        <DetailedStoryItem story={AppData.stories[0]} nextStory={AppData.stories[1]}/>
        <InitiativeView data={InitiativesTesterData.data}/>
      </ScrollView>
    );


     );

  }
}