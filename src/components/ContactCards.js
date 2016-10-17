import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: -50,
    backgroundColor: 'grey'
  },
  card: {
    borderWidth: 1,
    borderColor: '#00BFFF',
    width: 250,
    height: 420,
    paddingVertical: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    marginHorizontal: -0,
  },
  cardImage: {
    borderWidth: 1,
    borderColor: '#FFF',
    height: 120,
    marginTop: 30,
    width: 120,
    backgroundColor: 'white'
  },
  page: {
    color: 'white',
  },
  close: {
    paddingLeft: 90,
    color: 'white'
  },
  contactInfo: {
    alignItems: 'center'
  },
  pageAndClose: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  textDescription: {
    color: '#A9A9A9',
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 45,
    paddingTop: 10,
    justifyContent: 'space-between'
  },
  textName: {
    marginTop: 30,
    fontWeight: '600',
    color: '#A9A9A9',
    fontSize: 18,
  },
  textTags: {
    fontStyle: 'italic',
    paddingBottom: 18,
    color: '#A9A9A9',
    fontSize: 12,
    paddingTop: 5,

  },
  socialMediaBox: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: 250,
    paddingVertical: 10,
    justifyContent: 'center'
  },
  mediaIcon: {
    width: 30,
    height: 30,
    margin: 5,

  }
});

export default class ContactCards extends Component {

  static defaultProps = {
    index: 0
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.card]}>
          <View style={styles.pageAndClose}>
            <Text style={styles.page}>page/total</Text>
            <Text style={styles.close}>CLOSE</Text>
          </View>
          <Image source={{uri: this.props.uri}} style={styles.cardImage}/>
          <View style={styles.contactInfo}>
            <Text style={styles.textName}>Clinton Robinson</Text>
            <Text style={styles.textTags}>Tag1/ Tag2/ Tag3</Text>
            <Text style={styles.textDescription}>Flexbox works the same way in React Native as it does in CSS on the
              web, with a few exceptions. The defaults are different, the flex parameter only supports a single
              number.</Text>
          </View>

        </View>
        <View style={styles.socialMediaBox}>

          <Image source={require('../../assets/Instagram.png')} style={styles.mediaIcon}/>
          <Image source={require('../../assets/Github.png')} style={styles.mediaIcon}/>
          <Image source={require('../../assets/twitter.png')} style={styles.mediaIcon}/>

        </View>
      </View>
    );
  }
}