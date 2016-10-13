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
    info: [{
      email: 'mailto:info@monanetworks.com',
      phone: 'tel:1234567890',
      url: 'https://www.joinlane.com',
      address: '46 Stewart St, Toronto, ON, Canada, A1B 2C3'
    }],
    card: 0
  };

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.card != this.props.card ||
      nextProps.info != this.props.info
    )
  }

  render() {
    return (
      <View style={global.content}>
        <Text style={styles.title}>Contact Information</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => openLink(this.props.info[this.props.card].url)}>
            <Image style={styles.icon} source={require('../img/share.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(this.props.info[this.props.card].url)}>
            <Image style={styles.icon} source={require('../img/phone-call.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(this.props.info[this.props.card].url)}>
            <Image style={styles.icon} source={require('../img/mail.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(this.props.info[this.props.card].url)}>
            <Image style={styles.icon} source={require('../img/internet.png')}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.address}>{this.props.info[this.props.card].address}</Text>
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
});