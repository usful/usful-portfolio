'use strict';
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';


import Video from 'react-native-video';
import Style from '../styles';
import Icon from 'react-native-vector-icons/Entypo';

const VIDEO_URI = 'https://www.gns3.com/assets/media/GNS3_Banner.mp4';
const PLAY_SIZE = 50;
const AnimatedIcon = Animated.createAnimatedComponent(Icon)

const styles = StyleSheet.create({
    videoView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    videoContainer: {
      width: Style.width,
      height: 200
    },
    playButton: {
        backgroundColor: 'transparent',
        position : 'absolute',
        bottom : 100 - PLAY_SIZE/2,
        left: Style.width/2 - PLAY_SIZE/2,
    }
});

export default class VideoPlayer extends Component {
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
        setTimeout(() => this.hideControls(),1000);
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
            <TouchableOpacity
                                style={styles.videoView}
                                activeOpacity={1}
                                underlayColor={'transparent'}
                                delayPressOut = {2000}
                                onPressOut= {() => this.inactiveHide()}
                                onPress={() => this.toggleControls()}
                                onLongPress={() => this. showAction()}>
                <Video source={{uri: VIDEO_URI}}
                           ref={(ref) => {
                   this.player = ref
                 }}
                           resizeMode="cover"
                           paused={this.state.paused}
                           muted={this.state.muted}
                           repeat={this.props.repeat}
                           playWhenInactive={true}
                           playInBackground={false}
                           style={styles.videoContainer}>
                    <View></View>
                </Video>
                <AnimatedIcon  onPress = {() => this.handlePause()} style={[controlShow,styles.playButton]} name= {play} size={PLAY_SIZE} color ={Style.colours.navBarBlack}/>

            </TouchableOpacity>

    );
    }


}


/**
 * Created by rishabh on 2016-11-17.
 */
