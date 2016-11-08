'use strict';

import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  View,
  Image,
  Modal
} from 'react-native';

import media from '../../data/media';
import mediaFormatter from '../../helpers/formatters/mediaUri';
import longDateFormatter from '../../helpers/formatters/longDate';
import ActionSheet from '../../helpers/actionSheet';
import TagList from './StoryTagList';
import Team from '../Team';
import Font from './../../styles/Font';
import Colours from './../../styles/Colours';
import global from '../../styles';

let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  closeText: {
    fontFamily: Font.primaryFont.fontFamily,
    fontSize: 18,
    marginVertical: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    color: Colours.white
  },
  modalBg: {
    top: 0,
    left: 0,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  team: {
    ... Platform.select({
      ios: {
        height: 40,
        width: 70,
      },
      android: {
        height: 43,
        width: 80,
        borderColor: Colours.transparent,
        borderWidth: 0.4,
        marginBottom: 10
      }
    }),
    borderRadius: 22,
  },
  content: {
    flexDirection: 'row',
  },
  row1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row2: {
    flex: 3,
    flexDirection: 'column',
    marginRight: 15
  },
  title: {
    fontSize: 27,
    fontFamily: Font.secondaryFont.fontFamily,
    fontWeight: Font.bold.fontWeight,
    flexWrap: 'wrap'
  },
  share:{
    borderRadius: 22,
    height: 43,
    width: 80,
    borderColor: Colours.transparent,
    borderWidth: 0.4,
    marginBottom: 10
  }
});

export default class TitleItem extends Component {
  static defaultProps = {
    content: {
      title: 'Title',
      tags: []
    },
    onOpenTeam: (team) => {
    }
  };
  
  constructor(props) {
    super(props);
  }
  
  getTeamImage() {
    return {uri: mediaFormatter(media[48])};
  }
  
  openActionSheet() {
    ActionSheet.open(Platform.OS === 'ios' ? {
        title: 'Usful Portfolio',
        url: 'http://www.usful.co',
        message: 'I think you might like this app by Usful. Check out their stories!',
        subject: `Usful Portfolio - ${longDateFormatter(this.props.content.date || new Date())}`
      } :
        {
          text: 'I think you might like this app by Usful. Check out their stories!\n\nhttp://www.usful.co',
          subject: `Usful Portfolio - ${longDateFormatter(this.props.content.date || new Date())}`
        }
    )
  }
  
  showTeam(team) {
    if (team && team.length > 0) {
      return (
        <TouchableOpacity onPress={(e) => this.props.onOpenTeam(team)}>
          <Image style={styles.team} source={this.getTeamImage()}/>
        </TouchableOpacity>
      )
    }
    
    return <View/>;
  }
  
  render() {
    return (
      <View style={[global.content, styles.content]}>
        <View style={styles.row1}>
          
          {this.showTeam(this.props.content.team)}
          
          <TouchableOpacity onPress={(e) => this.openActionSheet()}>
            <Image style={styles.share} source={{uri: mediaFormatter(media[47])}}/>
          </TouchableOpacity>
        </View>
        
        <View style={styles.row2}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TagList tags={this.props.tags}/>
        </View>
      </View>
    );
  }
}
