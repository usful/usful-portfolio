import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Style from '../styles';

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
      <TouchableOpacity style={Style.sheets.tagRemoveButton} onPress={(e) => this.props.onRemove(this.props.tag)}>
        <View>
          <Text style={Style.sheets.tagRemoveButtonText}>X</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={[Style.sheets.tagContainer, {paddingRight: this.props.isRemovable ? 20 : 5}]}>
        <Text>{this.props.tag}</Text>
        {this.renderRemoveButton()}
      </View>
    );
  }
}