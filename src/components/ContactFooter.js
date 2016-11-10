import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
Image,
Dimensions,
TouchableOpacity
} from 'react-native';


import Style from '../styles';
import media from '../data/media';
import mediaFormatter from '../helpers/formatters/mediaUri';
import OutlineButton from './OutlineButton';

import Font from '../styles/Font';


const FOOTER_HEIGHT = 600;

const UNDERLAY_HEIGHT = 100;

export default class ContactFooter extends Component {
  
  static FOOTER_HEIGHT = FOOTER_HEIGHT;
  static UNDERLAY_HEIGHT = UNDERLAY_HEIGHT;
  
  static defaultProps = {
    card: 0,

    contact:
    {
      email: 'mailto:info@usful.co',
      phone: 'tel:1-877-364-6662',
      instagram: 'https://www.instagram.com/usful.co/',
      twitter: 'https://twitter.com/Usful_',
      address: '46 Stewart St, Toronto, ON, Canada, M5V 1H6'
    }
  };
  
  constructor(props) {
    super(props);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.contact != this.props.contact
)
  }
  
  renderButtons() {
    
    if (this.props.contact.uri) {
      return (
        <View style={styles.buttonContainer}>
          <OutlineButton text={"WEBSITE"} uri={this.props.contact.uri}/>
          <OutlineButton text={"TWITTER"} uri={this.props.contact.twitter}/>
        </View>
      )
    } else {
      return (
        <View style={styles.buttonContainer}>
          <OutlineButton text={"INSTAGRAM"} uri={this.props.contact.instagram}/>
          <OutlineButton text={"TWITTER"} uri={this.props.contact.twitter}/>
        </View>
      )
    }
  }
  
  render() {

    return (
      <View style={styles.contactShow}>
        <Image source={{uri: mediaFormatter(media[45])}} resizeMode='cover' style={styles.background}/>
        <View style={styles.contact}>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.body}>Interested in learning more about Usful? Contact us! We’d love to hear from you.</Text>
          {this.renderButtons()}
          <View style={styles.buttonContainer}>
            <OutlineButton text="EMAIL" uri={this.props.contact.email}/>
            <OutlineButton text="PHONE" uri={this.props.contact.phone}/>
          </View>
          <Text style={styles.address}>{this.props.contact.address}</Text>
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  contactShow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: ContactFooter.FOOTER_HEIGHT,
    opacity: 1,
  },
  contact: {
    marginTop: UNDERLAY_HEIGHT
  },
  body: {
    marginTop: 30,
    fontFamily: Style.font.primaryFont.fontFamily,
    fontSize: 15,
    marginHorizontal: 20,
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 40
  },
  buttonContainer: {
    zIndex: 999,
    backgroundColor: 'transparent',
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    marginTop: 60,
    color: '#000',
    fontSize: 30,
    fontFamily: Style.font.primaryFont.fontFamily,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    width: 125,
    marginHorizontal: 20,
    paddingVertical: 10
  },
  address: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: Style.fonts.primaryFont.fontFamily,
    paddingHorizontal: 40,
    backgroundColor: 'transparent',
    color: '#000',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingBottom: UNDERLAY_HEIGHT,
    width: Style.width,
    height: FOOTER_HEIGHT,
  }
});