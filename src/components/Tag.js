import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import styles from '../styles';

export default class TagList extends Component {
  static defaultProps = {
    tag: 'tag',
    isRemovable: false,
    onRemove: (tag) => {}
  };

  constructor(props) {
    super(props);
  }

  renderRemoveButton() {
    if (!this.props.isRemovable) {
      return;
    }

    return (
      <TouchableOpacity style={styles.tagRemoveButton} onPress={(e) => this.props.onRemove(this.props.tag)}>
        <View>
          <Text style={styles.tagRemoveButtonText}>X</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={[styles.tagContainer, {paddingRight: this.props.isRemovable ? 20 : 5}]}>
        <Text>{this.props.tag}</Text>
        {this.renderRemoveButton()}
      </View>
    );
  }
}