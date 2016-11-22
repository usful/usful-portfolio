'use strict';
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';


import AudioPlayer from '../AudioPlayer';
import Style from '../../styles';

const styles = StyleSheet.create({
    audioContainer : {
        width: Style.width,
        height: 100,
        marginHorizontal: 20
    }
});

export default class VideoItem extends Component {

    constructor(props){
        super(props);

    }

    render() {

        return (
            <AudioPlayer style={styles.audioContainer}/>
        );
    }
}


