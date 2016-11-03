import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
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

  },
  cardImage: {
    height: height/2 - 50,
    width: width/2 + 130
  },
  close: {
    color: Colours.darkGrey,
    fontFamily: Font.tags.fontFamily,
    fontWeight: Font.bold.fontWeight,
    marginLeft: 130,
  },
  contactInfo: {
    alignItems: 'center',
    backgroundColor: Colours.white,
    justifyContent: 'center',
    marginHorizontal: 20,
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
    color: Colours.darkGrey,
    fontFamily: Font.tags.fontFamily,
    fontWeight: Font.bold.fontWeight
  },
  pageAndClose: {
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    backgroundColor: Colours.white,
  },
  socialMediaBox: {
    flexDirection: 'row',
    backgroundColor: Colours.transparent,
    paddingVertical: 10,
    justifyContent: 'center'
  },
  textDescription: {
    color: Colours.darkGrey,
    width: width-200,
    fontSize: 12,
    lineHeight: 15,
    paddingTop: 10,
    paddingBottom:20,
    fontFamily: Font.primaryFont.fontFamily,
    textAlign: 'center'
  },
  textName: {
    marginTop: 20,
    fontWeight: '600',
    color: Colours.darkGrey,
    fontSize: 18,
    fontFamily: Font.tags.fontFamily,
    textAlign: 'center'
  },

  textTags: {
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
      <View>
        <View style={styles.card}>
          <View style={styles.pageAndClose}>
            <Text style={styles.page}>{this.props.id}/{this.props.totalCards}</Text>
            <TouchableOpacity onPress={this.props.onClose}>
              <Text style={styles.close}>CLOSE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardImage}>
          </View>

          <View style={styles.contactInfo}>
            <Text style={styles.textName}>{person.name}</Text>
            <Text style={styles.textTags}>{person.tags.join(' / ')}</Text>
            <Text style={styles.textDescription}>{person.description}</Text>
          </View>
        </View>

        <View style={styles.socialMediaBox}>
          {person.socialAccounts.map((account, i) =>
            <SocialMediaButton key={account._mg} account={account} size={30} color='#fff'/>)}
        </View>
      </View>
    );
  }
}