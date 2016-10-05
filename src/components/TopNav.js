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
    TouchableOpacity,
    TouchableHighlight,
    View
} from 'react-native';

let {SCREEN_WIDTH, height} = Dimensions.get('window');

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
        width: SCREEN_WIDTH ,
        height:45,
        backgroundColor: '#44c7ff',
        opacity: 0.5

    },
    menuItem: {
      paddingHorizontal: 0,

    },
    navBarTitle: {
      paddingHorizontal: 40
    },
    text: {
        opacity: 0.5,
        color: '#ffffff',

    },

});
let animationProgress =  new Animated.Value(0);


export default class TopNav extends Component {

    constructor(props) {
        super(props);

    }

    getTextStyle(page){

        return styles.activeText;
    }

    shouldComponentUpdate(nextProps, nextState){

      if (this.props.pageTransition !== nextProps.pageTransition) {

        animationProgress.setValue(nextProps.pageTransition);

        return true;
      }
      if (this.props.previousIndex !== nextProps.previousIndex) return true;
      if (this.props.index !== nextProps.index) return true;

      return false;
    }
    isGoingBack(){
      if (this.props.previousIndex < this.props.index) {
        return true;
      }
      return false;
    }

    render() {
        return (

            <View style={styles.container}>

              <Animated.View
                style={[
                  {
                    transform: [
                      {
                        translateX: animationProgress.interpolate({
                          inputRange: [0, 1, 2],
                          outputRange: [130, 20, -120],
                        }),
                      },
                    ],
                    opacity: animationProgress.interpolate({
                      inputRange: [0, 1, 2],
                      outputRange: [1, 0.7, 0.7],
                    }),
                  },
                ]}>


                <Text style={[this.getTextStyle(1),styles.navBarTitle]}>Products</Text>
              </Animated.View>
              <Animated.View
                style={[
                  {
                    transform: [
                      {
                        translateX: animationProgress.interpolate({
                          inputRange: [0, 1, 2],
                          outputRange: [110, 0, -100],
                        }),
                      },
                    ],
                    opacity: animationProgress.interpolate({
                      inputRange: [0, 1, 2],
                      outputRange: [0.5, 1, 0.5],
                    }),
                  },
                ]}>

                <Text style={[this.getTextStyle(1),styles.navBarTitle]}>Stories</Text>
              </Animated.View>
              <Animated.View
                style={[
                  {
                    transform: [
                      {
                        translateX: animationProgress.interpolate({
                          inputRange: [0, 1, 2],
                          outputRange: [110, -20, -130],
                        }),
                      },
                    ],
                    opacity: animationProgress.interpolate({
                      inputRange: [0, 1, 2],
                      outputRange: [0.7,0.7,1] ,
                    }),
                  },
                ]}>

                <Text style={[this.getTextStyle(1),styles.navBarTitle]}>Initiatives</Text>
              </Animated.View>



            </View>
        );


    }
}