'use strict';
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';


import VideoPlayer from '../VideoPlayer';
import Style from '../../styles';

const styles = StyleSheet.create({
  videoContainer : {
    width: Style.width,
    height: 200
  }
});

export default class VideoItem extends Component {

  constructor(props){
    super(props);

  }

  render() {

      return (

          <VideoPlayer repeat={true} style={styles.videoContainer}/>
      );
  }
}


