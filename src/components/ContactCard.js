import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    Linking,
    ScrollView,
    TouchableHighlight,
  TouchableOpacity,
    View,
} from 'react-native';

import SwipeSelector from 'react-native-swipe-selector';
import LinearGradient from 'react-native-linear-gradient';
import Navigation from '../helpers/Navigation';
import Colours from '../styles/Colours';
import Font from '../styles/Font';

let styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: -50,
    backgroundColor: 'transparent'

  },
  card: {
    width: 250,
    height: 420,
    paddingVertical: 30,
    backgroundColor: Colours.white,
    alignItems: 'center',
    marginHorizontal: -0,
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
    fontFamily: Font.primaryFont.fontFamily

  },
  close: {
    paddingLeft: 120,
    color: Colours.darkGrey,
    fontFamily: Font.primaryFont.fontFamily
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
    color: Colours.darkGrey,
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 25,
    paddingTop: 10,
    fontFamily: Font.primaryFont.fontFamily,
    alignItems: 'stretch'

  },
  textName: {
    marginTop: 30,
    fontWeight: '600',
    color: Colours.darkGrey,
    fontSize: 18,
    fontFamily: Font.fontFamily
  },

  textTags: {
    fontStyle: 'italic',
    paddingBottom: 18,
    color: Colours.darkGrey,
    fontSize: 8,
    paddingTop: 5,
    fontFamily: Font.primaryFont.fontFamily,

  },
  socialMediaBox: {
    flexDirection: 'row',
    backgroundColor: Colours.darkGrey,
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

  openMedia(url) {
    console.log("open");
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    let person = this.props.person;

    return (
      <View style={[styles.container]}>
        <LinearGradient colors={['white', 'transparent']}
                        start={[0,0.5]} end={[0,0]}
                        location={[0.5,0.5,0.5]}>
          <View style={[styles.card]}>
          <View style={styles.pageAndClose}>
            <Text style={styles.page}>{this.props.index}/{this.props.totalCards}</Text>
            <TouchableOpacity><Text style={styles.close}>CLOSE</Text></TouchableOpacity>
          </View>
          <Image source={{uri: person.picture}} style={styles.cardImage}/>
          <View style={styles.contactInfo}>
            <Text style={styles.textName}>{person.name}</Text>
            <Text style={styles.textTags}>{person.tags.join(' / ')}</Text>
            <Text style={styles.textDescription}>{person.description}</Text>
          </View>

        </View>
        </LinearGradient>
        <View style={styles.socialMediaBox}>

          <TouchableOpacity onPress={()=> this.openMedia(person.socialAccounts[0].uri)}><Image source={require('../../assets/Instagram.png')}  style={styles.mediaIcon}/></TouchableOpacity>
          <TouchableOpacity onPress={()=>this.openMedia(person.socialAccounts[1].uri)}><Image source={require('../../assets/facebook.png')} style={styles.mediaIcon}/></TouchableOpacity>

          <TouchableOpacity onPress={()=>this.openMedia(person.socialAccounts[2].uri)}><Image source={require('../../assets/linkedin.png')} style={styles.mediaIcon}/></TouchableOpacity>

        </View>
      </View>
    );
  }
}