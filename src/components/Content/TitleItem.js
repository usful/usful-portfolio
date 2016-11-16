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

import Style from '../../styles';

import mediaFormatter from '../../helpers/formatters/mediaUri';
import shortDateFormatter from '../../helpers/formatters/shortDate';
import ActionSheet from '../../helpers/actionSheet';

import TagList from './StoryTagList';
import Team from '../Team';

const styles = StyleSheet.create({
  closeText: {
    fontFamily: Style.fonts.primaryFont.fontFamily,
    fontSize: 18,
    marginVertical: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    color: Style.colours.white
  },
  modalBg: {
    width: Style.width,
    height: Style.height,
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
        borderColor: Style.colours.transparent,
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
    fontFamily: Style.fonts.secondaryFont.fontFamily,
    fontWeight: Style.fonts.bold.fontWeight,
    flexWrap: 'wrap'
  },
  share:{
    borderRadius: 22,
    height: 43,
    width: 80,
    borderColor: Style.colours.transparent,
    borderWidth: 0.4,
    marginBottom: 10
  }
});

export default class TitleItem extends Component {
  static defaultProps = {
    content: {
      title: 'Title',
      tags: []
    }
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      isModalVisible: false
    };
  }
  
  get teamImage() {
    return {uri: mediaFormatter(media[48])};
  }
  
  openActionSheet() {
    ActionSheet.open(Platform.OS === 'ios' ? {
        title: 'Usful Portfolio',
        url: 'http://www.usful.co',
        message: `I think you might like this app by Usful. Check out their stories!`,
        subject: `Usful Portfolio - ${shortDateFormatter(this.props.content.date || new Date())}`
      } :
        {
          text: `I think you might like this app by Usful. Check out their stories!\n\nhttp://www.usful.co`,
          subject: `Usful Portfolio - ${shortDateFormatter(this.props.content.date || new Date())}`
        }
    )
  }
  
  openTeamModal() {
    this.setState({isModalVisible: true});
  }
  
  closeTeamModal() {
    this.setState({isModalVisible: false});
  }
  
  renderShowTeam(team) {
    if (team && team.length > 0) {
      return (
        <TouchableOpacity onPress={(e) => this.openTeamModal()}>
          <Image style={styles.team} source={this.teamImage}/>
        </TouchableOpacity>
      )
    }
    
    return <View/>;
  }
  
  render() {
    return (
      <View style={[Style.sheets.content, styles.content]}>
        <View style={styles.row1}>
          
          {this.renderShowTeam(this.props.content.team)}
          
          <TouchableOpacity onPress={(e) => this.openActionSheet()}>
            <Image style={styles.share} source={{uri: mediaFormatter(media[47])}}/>
          </TouchableOpacity>
        </View>
        
        <View style={styles.row2}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TagList tags={this.props.tags}/>
        </View>
  
        <Modal animationType="fade" transparent={true} visible={this.state.isModalVisible} onRequestClose={(e) => this.closeTeamModal()}>
          <View style={styles.modalBg}>
            <Team team={this.props.content.team} onClose={() => this.closeTeamModal()} />
          </View>
        </Modal>

      </View>
    );
  }
}