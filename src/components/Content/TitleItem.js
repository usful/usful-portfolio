'use strict';

import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
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
      <View style={[global.content, style.content]}>
        <View style={style.row1}>
          <TouchableOpacity onPress={(e) => this.openTeamModal(e)}>
            <Image style={style.team} source={require('../../img/judge.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={(e) => this.openActionSheet()}>
            <Image style={style.share} source={require('../../img/share.png')}/>
          </TouchableOpacity>
        </View>

        <View style={style.row2}>
          <Text style={style.title}>{this.props.title}</Text>
          <TagList tags={this.props.tags}/>
        </View>

        <Modal animationType={'slide'}
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