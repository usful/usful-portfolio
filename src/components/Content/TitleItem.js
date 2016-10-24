import React, { Component } from 'react';
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
import openLink from '../../helpers/navigation/openLink';
import Navigation from '../../helpers/Navigation';
import TagList from './StoryTagList';
import Team from '../Team';
import Font from './../../styles/Font';
import Colours from './../../styles/Colours';
import global from '../../styles';
let {height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
  closeText: {
    alignSelf:'center',
    color: Colours.white
    fontFamily: Font.primaryFont.fontFamily ,
    fontSize: 18,
    marginVertical: 40,
    justifyContent: 'center',

  },
  modalBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
});

export default class TitleItem extends Component {
  static defaultProps = {
    title: 'Title',
    tags: []
  };


  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }

  openTeamModal() {
    console.log("Ere");
    //Navigation.push({id: Navigation.CONTACT_CARD_SCENE.id});
    let old = this.state.modalVisible;
    this.setState({modalVisible: !old});
  }

  openActionSheet(){
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
            <Modal animationType={'slide'}
                   transparent={true}
                   visible={this.state.modalVisible}
                   onRequestClose={(e) => console.log("close")}>
              <TouchableOpacity onPress={(e)=>this.openTeamModal()}>
                <View style={[styles.modalBg, {height:height -100}]}>
                  <Team style={{backgroundColor: 'black'}}></Team>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{height:100,backgroundColor:'black',alignItems:'center'}}
                                onPress={(e) => this.openTeamModal(e)}>
                <Text style={styles.closeText}>CLOSE</Text></TouchableOpacity>
            </Modal>
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