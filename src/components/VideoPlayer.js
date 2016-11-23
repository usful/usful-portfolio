'use strict';
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Easing,
    Platform,
    TouchableWithoutFeedback,
    Text,
} from 'react-native';

import Video from 'react-native-video';
import Style from '../styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ActionSheet from '../helpers/actionSheet';
import shortDateFormatter from '../helpers/formatters/shortDate';
import formattedTime from '../helpers/formatters/timeFormatter';
import Slider from 'react-native-slider';
import ProgressBar from './ProgressBar';

const VIDEO_URI = 'https://www.gns3.com/assets/media/GNS3_Banner.mp4';
const CONTROLLER_ICON_SIZE = 20;
const OVERLAY_ICON_SIZE = 50;

const styles = StyleSheet.create({
    sliderWidth: {
        width: Style.width - (CONTROLLER_ICON_SIZE*2) - 40,
    },
    overlayContainer: {
        width: Style.width,
        position:'absolute',
        bottom : 0,
        height: 200,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controllerView: {
        flexDirection: 'row',
        padding: 10,
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
    controlButton: {
        backgroundColor: 'transparent',
    },
    overlayButton: {
        backgroundColor: 'transparent',
        opacity: 0.8
    },
});

export default class VideoPlayer extends Component {
    static defaultProps = {
        video: VIDEO_URI
    }
    constructor(props){
        super(props);
        this.state = {
            paused: true,
            controlVisible: false,
            active: false,
            showControl : new Animated.Value(0),
            seeking: false,
            videoDuration : 0,
            currentTime: 0,
        }
    }

    //CONTROL ANIMATIONS
    hideControls(delay) {
        Animated.timing(this.state.showControl, {
            toValue: 0,
            duration: 750,
            delay: delay || 0,
            easing: Easing.in()
        }).start(this.setState({active: false, controlVisible : false}));
    }

    showControls() {
        if(this.props.controller) {
            Animated.timing(this.state.showControl, {
                toValue: 0.7,
                duration: 500,
                easing: Easing.in()
            }).start(this.setState({controlVisible: true}));
        }
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

    //CONTROL ACTIONS
    handlePause() {
        if(this.state.controlVisible === false) {
            this.showControls();
        }
        this.setState({active: true, paused : !this.state.paused});
    }

    handleShare() {
        ActionSheet.open(Platform.OS === 'ios' ? {
                title: 'Usful Portfolio',
                url: VIDEO_URI,
                message: `I think you might like this video by Usful. Check out their stories!`,
                subject: `Usful Portfolio - ${shortDateFormatter(new Date())}`
            } :
                {
                    text: `I think you might like this video by Usful. Check out their stories!\n\n${VIDEO_URI}`,
                    subject: `Usful Portfolio - ${shortDateFormatter(new Date())}`
                }
        )
    }

    //PLAYER METHODS
    setTime(e){
            if(!this.state.seeking) {
                this.setState({currentTime: e.currentTime});
            }
    }
    onLoad(e){
        this.setState({ videoDuration: e.duration });
    }
    onVideoEnd(e) {
        this.player.seek(0);
        this.state.showControl.setValue(0);
        this.setState({
            controlVisible: false,
            paused: true
        })
    }

    //PROGRESS BAR METHODS
    onValueChange(value){
        let newPosition = value * this.state.videoDuration;
        this.setState({ currentTime: newPosition });
        this.player.seek( this.state.currentTime );
    }

    onSeekStart(){
        this.setState({ seeking: true, active: true });
    }

    onSeekComplete(){
        this.setState({ seeking: false});
    }

    //PAUSE OVERLAY
    renderOverlay(){
        if(this.state.paused && !this.state.controlVisible){
            return(<View style={styles.overlayContainer}>
                <Icon onPress = {() => this.handlePause()} style={[styles.overlayButton]} name= {'control-play'} size={OVERLAY_ICON_SIZE} color ={'white'}/>
            </View>)
        } else{
            return
        }


    }

    //TODO: Link to radial menu
    showAction() {

    }

    render() {
        let controlShow = {
            opacity : this.state.showControl
        };
        let play = this.state.paused ? 'control-play' : 'control-pause';

        return(
            <TouchableOpacity
                                style={Style.sheets.content}
                                activeOpacity={1}
                                underlayColor={'transparent'}
                                delayPressOut = {3000}
                                onPressOut= {() => this.inactiveHide()}
                                onPress={() => this.toggleControls()}
                                onLongPress={() => this.showAction()}>
                <Video source={{uri: VIDEO_URI}}
                           ref={(ref) => {
                   this.player = ref
                 }}
                           resizeMode="cover"
                           onLoad={ (e) => this.onLoad(e) }
                           onProgress={ (e) => this.setTime(e) }
                           onEnd={(e) => this.onVideoEnd(e) }
                           paused={this.state.paused}
                           muted={this.state.muted}
                           repeat={this.props.repeat}
                           playWhenInactive={true}
                           playInBackground={false}
                           style={styles.videoContainer}>
                    <View></View>
                </Video>
                <Animated.View style ={[controlShow, styles.controllerView]}>
                    <Icon onPress = {() => this.handlePause()} style={[styles.controlButton]} name= {play} size={CONTROLLER_ICON_SIZE} color ={'white'}/>
                    <ProgressBar
                        onValueChange={(e) => this.onValueChange(e)}
                        onSeekStart = {() => this.onSeekStart()}
                        onSeekComplete = {() => this.onSeekComplete()}
                        currentTime = {this.state.currentTime}
                        width={styles.sliderWidth}
                        videoDuration= {this.state.videoDuration} />
                    <Icon onPress = {() => this.handleShare()} style={[styles.controlButton]} name= {'share'} size={CONTROLLER_ICON_SIZE} color ={'white'}/>
                </Animated.View>
                {this.renderOverlay()}
            </TouchableOpacity>

    );
    }
}
/**
 * Created by rishabh on 2016-11-17.
 */