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

  render() {
    let factor = this.props.team.length * 50;
    return (
      <SwipeSelector
        leftPoint={{x: -factor, y: 20}}
        rightPoint={{x: factor, y: 20}}
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