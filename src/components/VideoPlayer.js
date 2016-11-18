'use strict';
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Easing,
    Platform
} from 'react-native';

import Video from 'react-native-video';
import Style from '../styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ActionSheet from '../helpers/actionSheet';
import shortDateFormatter from '../helpers/formatters/shortDate';

const VIDEO_URI = 'https://www.gns3.com/assets/media/GNS3_Banner.mp4';
const PLAY_SIZE = 20;
const AnimatedIcon = Animated.createAnimatedComponent(Icon)

const styles = StyleSheet.create({
    videoView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    controllerView: {
        flexDirection: 'row',
        padding: 5,
        flex: 1,
        justifyContent: 'space-between',
        width: Style.width,
      position:'absolute',
        bottom : 0,
        backgroundColor: Style.colours.navBarBlack,
        },
    videoContainer: {
      width: Style.width,
      height: 200
    },
    playButton: {
        backgroundColor: 'transparent',
    },
    fullButton: {
        backgroundColor: 'transparent',
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
        if(this.props.controller == true) {
            Animated.timing(this.state.showControl, {
                toValue: 0.7,
                duration: 500,
                easing: Easing.in()
            }).start(this.setState({controlVisible: true}));
        }
    }

    handlePause() {
        if(this.state.controlVisible === false) {
            this.showControls();
        }
        this.setState({active: true, paused : !this.state.paused});
        setTimeout(() => this.hideControls(),1000);
    }

    handleShare() {
        ActionSheet.open(Platform.OS === 'ios' ? {
                title: 'Usful Portfolio',
                url: VIDEO_URI,
                message: `I think you might like this video by Usful. Check out their stories!`,
                subject: `Usful Portfolio - ${shortDateFormatter(this.props.content.date || new Date())}`
            } :
                {
                    text: `I think you might like this video by Usful. Check out their stories!\n\n${VIDEO_URI}`,
                    subject: `Usful Portfolio - ${shortDateFormatter(this.props.content.date || new Date())}`
                }
        )
    }

    toggleControls() {
        if(this.props.controller) {
            if (this.state.controlVisible === true) {
                this.hideControls()
            } else {
                this.showControls()
            }
        } else {

            this.setState({paused : !this.state.paused});
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
        let play = this.state.paused ? 'control-play' : 'control-pause';
        return(
            <TouchableOpacity
                                style={styles.videoView}
                                activeOpacity={1}
                                underlayColor={'transparent'}
                                delayPressOut = {2000}
                                onPressOut= {() => this.inactiveHide()}
                                onPress={() => this.toggleControls()}
                                onLongPress={() => this.showAction()}>
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
                <Animated.View style ={[controlShow, styles.controllerView]}>
                    <Icon onPress = {() => this.handlePause()} style={[styles.playButton]} name= {play} size={PLAY_SIZE} color ={'white'}/>
                    <Icon onPress = {() => this.handleShare()} style={[styles.fullButton]} name= {'share'} size={PLAY_SIZE} color ={'white'}/>
                </Animated.View>
            </TouchableOpacity>

    );
    }


}


/**
 * Created by rishabh on 2016-11-17.
 */
