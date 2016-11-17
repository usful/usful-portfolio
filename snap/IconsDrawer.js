/**
 * Created by mercedes on 2016-11-17.
 */


import React, { Component } from 'react';
import  {
  Animated,
  CameraRoll,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import Style from '../src/styles';
import Camera from 'react-native-camera';
import Navigation from '../src/helpers/Navigation';
import TempPic from './TempPic';
import Icon from 'react-native-vector-icons/Ionicons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

let pngs = ["e8", "e9","ea","eb","ec","ed","ee","f1","f2","f4","f6","f7","f8","f9","fa","fc","fd","ff"];

export default class IconsDrawer extends Component {

  constructor(props){
    super(props);

  }

  render(){
    return
    <ScrollView {...props}
                ref={SCROLLVIEW_REF}>

      {png.map((name,i)=> <Image style={{marginHorizontal:5}} source={require(`../assets/1f1e6-1f1${name}`)}/>}

    </ScrollView>

  }
}
