'use strict';

import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Font from '../../styles/Font';
import Colours from '../../styles/Colours';
import { getAccessToken, getAuthCode } from  '../../../api/GoogleSheets';
import Typewriter from '../../Typewriter';
import Navigation from '../../helpers/Navigation';

let {width, height} = Dimensions.get('window');
let introMsg = `Welcoming Text goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Are you ready to be Usful?`;
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
    this.refs.introMsg.startAnim(true, Animated.timing(this.state.emailFadeIn, {toValue: 1, duration: 1000}), 10);
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
          <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={0}>
            <View style={styles.introMsgContainer}>
            <Typewriter ref="introMsg" style={[styles.msg]} msg={introMsg} colour={'white'} speed={300} space={10}/>
              <Animated.View style={[{opacity: this.state.emailFadeIn}]}>
                <TextInput
                  ref="email"
                  placeholder="ee@ee.com"
                  placeholderTextColor='white'
                  clearButtonMode='while-editing'
                  keyboardAppearance='dark'
                  style={styles.emailInput}

                  onChangeText={(text) => this.setState({email: text})}
                  onSubmitEditing={() => this.validateEmail(this.state.email)}
                  value={this.state.email}/>
                <Text style={!this.state.valid? styles.invalidText : styles.valid}>{this.getEmailValidationText()}</Text>
              </Animated.View>
              <TouchableOpacity onPress={() => Navigation.push(Navigation.PORTFOLIO_SCENE)}>
                <Animated.Text style={[styles.font, styles.skip,{opacity: this.state.emailFadeIn}]}>SKIP</Animated.Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={[styles.introMsgContainer,styles.viewBottom, this.state.flip? styles.upperView: styles.underView]}>
            <Animated.View>
              <Typewriter ref="okMsg" style={styles.msg} msg={okMsg} colour={'white'} speed={300} space={15}/>
            </Animated.View>
            <Animated.View style={[{opacity: this.state.enterOurWorldFadeIn}]}>
              <TouchableOpacity style={styles.enterOurWorld}
                                onPress={() => Navigation.push(Navigation.PORTFOLIO_SCENE)}>
                <Text style={[styles.font]}>ENTER OUR WORLD</Text></TouchableOpacity>
            </Animated.View>
          </View>

      </View>
    );
  }
}