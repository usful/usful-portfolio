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

let words = `Welcoming Text goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;

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
    };
  }

  componentDidMount(){

    let animationArray = [];
    for (let anim of this.anims) {
      animationArray.push(Animated.timing(anim, {toValue: 1, duration: 500}));
    }
    animationArray.push(Animated.timing(this.state.emailFadeIn, {toValue: 1, duration: 1000}));
    Animated.sequence(animationArray).start();
  }


  getEmailValidationText() {
    if (this.state.valid) {
      return <Text>"You are good"</Text>;
    }
    return <Text>"Email is invalid, please try again!"</Text>;
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

  render(){

    this.anims = this.anims || words.split(' ').map(() => new Animated.Value(0));

    return(
      <View style={styles.container}>

        <Text style={styles.welcomeText}>

        {words.split(' ').map((word,i) => <Animated.Text key={i}
                                                      style={[{paddingVertical:15},{opacity: this.anims[i]}]}>{` ` + word}</Animated.Text>)}
          </Text>


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
