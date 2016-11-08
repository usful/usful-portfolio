import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native';
let {height, width } = Dimensions.get('window');

import Colours from '../styles/Colours';
import Font from '../styles/Font';
import LinearGradient from 'react-native-linear-gradient';
import SocialMediaButton from './SocialMediaButton';

let styles = StyleSheet.create({
  card: {
    backgroundColor: Colours.white,
    width: width * 0.85
  },
  cardImage: {
    height: height * 0.3 ,
    backgroundColor: Colours.white,
  },

  closeButton: {
    marginTop : height * 0.05,
    height: 70,
  },
  closeText: {
    color: Colours.darkGrey,
    fontFamily: Font.tags.fontFamily,
    fontWeight: Font.bold.fontWeight,
    marginLeft: 100,
    paddingLeft: 30,

  },
  contactInfo: {
    backgroundColor : Colours.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.3,

  },
  linearGradient: {
    backgroundColor: Colours.transparent,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  page: {
    marginTop: height * 0.05,
    color: Colours.darkGrey,
    fontFamily: Font.tags.fontFamily,
    fontWeight: Font.bold.fontWeight,
    backgroundColor: Colours.white,

  },
  pageAndClose: {
    alignSelf: 'center',
    marginTop: (Platform.OS === 'ios'? 0 : 20),
    flexDirection: 'row',
    backgroundColor: Colours.white,
  },
  socialMediaBox: {
    flexDirection: 'row',
    backgroundColor: Colours.transparent,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  textDescription: {
    backgroundColor: Colours.white,
    color: Colours.darkGrey,
    width: width * 0.6,
    fontSize: 12,
    lineHeight: 12,
    marginBottom: 10,
    fontFamily: Font.primaryFont.fontFamily,
    textAlign: 'center'
  },
  textName: {
    backgroundColor: Colours.white,
    marginTop: 20,
    fontWeight: '600',
    color: Colours.darkGrey,
    fontSize: 18,
    fontFamily: Font.tags.fontFamily,
    textAlign: 'center'
  },

  textTags: {
    backgroundColor: Colours.white,
    color: Colours.darkGrey,
    fontFamily: Font.tags.fontFamily,
    fontStyle: Font.italics.fontStyle,
    fontSize: 10,
    paddingTop: 5,
    paddingBottom: 18,
    textAlign: 'center'
  },

});

export default class ContactCard extends Component {

  static defaultProps = {
    person: {},
    id: 0,
    totalCards: 0,
    onClose: (e) => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    let person = this.props.person;
  
    return (
      <View style={{flex:1}}>
      <View style={styles.card}>
        <View style={styles.pageAndClose}>
          <Text style={styles.page}>{this.props.id}/{this.props.totalCards}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={this.props.onClose}>
            <Text style={styles.closeText}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.cardImage}></View>
      
        <View style={styles.contactInfo}>
          <Text style={styles.textName}>{person.name}</Text>
          <Text style={styles.textTags}>{person.tags.join(' / ')}</Text>
          <Text style={styles.textDescription}>{person.description}</Text>
        </View>
      </View>
      
      
        <View style={styles.socialMediaBox}>
          {person.socialAccounts.map((account, i) =>
            <SocialMediaButton key={i} account={account} size={30} color={Colours.white}/>)}
        </View>
        </View>

    );
  }
}