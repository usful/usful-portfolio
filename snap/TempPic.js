/**
 * Created by mercedes on 2016-11-16.
 */


import React, { Component } from 'react';
import  {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  PixelRatio,
  Platform,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


export default class TempPic extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.tempPic);
  }

  render(){
    return
    <View style={{backgroundColor: 'black', flex: 1 }}>
      <View style={{flex: 0, flexDirection: 'row',  height: 60}}>
        <Icon name="ios-arrow-back" color='white' size={60}></Icon>
      </View>
      <View style={{flex: 0, flexDirection: 'row',  height: 60}}>
        <Icon name="close" color='white' size={60}></Icon>
      </View>
      <Image style={{flex:1}} source={require(this.props.tempPic)}>

      </Image>

      <View style={{flex:0 , flexDirection: 'row', height: 40}}>
        <Icon name="ios-reverse-camera-outline" size={30}></Icon>
      </View>
    </View>
  }
}