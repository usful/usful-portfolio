import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    Linking,
    ScrollView,
    AlertIOS,
    TouchableOpacity,
    View,
} from 'react-native';

import SwipeSelector from 'react-native-swipe-selector';
import LinearGradient from 'react-native-linear-gradient';
import Navigation from '../helpers/Navigation';
import Colours from '../styles/Colours';
import Font from '../styles/Font';

let styles = StyleSheet.create({
  linearGradient: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  backgroundImage: {
    marginHorizontal:0,
    width: 250, height: 300,
    alignItems: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',

  },
  container: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: -50,
    backgroundColor: 'white'

  },
  card: {
    width: 350,
    height: 480,
    paddingVertical: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  cardImage: {
    borderWidth: 1,
    borderColor: '#FFF',
    height: 200,
    marginTop: 30,
    width: 200,
    opacity: 0.5
  },
  page: {
    color: Colours.darkGrey,
    fontFamily: Font.primaryFont.fontFamily,
    fontWeight: 'bold'


  },
  close: {
    paddingLeft: 140,
    color: Colours.darkGrey,
    fontFamily: Font.primaryFont.fontFamily,
    fontWeight: 'bold'
  },
  contactInfo: {
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  pageAndClose: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',

    backgroundColor: 'white',

  },
  textDescription: {
    color: Colours.darkGrey,
    width: 100,
    fontSize: 12,
    lineHeight: 15,
    paddingTop: 10,
    paddingBottom:20,
    fontFamily: Font.primaryFont.fontFamily,
    textAlign: 'center'


  },
  textName: {
    marginTop: 20,
    fontWeight: '600',
    color: Colours.darkGrey,
    fontSize: 18,
    fontFamily: Font.primaryFont.fontFamily,
    textAlign: 'center'
  },

  textTags: {
    fontStyle: 'italic',
    paddingBottom: 18,
    color: Colours.darkGrey,
    fontSize: 8,
    paddingTop: 5,
    fontFamily: Font.primaryFont.fontFamily,
    textAlign: 'center'

  },
  socialMediaBox: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: 250,
    paddingVertical: 10,
    justifyContent: 'center'
  },
  mediaIcon: {
    width: 40,
    height: 40,
    margin: 5,

  }
});

export default class ContactCard extends Component {

  static defaultProps = {
    person: {},
    id: 0,
    totalCards: 0
  };

  constructor(props) {
    super(props);
    let iconA = new Animated.Value(1);
    let iconB = new Animated.Value(1);
    let iconC = new Animated.Value(1);
    this.state = {
      animIcons: [iconA, iconB, iconC],
    }
  }

  componentDidMount(){
    this.getMediaIcon();
  }

  getMediaIcon(type){
    switch(type) {
      case 'instagram':
        return require('../../assets/instagram.png');
        break;
      case 'github':
        return require('../../assets/github.png');
        break;
      case 'twitter':
        return require('../../assets/twitter.png');
        break;
      case 'linkedin':
        return require('../../assets/linkedin.png');
        break;
      case 'googleplus':
        return require('../../assets/googleplus.png');
        break;
      default:
        return require('../../assets/youtube.png');
    }

  }

  openMedia(url,i) {
    Animated.spring( this.state.animIcons[i], {toValue: 0.9, friction: 1}).start();
    AlertIOS.alert(
      'Leave Usful',
      'Clicking OK will take you to safari',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => Linking.canOpenURL(url)
          .then(supported => {
          if (!supported) {
            console.log('Can\'t handle url: ' + url);
          } else {
            return Linking.openURL(url);
          }
        }).catch(err => console.error('An error occurred', err))},
      ],
    );
    //Animated.spring( this.state.animIcons[i], {toValue: 1, friction: 1}).start();

  }

  render() {
    let person = this.props.person;
    return (
      <View>
        <View style={{backgroundColor:'white'}}>
          <View style={styles.pageAndClose}>
            <Text style={styles.page}>{this.props.index}/{this.props.totalCards}</Text>
            <TouchableOpacity><Text style={styles.close}>CLOSE</Text></TouchableOpacity>
          </View>
          <View style={{height:200,width:200}} >
          </View>



          <LinearGradient
            colors={['green', 'red']}
            start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}></LinearGradient>


          <View style={styles.contactInfo}>
            <Text style={styles.textName}>{person.name}</Text>
            <Text style={styles.textTags}>{person.tags.join(' / ')}</Text>
            <Text style={styles.textDescription}>{person.description}</Text>
          </View>


        </View>

        <View style={styles.socialMediaBox}>

          {person.socialAccounts.map((acct,i) => <TouchableOpacity key={i} style={{transform: [{scale: this.state.animIcons[i]}]}}
                                                                            onPress={()=> this.openMedia(acct.uri,i)}>
                                                  <Image source={this.getMediaIcon(acct.type)} style={styles.mediaIcon}/>
                                                </TouchableOpacity>)}


          </View>
        </View>
    );
  }
}