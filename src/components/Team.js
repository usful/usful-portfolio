import React, { Component } from 'react';
import {

  Modal,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,

} from 'react-native';

import team from '../data/team';
import SwipeSelector from 'react-native-swipe-selector';
import ContactCard from './ContactCard';
import Navigation from './../helpers/Navigation'

let styles = StyleSheet.create({
  scrollView: {

    height: 300,
  },
  transparentView: {
    backgroundColor: '#00000000'
  }
});

export default class Team extends Component {

  static defaultProps = {
    content: {
      team: team
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:true,
    }
  }

  setModalInvisible() {
    this.setState ({
      modalVisible:true,
    });
  }

  render() {

    return (
          <SwipeSelector
            leftPoint= {{x: -200, y: -100}}
            rightPoint= {{x: 200, y: -100}}
            scalingOptions={{padRightItems: 0, padLeftItems: 0}}>
            {this.props.content.team.map((person, i) =>   <ContactCard key={i} person={person} index={i + 1} totalCards={this.props.content.team.length} id={person._id}/>   )}
          </SwipeSelector>

);
  }
}