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
  teamAndroid: {
    borderRadius: 22,
    height: 40,
    width: 70,
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
    console.log("closing");
    this.setState({modalVisible: false});
  }

  getTeamImage(){
    if (Platform.OS === 'ios') {
      return require('../../../assets/team.png');
    } else {
      return require('image!team');
    }
  }

  openActionSheet() {
    ActionSheet.open({
        title: 'Usful Portfolio',
        url: 'https://www.usful.co',
        message: 'I think you might like this app by Usful. Check out their stories!',
        subject: `Usful Portfolio - ${longDateFormatter(this.props.content.date || new Date())}`
      }
    )
  }
  showTeam(team) {
    if (team._array.length > 0) {
      return <TouchableOpacity onPress={(e) => this.openTeamModal(e)}>
        <Image style={Platform.OS === 'ios'? styles.teamiOS : styles.teamAndroid} source={this.getTeamImage()}/>
      </TouchableOpacity>
    } else {
      return <View></View>
    }
  }
  render() {
    return (
      <View style={[global.content, styles.content]}>
        <View style={styles.row1}>
          {this.showTeam(this.props.content.team)}
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
