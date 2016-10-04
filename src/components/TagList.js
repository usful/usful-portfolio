import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import styles from '../styles';
import Tag from './Tag';

export default class TagList extends Component {
  static defaultProps = {
    tags: [],
    isRemovable: false,
    onTagRemove: (tag) => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.tagsContainer}>
        {this.props.tags.map(tag =>
          <Tag key={tag}
               tag={tag}
               isRemovable={this.props.isRemovable}
               onRemove={(tag) => this.props.onTagRemove(tag)}
          />)}
      </View>
    );
  }
}