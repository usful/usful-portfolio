import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

import StoriesData from './data/Stories';

import StoryRow from './components/Story/StoryRow';
import TagInput from './components/TagInput';

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (story1, story2) => story1.name !== story2.name});

    this.state = {
      dataSource: this.ds.cloneWithRows(StoriesData.data),
    };
  }

  onTagsChanged(tags) {
    let stories = StoriesData.data.filter((story) => {
      let matched = 0;

      for (let tag of tags) {
        if (story.tags.some(storyTag => tag === storyTag)) {
          matched++;
        }
      }

      return matched === tags.length;
    });

    this.setState({
      dataSource: this.ds.cloneWithRows(stories),
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TagInput onTagsChanged={(tags) => this.onTagsChanged(tags)} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <StoryRow story={rowData}/>}
        />
      </View>
    );
  }
}

/**
 *
 * Tag Input
 *
 *  - Create test data.
 *  - Put in a ListView
 *  - Render the test data to rows.
 *
 *  - Text Input that when you "enter" or enter a space a new tag is added to the tag list
 *  - remove a tag from the tag list easily
 *  - hitting backspace if there is nothing in the text input should remove the last tag.
 *  - as you update the tag list it should trigger UI updates
 *
 *  Stretch goal.
 *  - nice layout where as the tags are the added to the left, the input moves to the right.
 *  - style and layout.
 *
 *
 */