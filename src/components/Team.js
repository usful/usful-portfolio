import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import ContactCards from './ContactCards';

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
    this.state = {
      page: 0
    };
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

        {this.props.content.team.map((data, i) =>
          <ContactCards key={i}
                        totalTabs={cards.length}
                        index={i}
                        uri={data.url}
                        page={this.state.page}/>
        )}
      </ScrollView>
    );
  }
}