'use strict';
import React, {Component} from 'react';
import {
    View,
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

import Video from 'react-native-video';
import Style from '../styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ActionSheet from '../helpers/actionSheet';
import shortDateFormatter from '../helpers/formatters/shortDate';
import ProgressBar from './ProgressBar';

const AUDIO_URI = 'https://mp3l.jamendo.com/?trackid=1312012&format=mp31&from=app-97dab294';
const PLAY_SIZE = 20;

const styles = StyleSheet.create({
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        opacity: 0.7,
        backgroundColor: Style.colours.navBarBlack,
    },
    titleContainer: {
      margin: 10,
      flex: 1,
      flexDirection: 'column',
        alignSelf: 'flex-start'
    },
    title: {
        color: '#fff',
        fontFamily: Style.fonts.secondaryFont.fontFamily,
        fontSize: 14
    },
    author: {

        color: '#fff',
        fontFamily: Style.fonts.secondaryFont.fontFamily,
        fontSize: 10
    },
    sliderWidth: {
        width: Style.width - (PLAY_SIZE*2) - 40,
    },
    videoView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    controllerView: {

        padding: 10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        width: Style.width
    },
    controlButton: {
        backgroundColor: 'transparent',
        opacity: 0.7
    },
    image: {
        height: 150,
        width: Style.width
    }
});

export default class AudioPlayer extends Component {
    static defaultProps = {
        audio: AUDIO_URI
    }
    constructor(props){
        super(props);
        this.state = {
            paused: true,
            seeking: false,
            audioDuration : 0,
            currentTime: 0,
        }
    }

    //CONTROL ACTIONS
    handlePause() {
        this.setState({paused : !this.state.paused});
    }

    handleShare() {
        ActionSheet.open(Platform.OS === 'ios' ? {
                title: 'Usful Portfolio',
                url: AUDIO_URI,
                message: `I think you might like this sound clip by Usful. Check out their stories!`,
                subject: `Usful Portfolio - ${shortDateFormatter(new Date())}`
            } :
                {
                    text: `I think you might like this sound clip by Usful. Check out their stories!\n\n${AUDIO_URI}`,
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
        this.setState({ audioDuration: e.duration });
    }
    onAudioEnd(e) {
        this.player.seek(0);
        this.setState({
            paused: true
        })
    }

    //PROGRESS BAR METHODS
    onValueChange(value){
        let newPosition = value * this.state.audioDuration;
        this.setState({ currentTime: newPosition });
    }

    onSeekStart(){
        this.setState({ seeking: true, active: true });
    }

    onSeekComplete(){
        this.player.seek( this.state.currentTime );
        this.setState({ seeking: false});
    }

    showAction() {

    }

    render() {
        let play = this.state.paused ? 'control-play' : 'control-pause';

        return(
            <View style={Style.sheets.content}>

                <Video source={{uri: AUDIO_URI}}
                       ref={(ref) => {
                   this.player = ref
                 }}
                       resizeMode="cover"
                       onLoad={ (e) => this.onLoad(e) }
                       onProgress={ (e) => this.setTime(e) }
                       onEnd={(e) => this.onAudioEnd(e) }
                       paused={this.state.paused}
                       muted={this.state.muted}
                       repeat={this.props.repeat}
                       playWhenInactive={true}
                       playInBackground={false}>
                    <View></View>
                </Video>
                <Image style={styles.image} resizeMode={'cover'} source={{uri: "https://i1.sndcdn.com/artworks-000151442816-e2zcka-t500x500.jpg"}} />
                <View style = {styles.infoContainer}>
                    <View style= {styles.titleContainer}>
                        <Text style= {styles.author}>KAYTRANADA</Text>
                        <Text style= {styles.title}>GLOWED UP ft. ANDERSON .PAAK</Text>
                    </View>
                    <View style ={[styles.controllerView]}>
                        <Icon onPress = {() => this.handlePause()} style={[styles.controlButton]} name= {play} size={PLAY_SIZE} color ={'white'}/>
                        <ProgressBar
                            onValueChange={(e) => this.onValueChange(e)}
                            onSeekStart = {() => this.onSeekStart()}
                            onSeekComplete = {() => this.onSeekComplete()}
                            currentTime = {this.state.currentTime}
                            width={styles.sliderWidth}
                            videoDuration= {this.state.audioDuration} />
                        <Icon onPress = {() => this.handleShare()} style={[styles.controlButton]} name= {'share'} size={PLAY_SIZE} color ={'white'}/>
                </View>
                </View>
            </View>
        );
    }
}
/**
 * Created by rishabh on 2016-11-17.
 *//**
 * Created by rishabh on 2016-11-22.
 */
