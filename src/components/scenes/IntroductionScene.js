'use strict';

import React, { Component } from 'react';
import ReactNative, {
  Animated,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Text,
  Platform,
  View,
  TouchableOpacity,
TouchableHighlight
} from 'react-native';

import Font from '../../styles/Font';
import Colours from '../../styles/Colours';
import { getAccessToken, getAuthCode } from  '../../../api/GoogleSheets';
import KeyboardHandler from '../KeyboardHandler';
import Typewriter from '../../Typewriter';
import Navigation from '../../helpers/Navigation';

let {width, height} = Dimensions.get('window');
let introMsg = `Planetary change is inevitable. Through technology, design, and education. Usful is preparing communities for this reality. We are a conscious team of technologists, designers, developers, engineers, and architects who create Usful products with purpose.`;
let okMsg = `Perfect. You will be receiving a package from the Usful team momentarily.`;

let styles = StyleSheet.create({

  container: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    marginTop: 100,
    marginLeft: 30
  },
   enter: {
     marginTop: 30,
     alignSelf: 'flex-end' ,
     marginRight: 40
  },
  enterOurWorld: {
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    height: 55,
    padding: 10,
    marginTop: 150,
    width: width-60,
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
  invalidText: {
    color:  Colours.white,
    fontFamily: Font.primaryFont.fontFamily,
    paddingTop: 10,
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
      email: "abc@abc.com",
      valid: true,
      emailFadeIn: new Animated.Value(0),
      enterOurWorldFadeIn : new Animated.Value(0),
      errorMsg: "Email is invalid, please try again!",
      okMsg: "",
      flip: false,
      introMsgFadeIn: false,
      okMsgFadeIn: false,
    };
  }

  componentDidMount() {
    this.refs.introMsg.startAnim(true, Animated.timing(this.state.emailFadeIn, {toValue: 1, duration: 1000}), 50);
  }

  getEmailValidationText() {
    if (!this.state.valid) {
      return <Text>{this.state.errorMsg}</Text>;
    }
    return <Text>{this.state.okMsg}</Text>;
  }

  showOkMsg(){
    this.refs.introMsg.startAnim(false, Animated.timing(this.state.emailFadeIn, {toValue: 0, duration: 20}), 0);
    this.refs.okMsg.startAnim(true, Animated.timing(this.state.enterOurWorldFadeIn, {toValue: 1, duration: 1000}),10);
    this.setState({flip:true});
  }


  validateEmail(email) {
    let regex = new RegExp(/^\S+@((?=[^.])[\S]+\.)*(?=[^.])[\S]+\.(?=[^.])[\S]+$/);
    if (regex.test(email)) {
      //TODO: email post to google doc
      //this.setState({valid: true}, () => (getAuthCode()));
      this.showOkMsg();
      return true;
    }
    this.setState({valid: false}, () => (this.getEmailValidationText()));
    return false;
  }

  render() {
    return (
        <ScrollView style={styles.view}>
              <View style={styles.container}>
                <Typewriter ref="introMsg" style={[styles.msg]} msg={introMsg} colour={'white'} speed={300} space={10}/>
                <TouchableOpacity style={styles.enter} onPress={() => Navigation.push(Navigation.PORTFOLIO_SCENE)}>
                  <Animated.Text style={[styles.font, styles.skip,{opacity: this.state.emailFadeIn}]}>ENTER</Animated.Text>
                </TouchableOpacity>
              </View>
        </ScrollView>


    );
  }
}