'use strict';

import React, { Component } from 'react';
import ReactNative, {
  Animated,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';


import { getAccessToken, updateCell, getAuthCode } from  '../../../api/GoogleSheets';
import KeyboardHandler from '../KeyboardHandler';
import Typewriter from '../../Typewriter';
import Navigation from '../../helpers/Navigation';

let {width, height} = Dimensions.get('window');
let introMsg = `Welcoming Text goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Are you ready to be Usful?`;
let okMsg = `Perfect. You will be receiving a package from the Usful team momentarily.`;

let styles = StyleSheet.create({

  container: {
    alignItems: 'flex-start',
    backgroundColor: 'black',
    justifyContent: 'center',
    marginLeft: 30,
    padding: 0,

  },

  emailInput: {
    width: 300,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    height: 55,
    opacity: 0.7


  },
  enterOurWorld: {
    width: 300,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    height: 55,
  },
  errorEmail:{
    color:'white',
  },

  font: {
    fontFamily: 'Courier New',
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },

  skip:{
    fontSize: 20,
    alignSelf:'flex-end',
    color: 'white',
    paddingRight:20,
    marginTop: 40,
    marginLeft: 255,
  },

  welcomeText: {
    color: 'white',
    fontSize: 21,
    fontWeight: '400',
    lineHeight:28,
    marginTop: 120,
    marginRight: 70,
    marginBottom: 120,
  },
  view :{
    backgroundColor: 'black',
    height: height,
    zIndex: 0
  },
  upperView:{
    zIndex: 12,
  },
  underView:{
    zIndex: 2,
  },
  viewTop:{
    position:'absolute',
    backgroundColor: 'transparent',
    height: height,
    zIndex:12,
  },
  viewBottom:{
    position:'absolute',
    backgroundColor: 'transparent',
    height: height,
    zIndex: 2
  },
});

export default class IntroductionScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      valid: false,
      emailFadeIn: new Animated.Value(0),
      enterOurWorldFadeIn : new Animated.Value(0),
      errorMsg: "Email is invalid, please try again!",
      okMsg: "You are good!",
      flip: false,
      introMsgFadeIn: false,
      okMsgFadeIn: false,
    };
  }

  componentDidMount() {
    this.refs.introMsg.startAnim(true, Animated.timing(this.state.emailFadeIn, {toValue: 1, duration: 1000}));
  }

  getEmailValidationText() {
    if (!this.state.valid) {
      return <Text>{this.state.errorMsg}</Text>;
    }
    return <Text>{this.state.okMsg}</Text>;
  }

  showOkMsg(){
    this.refs.introMsg.startAnim(false, Animated.timing(this.state.emailFadeIn, {toValue: 0, duration: 10}), 10);
    this.refs.okMsg.startAnim(true, Animated.timing(this.state.enterOurWorldFadeIn, {toValue: 1, duration: 1000}));
    this.setState({flip:true});
  }


  validateEmail(email) {
    let regex = new RegExp(/^\S+@((?=[^.])[\S]+\.)*(?=[^.])[\S]+\.(?=[^.])[\S]+$/);
    if (regex.test(email)) {
      this.setState({valid: true}, () => (getAuthCode()));
      this.showOkMsg();
      return true;
    }
    return false;
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.viewTop}>
          <KeyboardHandler ref='kh' offset={100}>
            <View style={styles.container}>
            <Typewriter ref="introMsg" style={styles.font, styles.welcomeText} msg={introMsg} colour={'white'} speed={300} space={15}/>
              <Animated.View style={{opacity: this.state.emailFadeIn}}>
                <TextInput
                  ref="email"
                  placeholder="Email Input"
                  placeholderTextColor='white'
                  clearButtonMode='while-editing'
                  keyboardAppearance='dark'
                  style={styles.emailInput}
                  onFocus={()=>this.refs.kh.inputFocused(this, 'email')}
                  onChangeText={(text) => this.setState({email: text})}
                  onSubmitEditing={() => this.validateEmail(this.state.email)}
                  value={this.state.email}/>
                <Text>{this.getEmailValidationText()}</Text>
              </Animated.View>
              <TouchableHighlight onPress={() => Navigation.push(Navigation.PORTFOLIO_SCENE)}>
                <Animated.Text style={[styles.font, styles.skip,{opacity: this.state.emailFadeIn}]}>SKIP</Animated.Text>
              </TouchableHighlight>
            </View>

          </KeyboardHandler>
        </View>
        <View style={[styles.container,styles.viewBottom, this.state.flip? styles.upperView: styles.underView]}>
            <Animated.View>
              <Typewriter ref="okMsg" style={styles.font, styles.welcomeText} msg={okMsg} colour={'white'} speed={300} space={15}/>
            </Animated.View>
            <Animated.View style={[styles.enterOurWorld,{opacity: this.state.enterOurWorldFadeIn}]} onPress={() => Navigation.push(Navigation.PORTFOLIO_SCENE)}>
              <TouchableHighlight><Text style={[styles.font]}>Enter Our World</Text></TouchableHighlight>
            </Animated.View>
          </View>

      </View>
    );
  }
}