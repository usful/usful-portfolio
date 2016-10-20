import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import ContactCard from './ContactCard';

let styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFFFFF',
    height: 300,
  },
});

export default class Team extends Component {

  static defaultProps = {
    content: {
      team: []
    }
  };

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ScrollView
        decelerationRate={0}
        directionalLockEnabled={true}
        horizontal={true}
        scrollEventThrottle={32}
        snapToInterval={320}
        snapToAlignment='center'
        style={[styles.scrollView]}
        zoomScale={1}>

        {this.props.content.team.map((person, i) =>
          <ContactCard key={person._id}
                       person={person}
                       totalCards={this.props.content.team.length}
                       id={i}/>
        )}
      </ScrollView>
    );
  }
}