'use strict';
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
Easing
} from 'react-native';


import Video from 'react-native-video';
import Style from '../../styles';
import Icon from 'react-native-vector-icons/Entypo';

const VIDEO_URI = 'https://www.gns3.com/assets/media/GNS3_Banner.mp4';
const PLAY_SIZE = 75;

const styles = StyleSheet.create({
  videoContainer : {
    width: Style.width,
    height: 200
  },
  playButton: {
    position : 'absolute',
    bottom : 100 - PLAY_SIZE/2,
    left: Style.width/2 - PLAY_SIZE/2,

  }
});

export default class VideoItem extends Component {
  static defaultProps = {
    video: VIDEO_URI
  }
  constructor(props){
    super(props);
    this.state = {
      paused: false,
      controlVisible: false,
      active: false,
      showControl : new Animated.Value(0)
    }
  }
  hideControls() {
    Animated.timing(this.state.showControl, {
      toValue: 0,
      duration: 750,
      easing: Easing.in()
    }).start(this.setState({active: false, controlVisible : false}));
  }

  showControls() {
    Animated.timing(this.state.showControl, {
      toValue: 0.7,
      duration: 500,
      easing: Easing.in()
    }).start(this.setState({controlVisible : true}));
  }

  handlePause() {
    if(this.state.controlVisible === false) {
      this.showControls();
    }
    this.setState({active: true, paused : !this.state.paused});
  }

  toggleControls() {

    if(this.state.controlVisible === true){
        this.hideControls()
    } else {
      this.showControls()
    }
  }
  inactiveHide() {
    if(this.state.active === false){
      this.hideControls()
    }
  }
  showAction() {

  }

  render() {
    let controlShow = {
      opacity : this.state.showControl
    };
    let play = this.state.paused ? 'controller-play' : 'controller-paus';
    return(

        <TouchableHighlight activeOpacity={1}
                            underlayColor={'transparent'}
                            delayPressOut = {2000}
                            onPressOut= {() => this.inactiveHide()}
                            onPress={() => this.toggleControls()}
                            onLongPress={() => this. showAction()}>
          <View>
          <Video source={{uri: VIDEO_URI}}
                 ref={(ref) => {
                   this.player = ref
                 }}
                 resizeMode="cover"
                 paused={this.state.paused}
                 muted={this.state.muted}
                 repeat={true}
                 playWhenInactive={false}
                 playInBackground={false}
                 style={styles.videoContainer}/>
          <Animated.View style= {controlShow}>
            <TouchableHighlight style={styles.playButton} underlayColor={'transparent'} delayPressOut= {1000} onPressOut = {() => this.hideControls()} onPress = {() => this.handlePause()}>
            <Icon name= {play} size={PLAY_SIZE} color ={Style.colours.darkGrey}/>
            </TouchableHighlight>
          </Animated.View>
          </View>
        </TouchableHighlight>

    );
  }


}


