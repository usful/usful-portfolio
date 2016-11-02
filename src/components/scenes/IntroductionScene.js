'use strict';

import React, { Component } from 'react';
import ReactNative, {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  View
} from 'react-native';

import Font from '../../styles/Font';
import Colours from '../../styles/Colours';
import Typewriter from '../../Typewriter';
import Navigation from '../../helpers/Navigation';

let {width, height} = Dimensions.get('window');
let introMsg = `Planetary change is inevitable. Through technology, design, and education. Usful is preparing communities for this reality. We are a conscious team of technologists, designers, developers, engineers, and architects who create Usful products with purpose.`;

let styles = StyleSheet.create({

  container: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    marginTop: height * 0.15,
    marginHorizontal: 30
  },
  enter: {
     marginTop: height * 0.1,
     alignSelf: 'flex-end' ,
     marginRight: width * 0.1
  },
  font: {
    color:  Colours.white,
    fontFamily: Font.secondaryFont.fontFamily,
    fontSize: 18,
    marginTop: 5,
  },
  introMsgContainer: {
    backgroundColor:  Colours.navBarBlack,
  },
  msg: {
    color:  Colours.white,
    fontFamily: Font.primaryFont.fontFamily,
    fontSize: 18,
    fontWeight: '400',
    lineHeight:23,
  },
  skip:{
    alignSelf:'flex-end',
    color:  Colours.white,
    fontSize: 20,
  },
  view :{
    backgroundColor:  Colours.navBarBlack,
  },
});

export default class IntroductionScene extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      valid: true,
      emailFadeIn: new Animated.Value(0),
      enterOurWorldFadeIn : new Animated.Value(0),
      okMsg: "",
      introMsgFadeIn: false,
      okMsgFadeIn: false,
    };
  }
  
  componentDidMount() {
    this.refs.introMsg.start(true);
  }
  
  onFinished() {
    Animated.timing(this.state.emailFadeIn, {toValue: 1, duration: 1000}).start();
  }
  
  render() {
    return (
        <ScrollView style={styles.view}>
              <View style={styles.container}>
                <Typewriter ref="introMsg"
                            style={[styles.msg]}
                            msg={introMsg}
                            colour={'white'}
                            speed={100}
                            space={10}
                            height={30}
                            onFinished={() => this.onFinished()}/>
                <TouchableOpacity style={styles.enter} onPress={() => Navigation.push(Navigation.PORTFOLIO_SCENE)}>
                  <Animated.Text style={[styles.font, styles.skip,{opacity: this.state.emailFadeIn}]}>ENTER</Animated.Text>
                </TouchableOpacity>
              </View>
        </ScrollView>
    );
  }
}