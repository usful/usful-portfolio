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

    //going to be replaced by [PersonModel]

    let elements = [].concat(this.elements).concat(
      [
        {id:1, name: "name1", jobPosition: "dosth", ig: "@asgdfgd"},
        {id: 2, name: "name2", jobPosition: "dosth2", ig: "@a2fgd"},
        {id: 3,name: "name3", jobPosition: "dosth3", ig: "@asgd2223fgd"},
        {id: 4,name: "name4", jobPosition: "dosth4", ig: "@444fgd"},
      ]);
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