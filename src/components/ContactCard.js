import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    Easing,
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    View,
} from 'react-native';

import Colours from '../styles/Colours';
import Font from '../styles/Font';

let styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: -50,
    backgroundColor: 'grey'

  },
  card: {
    width: 250,
    height: 420,
    paddingVertical: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    marginHorizontal: -0,
  },
  cardImage: {
    borderWidth: 1,
    borderColor: '#FFF',
    height: 120,
    marginTop: 30,
    width: 120,
    backgroundColor: 'white',
    opacity: 0.5
  },
  page: {
    color: 'white',
    fontFamily: Font.fontFamily

  },
  close: {
    paddingLeft: 120,
    color: 'white',
    fontFamily: Font.fontFamily
  },
  contactInfo: {
    alignItems: 'center'
  },
  pageAndClose: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  textDescription: {
    color: Colours.textGrey,
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 25,
    paddingTop: 10,
    fontFamily: Font.fontFamily,
    alignItems: 'stretch'

  },
  textName: {
    marginTop: 30,
    fontWeight: '600',
    color: Colours.textGrey,
    fontSize: 18,
    fontFamily: Font.fontFamily
  },

  textTags: {
    fontStyle: 'italic',
    paddingBottom: 18,
    color: Colours.textGrey,
    fontSize: 12,
    paddingTop: 5,
    fontFamily: Font.fontFamily,

  },
  socialMediaBox: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: 250,
    paddingVertical: 10,
    justifyContent: 'center'
  },
  mediaIcon: {
    width: 30,
    height: 30,
    margin: 5,

  }
});

export default class ContactCard extends Component {

  static defaultProps = {
    person: {},
    id: 0,
    totalCards: 0
  };

  constructor(props) {
    super(props);
  }

  render() {
    let person = this.props.person;

    return (
      <View style={[styles.container]}>
        <View style={[styles.card]}>
          <View style={styles.pageAndClose}>
            <Text style={styles.page}>{this.props.id}/{this.props.totalCards}</Text>
            <Text style={styles.close}>CLOSE</Text>
          </View>
          <Image source={person.picture ? person.picture.uri : {}} style={styles.cardImage}/>
          <View style={styles.contactInfo}>
            <Text style={styles.textName}>{person.name}</Text>
            <Text style={styles.textTags}>{person.tags.join(' / ')}</Text>
            <Text style={styles.textDescription}>{person.description}</Text>
          </View>

        </View>
        <View style={styles.socialMediaBox}>

          <Image source={require('../../assets/Instagram.png')} style={styles.mediaIcon}/>
          <Image source={require('../../assets/Github.png')} style={styles.mediaIcon}/>
          <Image source={require('../../assets/twitter.png')} style={styles.mediaIcon}/>

        </View>
      </View>
    );
  }
}