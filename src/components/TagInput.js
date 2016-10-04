'use strict';

import React, {Component} from 'react';

import {Alert, View, Text, TextInput, StyleSheet} from 'react-native';

import TagList from './TagList';

const styles = StyleSheet.create({
  input: {
    height: 40, borderColor: 'gray', borderWidth: 1
  }
});

export default class TagInput extends Component {
  static defaultProps = {
    onTagsChanged: (tags) => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      tags: []
    }
  }

  addNewTag(text) {
    let newTag = text.trim().toLowerCase();

    if (this.state.tags.some((tag) => tag === newTag)) {
      this.setState({
        inputText: ''
      });

      return;
    }

    let newTags = this.state.tags;
    newTags.push(newTag);

    this.setState({
      inputText: '',
      tags: newTags
    });

    this.props.onTagsChanged(newTags);
  }

  removeTag(tagToRemove) {
    let newTags = this.state.tags.filter((tag) => tag !== tagToRemove);

    this.setState({
      tags: newTags
    });

    this.props.onTagsChanged(newTags);
  }

  onChange(e) {
  }

  onChangeText(text) {
    if (text[text.length -1] === ' ') {
      this.addNewTag(text);
    } else {
      this.setState({inputText: text});
    }
  }

  render() {
    return (
      <View>
        <TagList
          isRemovable={true}
          onTagRemove={(tag) => this.removeTag(tag)}
          tags={this.state.tags}
        />
        <TextInput
          style={styles.input}
          onChange={(e) => this.onChange(e)}
          onChangeText={(text) => this.onChangeText(text)}
          onSubmitEditing={() => this.addNewTag(this.state.inputText)}
          value={this.state.inputText}
        />
        <Text>{this.state.inputText}</Text>
      </View>
    );
  }
}