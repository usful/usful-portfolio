import React, { Component } from 'react';
import {
  Platform,
  Animated,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Style from '../styles';

import SocialMediaButton from './SocialMediaButton';

let styles = StyleSheet.create({
  card: {
   marginTop: Platform.OS === 'ios'? Style.height * 0.05: Style.height * 0.02
  },
  whiteArea: {
    backgroundColor: Style.colours.white,
    width: Style.width * 0.85
  },
  cardImage: {
    height: Style.height * 0.3 ,
    backgroundColor: Style.colours.white,
  },

  closeButton: {
    marginTop : Style.height * 0.05,
    height: 70,
  },
  closeText: {
    color: Style.colours.darkGrey,
    fontFamily: Style.fonts.tags.fontFamily,
    fontWeight: Style.fonts.bold.fontWeight,
    marginLeft: 100,
    paddingLeft: 30,

  },
  contactInfo: {
    backgroundColor : Style.colours.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: Style.height * 0.3,

  },
  linearGradient: {
    backgroundColor: Style.colours.transparent,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  page: {
    marginTop: Style.height * 0.05,
    color: Style.colours.darkGrey,
    fontFamily: Style.fonts.tags.fontFamily,
    fontWeight: Style.fonts.bold.fontWeight,
    backgroundColor: Style.colours.white,

  },
  pageAndClose: {
    alignSelf: 'center',

    flexDirection: 'row',
    backgroundColor: Style.colours.white,
  },
  socialMediaBox: {
    flexDirection: 'row',
    backgroundColor: Style.colours.transparent,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  textDescription: {
    backgroundColor: Style.colours.white,
    color: Style.colours.darkGrey,
    width: Style.width * 0.6,
    fontSize: 12,
    lineHeight: 12,
    marginBottom: 10,
    fontFamily: Style.fonts.primaryFont.fontFamily,
    textAlign: 'center'
  },
  textName: {
    backgroundColor: Style.colours.white,
    marginTop: 20,
    fontWeight: '600',
    color: Style.colours.darkGrey,
    fontSize: 18,
    fontFamily: Style.fonts.tags.fontFamily,
    textAlign: 'center'
  },

  textTags: {
    backgroundColor: Style.colours.white,
    color: Style.colours.darkGrey,
    fontFamily: Style.fonts.tags.fontFamily,
    fontStyle: Style.fonts.italics.fontStyle,
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
      <View style={styles.card}>
        <View style={styles.whiteArea}>
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
            <SocialMediaButton key={i} account={account} size={30} color={Style.colours.white}/>
          )}
        </View>
      </View>
    );
  }
}