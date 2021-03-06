'use strict';

import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class SocialMediaButton extends Component {
  static defaultProps = {
    account: {},
    size: 30,
    color: 'white',
    style: {}
  };

  constructor(props) {
    super(props);

    this.state = {
      bounceValue : new Animated.Value(1)
    }
  }

  async openMedia() {
    //slight bounce
      try {
        await Linking.openURL(this.props.account.uri);
      } catch (err) {
        console.log('error', err);
      }
    //TODO: remove console logs once this is working.
  }

  get iconName() {
    switch (this.props.account.type) {
      case 'instagram':
        return 'logo-instagram';
      case 'github':
        return 'logo-github';
      case 'twitter':
        return 'logo-twitter';
      case 'linkedin':
        return 'logo-linkedin';
      case 'googleplus':
        return 'logo-googleplus';
      case 'youtube':
        return 'logo-youtube';
      default:
        return 'ios-mail';
    }
  }

  get containerStyle() {
    return {
      ... this.props.style,
      borderWidth: 2,
      borderRadius: this.props.size,
      borderColor: this.props.color,
      width: this.props.size * 1.75,
      height: this.props.size * 1.75,
      paddingVertical: this.props.size * 0.3,
      paddingHorizontal: this.props.size * 0.4,
      margin: 5
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.openMedia()}>
        <Animated.View style={[this.containerStyle,{transform: [{scale: this.state.bounceValue}]}]}>
          <Icon name={this.iconName} size={this.props.size} color={this.props.color}/>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}