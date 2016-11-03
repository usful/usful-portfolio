import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

import team from '../data/team';
import SwipeSelector from 'react-native-swipe-selector';
import ContactCard from './ContactCard';

export default class Team extends Component {

  static defaultProps = {
    content: {
      team: team
    },
    onClose: (e) => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    }
  }

  getFactor(len){
    if (len <= 2) {
     return 350;
    } else {
      return len * (80 + (len * 10));
    }
  }

  render() {

    return (
      <SwipeSelector
        leftPoint={{x: -this.getFactor(this.props.team.length), y: -20}}
        rightPoint={{x: this.getFactor(this.props.team.length) - 80, y: -20}}
        scalingOptions={{padRightItems: 0, padLeftItems: 0}}>
        {this.props.team.map((person, i) =>
          <ContactCard key={person._id}
                       person={person}
                       totalCards={this.props.team.length}
                       onClose={this.props.onClose}
                       id={i + 1}/>
        )}
      </SwipeSelector>
    );
  }
}