import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import TagList from '../TagList';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  title: {
    fontSize: 18,
    color: '#000'
  },
});

export default class StoryRow extends Component {
  static defaultProps = {
    story: {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.story.name}</Text>
        <TagList tags={this.props.story.tags}/>
      </View>
    );
  }
}