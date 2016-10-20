import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';

import Navigation from '../../helpers/Navigation';
import TagList from './StoryTagList';

import global from '../../styles';

export default class TitleItem extends Component {
  static defaultProps = {
    title: 'Title',
    tags: []
  };

  constructor(props) {
    super(props);
  }

  openTeamModal() {
    Navigation.push({id: Navigation.CONTACT_CARD_SCENE.id, content: this.props.content});
  }

  render() {
    return (
      <View style={[global.content, style.content]}>
        <View style={style.row1}>
          <TouchableOpacity onPress={(e) => this.openTeamModal()}>
            <Image style={style.team} source={require('../../img/judge.png')}/>
          </TouchableOpacity>
          <TouchableOpacity >
            <Image style={style.share} source={require('../../img/share.png')}/>
          </TouchableOpacity>
        </View>
        <View style={style.row2}>
          <Text style={style.title}>{this.props.title}</Text>
          <TagList tags={this.props.tags}/>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  row1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  team: {
    borderRadius: 22,
    height: 45,
    width: 45,
    borderColor: 'transparent',
    borderWidth: 0.4,
    marginBottom: 20

  },
  row2: {
    flex: 3,
    flexDirection: 'column',
    marginRight: 15
  },
  title: {
    fontSize: 27,
    fontFamily: 'Avenir-Book',
    fontWeight: 'bold',
    flexWrap: 'wrap'
  }
});