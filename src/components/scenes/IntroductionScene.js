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
let introMsg = `Planetary change is inevitable. Through technology, design, and education Usful is preparing communities for this reality. We are a conscious team of technologists, designers, developers, engineers, and architects who create Usful products with purpose.`;
let okMsg = `Perfect. You will be receiving a package from the Usful team momentarily.`;

let styles = StyleSheet.create({

  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 30,
    padding: 0,
    backgroundColor:  Colours.white,
  },
  emailInput: {
    width: width-70,
    color: Colours.white,
    borderColor:  Colours.white,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: height/6,
    marginRight: 20,
    paddingHorizontal: 20,
    height: 55,
    opacity: 0.7
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
  errorEmail:{
    color: Colours.white,
  },

  font: {
    color:  Colours.white,
    fontFamily: Font.secondaryFont.fontFamily,
    fontSize: 18,
    marginTop: 5,
  },
  introMsgContainer: {
    backgroundColor:  Colours.navBarBlack,
    marginTop: 120,
    marginHorizontal: 30,
    marginBottom: 120,
  },
  invalidText: {
    color:  Colours.white,
    fontFamily: Font.primaryFont.fontFamily,
    paddingTop: 10,
  },
  msg: {
    color:  Colours.white,
    fontFamily: Font.primaryFont.fontFamily,
    fontSize: 21,
    fontWeight: '400',
    lineHeight:28,
  },
  skip:{
    alignSelf:'flex-end',
    color:  Colours.white,
    fontSize: 20,
    marginTop: 40,
    paddingRight:20,
  },
  upperView:{
    zIndex: 12,
  },
  underView:{
    zIndex: 2,
  },
  validText: {
    color:  Colours.navBarBlack,
  },
  view :{
    backgroundColor:  Colours.navBarBlack,
    height: height,
    zIndex: 0
  },
  viewTop:{
    backgroundColor: Colours.transparent,
    height: height,
    position:'absolute',
    zIndex:12,
  },
  viewBottom:{
    backgroundColor: Colours.transparent,
    height: height,
    position:'absolute',
    zIndex: 2
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
      <View style={styles.view}>
        <View style={styles.viewTop}>
          <KeyboardHandler ref='kh' offset={100}>
            <View style={styles.introMsgContainer}>
            <Typewriter ref="introMsg" style={[styles.msg]} msg={introMsg} colour={'white'} speed={300} space={10}/>

              <TouchableOpacity style={{marginTop: Platform.OS === 'ios'? 440: 400, marginRight: -10}} onPress={() => Navigation.push(Navigation.PORTFOLIO_SCENE)}>
                <Animated.Text style={[styles.font, styles.skip,{opacity: this.state.emailFadeIn}]}>ENTER</Animated.Text>
              </TouchableOpacity>
            </View>

          </KeyboardHandler>
        </View>
      </View>
    );
  }
}