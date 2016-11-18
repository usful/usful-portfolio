import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Slider,
    Text,
} from 'react-native';

import Style from '../styles';
import timeFormatter from '../helpers/formatters/timeFormatter';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            songDuration: 0,
        }

    }

    onSlidingStart(){
        this.setState({ sliding: true });
    }

    onSlidingChange(value){
        let newPosition = value * this.state.songDuration;
        this.setState({ currentTime: newPosition });
    }

    onSlidingComplete(){
        this.refs.audio.seek( this.state.currentTime );
        this.setState({ sliding: false });
    }

    render() {
        let songPercentage;
        if( this.state.songDuration !== undefined ){
            songPercentage = this.state.currentTime / this.state.songDuration;
        } else {
            songPercentage = 0;
        }
        return (
            <View style={ styles.sliderContainer }>
                <Slider
                    onSlidingStart={ () => this.onSlidingStart() }
                    onSlidingComplete={ () => this.onSlidingComplete() }
                    onValueChange={ () => this.onSlidingChange() }
                    minimumTrackTintColor='#851c44'
                    style={ styles.slider }
                    trackStyle={ styles.sliderTrack }
                    thumbStyle={ styles.sliderThumb }
                    value={ songPercentage }/>

                <View style={ styles.timeInfo }>
                    <Text style={ styles.time }>{ timeFormatter(this.state.currentTime)  }</Text>
                    <Text style={ styles.timeRight }>- { timeFormatter( this.state.songDuration - this.state.currentTime ) }</Text>
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
    sliderContainer: {
        width: Style.width - 40,
    },
    slider: {
        height: 20,
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
    }

});