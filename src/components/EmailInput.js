/**
 * Created by mercedes on 2016-10-04.
 */
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



import {updateCell, getSheetValues} from  '../../api/GoogleSheets';
import KeyboardHandler from './KeyboardHandler';
import style from '../styles';
let {width, height} = Dimensions.get('window');
let words = `Welcoming Text goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Are you ready to be Usful?`;

let styles = StyleSheet.create({

  view:{
    backgroundColor: 'black',
    height: height,
  },
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


  },
  errorEmail:{
    color:'white',
  },

  font: {
    fontFamily: 'Courier New'
  },

  skip:{
    fontSize: 20,
    alignSelf:'flex-end',
    color: 'white',
    paddingRight:20,
    marginTop: 40,
    marginRight: 25,
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

});

export default class EmailInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      valid: false,
      emailFadeIn: new Animated.Value(0),
      errorMsg: "Email is invalid, please try again!",
      okMsg: "You are good!"
    };
  }

  componentDidMount(){

    let animationArray = [];
    for (let anim of this.anims) {
      animationArray.push(Animated.timing(anim, {toValue: 1, duration: 10}));
    }
    animationArray.push(Animated.timing(this.state.emailFadeIn, {toValue: 1, duration: 1000}));
    Animated.sequence(animationArray).start();
    getSheetValues(console.log("getSheetValues"));
  }


  getEmailValidationText() {
    if (!this.state.valid) {
      return <Text>{this.state.errorMsg}</Text>;
    }
    return <Text>{this.state.okMsg}</Text>;
  }


  validateEmail(email) {
    console.log("validating");
    let regex =  new RegExp(/^\S+@((?=[^.])[\S]+\.)*(?=[^.])[\S]+\.(?=[^.])[\S]+$/);

    if (regex.test(email)) {
      this.setState({valid:true}, () => updateCell(null, null, this.state.email, null, (error) => {console.log("error")}));
      return true;
    }
    return false;
  }

  render(){
    this.anims = this.anims || words.split(' ').map(() => new Animated.Value(0));

    return(
      <View style={styles.view}>
      <KeyboardHandler ref='kh' offset={100}>
        <View style={styles.container}>
          <Text style={[styles.font,styles.welcomeText]}>
          {words.split(' ').map((word,i) =>
            <Animated.Text key={i}
                           style={[{paddingVertical:15},
                                  {opacity: this.anims[i]}]}>
              {word + ` `}
            </Animated.Text>)}
          </Text>
          <Animated.View style={{opacity: this.state.emailFadeIn}}>
            <TextInput
              ref="email"
              placeholder="Email Input"
              placeholderTextColor='white'
              clearButtonMode='while-editing'
              keyboardAppearance='dark'
              style={styles.emailInput}
              onFocus={()=>this.refs.kh.inputFocused(this,'email')}
              onChangeText={(text) => this.setState({email:text})}
              onSubmitEditing={() => this.validateEmail(this.state.email)}
              value={this.state.email}></TextInput>
            <Text>{this.getEmailValidationText()}</Text>
          </Animated.View>
          <Text style={[styles.font, styles.skip]}>SKIP</Text>
      </View>
      </KeyboardHandler>
      </View>
  );
  }

}

/**
 * Created by mercedes on 2016-10-04.
 */
