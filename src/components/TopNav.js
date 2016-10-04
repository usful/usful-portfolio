/**
 * Created by mercedes on 2016-09-28.
 */

import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Dimensions,
    Animated,
    Text,
    ListView,
    Easing,
    TouchableHighlight,
    View
} from 'react-native';

let {width, height} = Dimensions.get('window');

const styles= StyleSheet.create({
    activeText: {
      opacity: 1,
      color: '#ffffff'

    },
    container: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        paddingTop: 20,
        width: width ,
        height:45,
        backgroundColor: '#44c7ff',
        opacity: 0.5

    },
    menuItem: {
      paddingHorizontal: 0,

    },
    text: {
        opacity: 0.5,
        color: '#ffffff',

    },

});

export default class TopNav extends Component {

    static defaultProps = {
        page:0,
        offset: 0,

    };

    constructor(props) {
        super(props);
        this.state = {
            currentTab : new Animated.Value(1),
            tab1Anim : new Animated.Value(1),
            tab2Anim: new Animated.Value(1),
            tab3Anim: new Animated.Value(1)
        };
        this.state.tab1Anim.addListener(({value}) => this.state.tab1Anim = value);
        this.state.tab2Anim.addListener(({value}) => this.state.tab2Anim = value);
        this.state.tab3Anim.addListener(({value}) => this.state.tab3Anim = value);
    }

    getTextStyle(page){

        return styles.activeText;
    }

    componentDidMount(){
        Animated.timing(
            this.state.tab1Anim,
            {
                toValue: 1,
                duration: 2000,
            },
        ).start();
        Animated.timing(
            this.state.tab2Anim,
            {
                toValue: 1,
                duration: 2000,
            },
        ).start();
        Animated.timing(
            this.state.tab3Anim,
            {
                toValue: 1,
                duration: 2000,
            },
        ).start();

    }


    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.page !== this.props.page) {
            Animated.timing(
                this.state.tab1Anim,
                {
                    toValue: nextProps.page,
                    duration: 350,
                    easing: Easing.linear
                }
            ).start();
            Animated.timing(
                this.state.tab2Anim,
                {
                    toValue: nextProps.page,
                    duration: 350,
                    easing: Easing.linear
                }
            ).start();
            Animated.timing(
                this.state.tab3Anim,
                {
                    toValue: nextProps.page,
                    duration: 350,
                    easing: Easing.linear
                }
            ).start();
        } return true;
        if (nextProps.pageTransition !== this.props.pageTransition) return true;
        if (nextProps.offset !== this.props.offset) return true;


        return false;
    }

    render() {
        return (

            <View style={styles.container}>

                <Animated.View style={[styles.menuItem,
                                    {opacity: this.state.tab1Anim.interpolate({
                                        inputRange: [0, 1, 2],
                                        outputRange: [0.8, 0.8, 1]})},
                                    {transform: [
                                        {scale: this.state.tab1Anim.interpolate({
                                            inputRange: [0, 1, 2],
                                            outputRange: [1.5, 1, 1]})},
                                        {translateX: this.state.tab1Anim.interpolate({
                                            inputRange: [0, 2],
                                            outputRange: [65, -180],
                                        })},


                                    ]}]}>
                    <Text style={[this.getTextStyle(0)]}>Products</Text>
                </Animated.View>

                <Animated.View style={[styles.menuItem,
                                        {opacity: this.state.tab2Anim.interpolate({
                                            inputRange: [0, 1, 2],
                                            outputRange: [0.8, 0.8, 1]})},
                                        {transform: [
                                            {scale: this.state.tab2Anim.interpolate({
                                                    inputRange: [0, 1, 2],
                                                    outputRange: [1, 1.5, 1]})},
                                            {translateX: this.state.tab2Anim.interpolate({
                                                inputRange: [0, 2],
                                                outputRange: [120, -120],
                                            })},


                                        ]}]}>
                    <Text style={[this.getTextStyle(1),{paddingHorizontal: 40}]}>Stories</Text>
                </Animated.View>

                <Animated.View style={[styles.menuItem,
                                        {opacity: this.state.tab3Anim.interpolate({
                                            inputRange: [0, 1, 2],
                                            outputRange: [0.8, 0.8, 1]})},
                                         {transform: [
                                             {scale: this.state.tab3Anim.interpolate({
                                                 inputRange: [0, 1, 2],
                                                 outputRange: [1, 1, 1.5]})},
                                             {translateX: this.state.tab3Anim.interpolate({
                                                 inputRange: [0, 2],
                                                 outputRange: [200, -65],
                                             })},

                                         ]}]}>
                    <Text style={this.getTextStyle(2)}>Initiatives</Text>
                </Animated.View>

            </View>
        );


    }
}