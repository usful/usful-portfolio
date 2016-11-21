import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Style from '../styles';
import formattedTime from '../helpers/formatters/timeFormatter';
import Slider from 'react-native-slider';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            seeking: false,
        }

    }

    onSeekStart(){
        this.setState({ seeking: true });
    }

    onSeekComplete(){
        this.props.player.seek(this.props.currentTime);
        this.setState({ seeking: false });
    }

    render() {
        let videoPercentage;
        if( this.props.videoDuration !== undefined ){
            videoPercentage = this.props.currentTime / this.props.videoDuration;
        } else {
            videoPercentage = 0;
        }
        return (
            <View>
                <Slider
                    onSlidingStart={ (e) => this.onSeekStart(e) }
                    onValueChange = {(e) => this.props.onValueChange(e)}
                    onSlidingComplete={ (e) => this.onSeekComplete(e) }
                    minimumTrackTintColor='#851c44'
                    style={[this.props.width, styles.slider ]}
                    trackStyle={ styles.sliderTrack }
                    thumbStyle={ styles.sliderThumb }
                    value={ videoPercentage }/>
                <View style={ styles.timeInfo }>
                    <Text style={ styles.time }>{ formattedTime(this.props.currentTime)  }</Text>
                    <Text style={ styles.timeRight }>- { formattedTime( this.props.videoDuration - this.props.currentTime ) }</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    slider: {
        height: 20,
        marginHorizontal : 10
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


});