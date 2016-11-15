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

const styles = StyleSheet.create({
  videoContainer : {
    width: Style.width,
    height: 200
  },
  button: {
    position : 'absolute',
    bottom : 62.5,
    left: Style.width/2 - 37.5,

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
      showControl : new Animated.Value(0)
    }
  }

  handlePause() {
    if(this.state.controlVisible === false) {
      Animated.timing(this.state.showControl, {
        toValue: 0.7,
        duration: 500,
        easing: Easing.in()
      }).start(this.setState({controlVisible: true}));
    }
    this.setState({paused : !this.state.paused});
    if(this.state.paused === true) {
      Animated.timing(this.state.showControl, {
        toValue: 0,
        delay: 500,
        duration: 500,
        easing: Easing.in()
      }).start(this.setState({controlVisible : false}));
    }
  }

  showControls() {

      Animated.timing(this.state.showControl, {toValue: 0.7, duration: 500, easing: Easing.in()}).start(this.setState({controlVisible : true}));
    if(this.state.controlVisible === true){
      Animated.timing(this.state.showControl, {toValue: 0, duration: 500, easing: Easing.in()}).start(this.setState({controlVisible : false}));
    }

  }

  showAction() {

  }

  render() {
    let controlShow = {
      opacity : this.state.showControl
    };
    let iconName = this.state.paused ? 'controller-play' : 'controller-paus';
    return(

        <TouchableHighlight activeOpacity={1}
                            onPress={() => this.showControls()}
                            onLongPress={() => this.showAction()}>
          <View>
          <Video source={{uri: VIDEO_URI}}
                 ref={(ref) => {
                   this.player = ref
                 }}
                 resizeMode="cover"
                 paused={this.state.paused}
                 muted={true}
                 repeat={true}
                 playWhenInactive={false}
                 playInBackground={false}
                 style={styles.videoContainer}/>
          <Animated.View style= {controlShow}>
            <TouchableHighlight style={styles.button} underlayColor={'transparent'} onPress = {() => this.handlePause()}>
            <Icon name= {iconName} size={75} color ={Style.colours.darkGrey}/>
            </TouchableHighlight>
          </Animated.View>
          </View>
        </TouchableHighlight>

    );
  }


}


