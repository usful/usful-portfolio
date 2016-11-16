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
  PixelRatio,
  Platform,
  View
} from 'react-native';

import Font from '../../styles/Font';
import Colours from '../../styles/Colours';
import Typewriter from '../../Typewriter';
import Navigation from '../../helpers/Navigation';

let {width, height} = Dimensions.get('window');
let introMsg = `Planetary change is inevitable. Through technology, design, and education, Usful is preparing communities for this reality. We are a conscious team of technologists, designers, developers, engineers, and architects who create Usful products with purpose.`;
let newMsgList = [];
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
     marginRight: width * 0.1,
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
    lineHeight:21,
  },
  skip: {
    alignSelf:'flex-end',
    color:  Colours.white,
    fontSize: 20,
  },
  view: {
    backgroundColor:  Colours.navBarBlack,
  },
});

export default class IntroductionScene extends Component {
  
  constructor(props) {
    super(props);

    this.deter(introMsg);
    
    this.state = {
      enterFadeIn: new Animated.Value(1),
      enterMsg : 'SKIP',
    };
  }
  
  componentDidMount() {
    this.refs.introMsg0.start(true);
  }

  deter(msg){

    let lettersPerLine, spaceLeft;
    let wordsLst = introMsg.split(' ');
    let newWord = '';

    if (width >= 414) { //iphone 6plus
      lettersPerLine = spaceLeft = 29;
    } else if (width >= 325) {
      lettersPerLine = spaceLeft = 25;
    } else {
      lettersPerLine = spaceLeft = 21;
    }

    for (let word of wordsLst) {

      if ((word.length + 1) > spaceLeft) {
        newMsgList.push(newWord);
        spaceLeft = lettersPerLine;
        newWord = '';
      }
      newWord = newWord.concat(word + ' ');
      spaceLeft -= (word.length + 1);
    }
    newMsgList.push(newWord);
  }

  onFinished(num) {
    if (num == newMsgList.length - 2) {
      Animated.timing(this.state.enterFadeIn, { toValue: 0, duration: 1000 }).start(() => this.setState({ enterMsg: 'ENTER'}));
      this.refs[`introMsg${++num}`].start(true);
    }
     else if (num != newMsgList.length - 1) {

      this.refs[`introMsg${++num}`].start(true);

    } else {
      Animated.timing(this.state.enterFadeIn, {toValue: 1, duration: 1000}).start();
    }
  }
  
  render() {
    return (
        <ScrollView style={styles.view}>
              <View style={styles.container}>
                {newMsgList.map((sentence, i) => <Typewriter key={i}
                                                            ref={`introMsg${i}`}
                                                            style={ styles.msg }
                                                            msg={sentence}
                                                            colour="white"
                                                            height={30}
                                                            onFinished={() => this.onFinished(i)}/>)}


                <TouchableOpacity style={[styles.enter]}  onPress={() => Navigation.push(Navigation.PORTFOLIO_SCENE)}>
                    <Animated.Text style={[styles.font, styles.skip,{ opacity: this.state.enterFadeIn }]}>{this.state.enterMsg}</Animated.Text>
                </TouchableOpacity>
              </View>
        </ScrollView>
    );
  }
}