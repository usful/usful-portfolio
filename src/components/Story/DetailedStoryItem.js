import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import styles from '../../styles';

export default class DetailedStoryItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text style={styles.global.title}>Hello World</Text>
            </View>

        );

    }
}/**
 * Created by rishabhnag on 2016-10-03.
 */
