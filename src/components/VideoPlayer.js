'use strict';
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Easing,
    Platform,
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
const PLAY_SIZE = 20;
const AnimatedIcon = Animated.createAnimatedComponent(Icon)

const styles = StyleSheet.create({
    sliderWidth: {
        width: Style.width - (PLAY_SIZE*2) - 40,
    },
    sliderTrack: {
        height: 2,
        backgroundColor: '#333',
    },
    sliderThumb: {
        width: 10,
        height: 10,
        backgroundColor: '#f62976',
        borderRadius: 10 / 2,
        shadowColor: 'red',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        shadowOpacity: 1,
    },
    videoView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
    timeInfo: {
        flexDirection: 'row',
    },
    time: {
        color: '#FFF',
        flex: 1,
        fontSize: 10,
    },
    timeRight: {
        color: '#FFF',
        textAlign: 'right',
        flex: 1,
        fontSize: 10,
    },
});

export default class VideoPlayer extends Component {
    static defaultProps = {
        video: VIDEO_URI
    }
    constructor(props){
        super(props);
        this.state = {
            overlay: true,
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
    //CONTROL ACTIONS
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
                subject: `Usful Portfolio - ${shortDateFormatter(new Date())}`
            } :
                {
                    text: `I think you might like this video by Usful. Check out their stories!\n\n${VIDEO_URI}`,
                    subject: `Usful Portfolio - ${shortDateFormatter(new Date())}`
                }
        )
    }

    //PROGRESS METHODS
    setTime(e){
            this.setState({ currentTime: e.currentTime });
    }

    onLoad(e){
        this.setState({ videoDuration: e.duration });
    }
    onVideoEnd(e) {
        this.player.seek(0);
        this.setState({
            overlay: true,
            paused: true
        })
    }
    onValueChange(value){
        let newPosition = value * this.state.videoDuration;
        this.setState({ currentTime: newPosition });
    }

    onSeek() {

        this.player.seek( this.state.currentTime );
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
                    <Icon onPress = {() => this.handlePause()} style={[styles.controlButton]} name= {play} size={PLAY_SIZE} color ={'white'}/>
                    <ProgressBar onValueChange={(e) => this.onValueChange(e)} currentTime = {this.state.currentTime} width={styles.sliderWidth} seek={this.onSeek.bind(this)} videoDuration= {this.state.videoDuration} />
                    <Icon onPress = {() => this.handleShare()} style={[styles.controlButton]} name= {'share'} size={PLAY_SIZE} color ={'white'}/>
                </Animated.View>
            </TouchableOpacity>
            

    );
    }
}
/**
 * Created by rishabh on 2016-11-17.
 */
/*
let videoPercentage;
if( this.state.videoDuration !== undefined ){
    videoPercentage = this.state.currentTime / this.state.videoDuration;
} else {
    videoPercentage = 0;
}

<View style= {styles.sliderContainer}>

    <Slider
        onSlidingStart={ (e) => this.onSeekStart(e) }
        onSlidingComplete={ (e) => this.onSeekComplete(e) }
        onValueChange={ (e) => this.onValueChange(e) }
        minimumTrackTintColor='#851c44'
        style={ styles.slider }
        trackStyle={ styles.sliderTrack }
        thumbStyle={ styles.sliderThumb }
        value={ videoPercentage }/>
    <View style={ styles.timeInfo }>
        <Text style={ styles.time }>{ formattedTime(this.state.currentTime)  }</Text>
        <Text style={ styles.timeRight }>- { formattedTime( this.state.videoDuration - this.state.currentTime ) }</Text>
    </View>
</View>*/
