'use strict';

import React, { Component } from 'react';
import  {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  NativeMethodsMixin,
  Platform,
  View
} from 'react-native';
import Style from '../../styles';
import Font from '../../styles/Font';
import Colours from '../../styles/Colours';
import Typewriter from '../../Typewriter';
import Navigation from '../../helpers/Navigation';

let {width, height} = Dimensions.get('window');
let introMsg = `Planetary change is inevitable. Through technology, design, and education, Usful is preparing communities for this reality`;
let introMsg2 = `We are a conscious team of technologists, designers, developers, engineers, and architects who create Usful products with purpose.`;
let newMsgList = [];
let newMsgList2 = [];
let styles = StyleSheet.create({
  animatedTextLayers: {
    position:'absolute',
    top: 0,
    left: 0
  },
  container: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    marginTop: height * 0.15,
    marginHorizontal: 30,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  enter: {
     marginTop: height * 0.1,
     alignSelf: 'flex-end' ,
     marginRight: width * 0.1,
  },
  font: {
    color:  Colours.white,
    fontFamily: Style.fonts.secondaryFont.fontFamily,
    fontSize: 18,
    marginTop: 5,
  },
  introMsgContainer: {
    backgroundColor:  Colours.navBarBlack,
  },
  msg: {
    color:  Colours.white,
    fontFamily: Style.fonts.primaryFont.fontFamily,
    fontSize: 18,
    fontWeight: '400',
    lineHeight:21,
  },
  skip: {
    marginTop: Style.height * 0.6,
    alignSelf:'flex-end',
    color:  Colours.white,
    fontSize: 20,
  },
  view: {
    backgroundColor:  Colours.navBarBlack,
  },
});


let posX = 0;
let posY = 0;
export default class IntroductionScene extends Component {
  
  constructor(props) {
    super(props);

    this.deter(introMsg, newMsgList);
    this.deter(introMsg2, newMsgList2);
    
    this.state = {
      enterFadeIn: new Animated.Value(1),
      enterMsg : 'SKIP',
      firstPhase : true,
      fullStopPulse: new Animated.Value(0),
      phaseOne : new Animated.Value(1)
    };
  }
  
  componentDidMount() {
    this.refs.introMsg10.start(true);
  }

  pauseThenFadeOut() {
    //fadeOut Phase 1
    Animated.sequence([
      Animated.timing(this.state.fullStopPulse, {toValue: 1, duration: 800}),
      Animated.timing(this.state.fullStopPulse, {toValue: 0, duration: 800}),
      Animated.timing(this.state.fullStopPulse, {toValue: 1, duration: 800}),
      Animated.timing(this.state.fullStopPulse, {toValue: 0, duration: 800}),
      Animated.timing(this.state.fullStopPulse, {toValue: 1, duration: 800}),
      Animated.timing(this.state.phaseOne, {toValue: 0, duration: 500})

    ]).start();

  }

  deter(msg, newList){

    let lettersPerLine, spaceLeft;
    let wordsLst = msg.split(' ');
    let newWord = '';

    if (width >= 414) { //iPhone 6 Plus
      lettersPerLine = spaceLeft = 29;
    } else if (width >= 325) {
      lettersPerLine = spaceLeft = 25;
    } else {
      lettersPerLine = spaceLeft = 21;
    }

    for (let word of wordsLst) {

      if ((word.length + 1) > spaceLeft) {
        newList.push(newWord);
        spaceLeft = lettersPerLine;
        newWord = '';
      }
      newWord = newWord.concat(word + ' ');
      spaceLeft -= (word.length + 1);
    }
    newList.push(newWord);
  }

  onFinished2(num, newList, fadeIn) {
    if (num == newList.length - 1) {

    } else {
      this.refs[`introMsg2${++num}`].start(fadeIn);
    }
  }

  //TODO: instant fadeOut Phase 1

  onFinished1(num, newList, fadeIn){
    if (num == newList.length - 2) {
      this.refs[`introMsg1${++num}`].start(fadeIn);
    }
    else if (num == newList.length - 1) {
      let firstPhase = this.state.firstPhase;
      this.setState({ firstPhase: !firstPhase });
      let len = newMsgList.length - 1;
      if (firstPhase) {
        this.pauseThenFadeOut();
        setTimeout(() => this.refs.introMsg20.start(true), 4500);

      } else {

      }

    } else {
      this.refs[`introMsg1${++num}`].start(fadeIn);
      Animated.timing(this.state.enterFadeIn, {toValue: 1, duration: 1000}).start();
    }


  }

  getPosForPeriod(e,i){
    if ((i == (newMsgList.length - 1)) && e.nativeEvent.layout.x > posX) {
      posX = e.nativeEvent.layout.x
    }
    posY = e.nativeEvent.layout.height;
  }
  
  render() {
    return (
        <ScrollView style={styles.view}>
              <View style={styles.container}>
                <Animated.View style={[ styles.animatedTextLayers, { zIndex: 2, flexWrap: 'wrap', opacity: this.state.phaseOne }]}>
                {newMsgList.map((sentence, i) => <Typewriter key={i}
                                                             ref={`introMsg1${i}`}
                                                             countSpace={(e) => {this.getPosForPeriod(e,i)}}
                                                             style={ styles.msg }
                                                             msg={sentence}
                                                             colour="white"
                                                             speedOnPause={20}
                                                             height={30}
                                                             onFinished={() => this.onFinished1(i, newMsgList, this.state.firstPhase)}/>)}
                  <View style={{position: 'absolute', left: posX + 2, top: (newMsgList.length -1) * posY}}>
                    <Animated.Text style={[{opacity: this.state.fullStopPulse}, styles.msg ]}>.</Animated.Text>
                  </View>

                </Animated.View>
                <View style={[ styles.animatedTextLayers, { zIndex: 5 }]}>
                {newMsgList2.map((sentence, i) => <Typewriter key={i}
                                                              countSpace={(e) => {}}
                                                              ref={`introMsg2${i}`}
                                                              style={ styles.msg }
                                                              msg={sentence}
                                                              colour="white"
                                                              height={30}
                                                              onFinished={() => this.onFinished2(i, newMsgList2, true)}/>)}

                </View>
                <TouchableOpacity style={[styles.enter]}
                                  onPress={() => Navigation.push(Navigation.PORTFOLIO_SCENE)}>
                    <Animated.Text style={[styles.font, styles.skip,{ opacity: 1 }]}>{this.state.enterMsg}</Animated.Text>
                </TouchableOpacity>
              </View>
        </ScrollView>
    );
  }
}