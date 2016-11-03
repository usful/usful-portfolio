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
  teamAndroid: {
    height: 100,
    width: 100
  },
  content: {
    flexDirection: 'row',
  },
  row1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  teamiOS: {
    borderRadius: 22,
    height: 43,
    width: 80,
    borderColor: Colours.transparent,
    borderWidth: 0.4,
    marginBottom: 10

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
    marginTop: -10,
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
      modalVisible: false
    }
  }

  openTeamModal() {
    this.setState({modalVisible: true});
  }

  closeTeamModal() {
    this.setState({modalVisible: false});
  }

  openActionSheet() {
    ActionSheet.open({
        //TODO: replace with url to PDF of content passed through model
        url: 'https://www.joinlane.com',
        message: 'See what Usful is up to now!',
      },
    )
  }

  render() {
    return (
      <View style={[global.content, styles.content]}>
        <View style={styles.row1}>
          <TouchableOpacity onPress={(e) => this.openTeamModal(e)}>
            <Image style={styles.teamiOS} source={require('../../../assets/team.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={(e) => this.openActionSheet()}>
            <Image style={styles.share} source={require('../../img/share.png')}/>
          </TouchableOpacity>
        </View>

        <View style={styles.row2}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TagList tags={this.props.tags}/>
        </View>

        <Modal animationType={'none'}
               transparent={true}
               visible={this.state.modalVisible}
               onRequestClose={(e) => this.closeTeamModal()}>
          <View style={styles.modalBg}>
            <Team team={this.props.content.team} onClose={() => this.closeTeamModal()} />
          </View>
        </Modal>
      </View>
    );
  }
}
