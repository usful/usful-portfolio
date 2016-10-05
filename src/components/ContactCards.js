import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    Easing,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Colours from '../styles/Colours';

const TEXT_STYLE = {
  fontStyle: 'italic',
  color: Colours.textGrey,
  fontSize: 18,
};

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#00BFFF',
        width: 300,
        height: 450,
        paddingVertical: 30,
        backgroundColor: '#cfebf9',
        alignItems: 'center',
        marginHorizontal:10,
    },
    cardImage: {
        borderWidth:1,
        borderColor: '#FFF',

        height: 180,
        borderRadius: 90,
        width: 180,
        backgroundColor:'white'
    },
    contactInfo: {
        alignItems: 'center'
    },
    textName: {
        paddingTop: 30,
        fontWeight: '600',
        fontSize : 30,
        color: Colours.textGrey
    },
    textEmail: {
      ... TEXT_STYLE
    },
    textInstagram: {
      ... TEXT_STYLE
    },
    textPhone: {
      ... TEXT_STYLE
    },
    textPositionTitle: {
      paddingBottom: 20,
      color: Colours.textGrey,
      fontSize: 18,
    },
});


export default class ContactCards extends Component {

  static defaultProps = {
    index: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      animate: new Animated.Value(0),
      totalTabs: this.props.totalTabs
    };
  }

  render() {

    let opacity = this.state.animate.interpolate({
      inputRange: [0, this.props.index, this.state.totalTabs],
      outputRange: [0.8, 1, 0.8]
    });

    let scale = this.state.animate.interpolate({
      inputRange: [0, this.props.index, this.state.totalTabs],
      outputRange: [1, 2, 1]
    });

    return (
      <Animated.View style={[styles.container]}>
        <Animated.View
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          style={[styles.card, {opacity: opacity, transform: [{scale: scale}]} ]}>
          <Image source={{uri: this.props.uri}} style={styles.cardImage}/>
          <View style={styles.contactInfo}>
            <Text style={styles.textName}>Team Member</Text>
            <Text style={styles.textPositionTitle}>Position /Contribution</Text>
            <Text style={styles.textInstagram}>I: handle</Text>
            <Text style={styles.textPhone}>T: @handle </Text>
            <Text style={styles.textEmail}>E: name@email.com</Text>
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
}




