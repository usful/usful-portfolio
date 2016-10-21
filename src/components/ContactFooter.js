import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
Image,
Dimensions,
TouchableOpacity
} from 'react-native';

import global from '../styles';
import OutlineButton from './OutlineButton';
import openLink from '../helpers/navigation/openLink';

let {height, width} = Dimensions.get('window');

const FOOTER_HEIGHT = 700;

export default class ContactFooter extends Component {
  static defaultProps = {
    card: 0,
    contact:
    {
      email: 'rishabh@monanetworks.com',
      phone: '123-456-7890',
      uri: 'http://www.lane.com',
      address: '123 Stewart Rd, Toronto, ON, Canada, A1B 2D4 '
    }
  };

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.card != this.props.card ||
      nextProps.contact != this.props.contact
)
  }

  render() {
    return (
      <View style={global.content}>
        <Image source={require('../img/CementBackground.jpg')} resizeMode='cover' style={styles.background}/>
        <Text style={styles.title}>Contact Us</Text>
        <Text style= {styles.body}>Interested in getting in contact with us? Hit us on the Usful line, or shoot an email. Stay up to date with all that's happening in the Usful world by following us on social media.</Text>
        <View style={styles.buttonContainer}>
          <OutlineButton text={"INSTAGRAM"} uri = {this.props.contact.uri}/>
          <OutlineButton text={"TWITTER"} uri = {this.props.contact.uri}/>
        </View>
        <View style={styles.buttonContainer}>
          <OutlineButton text={"EMAIL"} uri = {this.props.contact.uri}/>
          <OutlineButton text={"PHONE"} uri = {this.props.contact.uri}/>
        </View>
        <Text style={styles.address}>{this.props.contact.address}</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  body: {
    marginTop: 30,
    fontFamily: 'Courier New',
    fontSize: 15,
    marginHorizontal: 20,
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 40
  },
  buttonText: {
    fontFamily: 'Courier New',
    fontSize: 15,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',

  },
  title: {
    marginTop: 60,
    color: '#000',
    fontSize: 30,
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  button: {
    borderWidth: 0.5,
    borderColor: '#000',
    width: 125,
    marginHorizontal: 20,
    paddingVertical: 10
  },
  address: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Courier New',
    paddingHorizontal: 40,
    backgroundColor: 'transparent',
    color: '#B4B4B4'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 5,
    width: width,
    height: FOOTER_HEIGHT,
    backgroundColor: 'transparent'
  }
});