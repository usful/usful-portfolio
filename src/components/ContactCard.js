import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import SocialMediaButton from './SocialMediaButton';

import Colours from '../styles/Colours';
import Font from '../styles/Font';

let styles = StyleSheet.create({
  linearGradient: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  backgroundImage: {
    marginHorizontal:0,
    width: 250, height: 300,
    alignItems: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',

  },
  container: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: -50,
    backgroundColor: 'white'

  },
  card: {
    width: 350,
    height: 480,
    paddingVertical: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  cardImage: {
    borderWidth: 1,
    borderColor: '#FFF',
    height: 200,
    marginTop: 30,
    width: 200,
    opacity: 0.5
  },
  page: {
    color: Colours.darkGrey,
    fontFamily: Font.primaryFont.fontFamily,
    fontWeight: 'bold'
  },
  close: {
    paddingLeft: 140,
    color: Colours.darkGrey,
    fontFamily: Font.primaryFont.fontFamily,
    fontWeight: 'bold'
  },
  contactInfo: {
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  pageAndClose: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  textDescription: {
    color: Colours.darkGrey,
    width: 100,
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
    fontFamily: Font.primaryFont.fontFamily,
    textAlign: 'center'
  },

  textTags: {
    fontStyle: 'italic',
    paddingBottom: 18,
    color: Colours.darkGrey,
    fontSize: 8,
    paddingTop: 5,
    fontFamily: Font.primaryFont.fontFamily,
    textAlign: 'center'

  },
  socialMediaBox: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: 250,
    paddingVertical: 10,
    justifyContent: 'center'
  }
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
        <View style={{backgroundColor:'white'}}>
          <View style={styles.pageAndClose}>
            <Text style={styles.page}>{this.props.id}/{this.props.totalCards}</Text>
            <TouchableOpacity onPress={this.props.onClose}>
              <Text style={styles.close}>CLOSE</Text>
            </TouchableOpacity>
          </View>

          <View style={{height:200,width:200}}>
          </View>

          <LinearGradient
            colors={['green', 'red']}
            start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} />

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