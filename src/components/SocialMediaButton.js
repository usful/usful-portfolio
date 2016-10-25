'use strict';

import React, { Component } from 'react';

import {
  Animated,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


let {height, width} = Dimensions.get('window');


let styles = StyleSheet.create({
  borderWidth: 2,
  borderRadius: this.props.size,
  borderColor: this.props.color,
  width: this.props.size * 1.75,
  height: this.props.size * 1.75,
  paddingVertical: this.props.size * 0.3,
  paddingHorizontal: this.props.size * 0.4,
  margin: 5
 });

export default class SocialMediaButton extends Component {

  constructor(props) {
    super(props);

  }

  render(){
   return (
         <TouchableOpacity style={{}} onPress={() => this.openMedia()}>
           <View style={this.containerStyle}>
             <Icon name={this.iconName} size={this.props.size} color={this.props.color}/>
           </View>
         </TouchableOpacity>
   );
  }
}