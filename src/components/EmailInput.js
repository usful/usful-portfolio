/**
 * Created by mercedes on 2016-10-04.
 */
import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Dimensions,
  ListView,
  TextInput,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

let sampleText = `Welcoming Text goes here.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

let styles = StyleSheet.create({

  container: {
    alignItems: 'flex-start',

    justifyContent: 'center',
    marginLeft: 30,
    padding: 0,

  },

  emailInput: {
    alignItems: 'center',
    color: 'black',
    marginTop: 160,
    marginRight: 30,

    padding: 5


  },

  separator: {
    marginTop: 10,
    width:300,
    height: 20,
    borderColor: '#808080',
    borderTopWidth: 2,

  },
  welcomeText: {
    color: 'black',
    fontSize: 23,
    fontWeight: '400',
    marginTop: 120,

    marginRight: 70,
    lineHeight:35,
  },

});

export default class EmailInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      valid: false,
      emailFadeIn: new Animated.Value(0),
      wordsFadeIn: new Animated.Value(0)
    };
  }

  componentDidMount(){
    Animated.sequence([
      Animated.timing(
        this.state.wordsFadeIn,
        {toValue: 1, duration: 2000,}
      ),
      Animated.timing(
        this.state.emailFadeIn,
        {toValue: 1, duration: 2000,}
      )

    ]).start();
  }

  getEmailValidationText() {
    if (this.state.valid) {
      return "You are good"
    }

    return "Email is invalid, please try again!"
  }

  validateEmail(email) {
    /* if (value.isValid()) {
      this.setState({valid:true});

      return true
    }
    else {
      this.setState({valid:false});
    } */
    //remember to post email to google sheet
    return true;
  }


  onChangeText(text){
    this.setState({
      email: text
    })
  }

  //http://blog.arjun.io/react-native/mobile/cross-platform/2016/04/01/handling-the-keyboard-in-react-native.html


  render(){

    return(
      <View style={styles.container}>

        <Animated.Text style={[styles.welcomeText,{opacity: this.state.wordsFadeIn}]}
              numberOfLines={6}>
          {sampleText}
        </Animated.Text>

        <Animated.View style={{opacity: this.state.emailFadeIn}}>

          <TextInput
            keyboardType={'email-address'}
            dataDetectorTypes={'all'}
            placeholder="Email Input"
            returnKeyType="next"
            blurOnSubmit={false}
            style={styles.emailInput}
            onChange={(e) => this.onChange(e)}
            onChangeText={(text) => this.onChangeText(text)}
            onSubmitEditing={() => this.validateEmail(this.state.email)}
            value={this.state.email}
          ></TextInput>
          <View style={styles.separator}>
          </View>
          <View style={this.state.valid? styles.validEmail: styles.errorEmail}>{this.getEmailValidationText()}</View>


        </Animated.View>



    </View>
  );
  }


}

/**
 * Created by mercedes on 2016-10-04.
 */
