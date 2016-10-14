import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
Image,
TouchableOpacity
} from 'react-native';

import global from '../styles';

import openLink from '../helpers/navigation/openLink';

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
  }

  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps,nextState) {
    return (
      nextProps.card != this.props.card ||
      nextProps.contact != this.props.contact
)
  }

  render() {
    return (
      <View style= {global.content}>
        <Text style={styles.title}>Contact Information</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => openLink(this.props.contact.uri)} >
            <Image style={styles.icon} source={require('../img/share.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(this.props.contact.uri)}>
            <Image style={styles.icon} source={require('../img/phone-call.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(this.props.contact.uri)}>
            <Image style={styles.icon} source={require('../img/mail.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(this.props.contact.uri)}>
            <Image style={styles.icon} source={require('../img/internet.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.address}>{this.props.contact.address}</Text>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  iconContainer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  title: {
    marginTop: 40,
    color: '#B4B4B4',
    fontSize: 30,
    fontFamily: 'Avenir',
    fontWeight: 'bold'
  },
  icon: {
    marginHorizontal: 10
  },
  address: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Avenir',
    paddingHorizontal: 40,
    color: '#B4B4B4'
  }
})