import React, { Component } from 'react';
import Navigation from '../helpers/Navigation';
import longDateFormatter from '../helpers/formatters/longDate';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
Dimensions,
Image
} from 'react-native';
let {width, height} = Dimensions.get('window');
export default class CarouselCard extends Component {

  static defaultHero = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=400';
  static defaultProps = {
    content: {

    },
    slide: 0,
    lastSlide: false
  };

  constructor(props) {
    super(props);
  }

  onContentPressed(content){
    Navigation.goContent(content)
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.onContentPressed(this.props.content)}>
        <View style={[this.props.slide === 0 && styles.endLeftCard, this.props.lastSlide && styles.endRightCard, styles.card]}>

          <Text style={styles.text}>{this.props.content.name}</Text>

          <Image source ={this.props.content.hero.uri || defaultHero} resizeMode='cover' style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.content.name}</Text>
            <Text style={styles.text}>{this.props.content.heroDescription}</Text>
            <Text style={styles.text}>Launched: {longDateFormatter(this.props.content.date)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


const CARD_HEIGHT = height - 300;
const CARD_WIDTH = width - 50;
const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 20,
    marginLeft: 15
  },
  text: {
    fontFamily: 'Courier New',
    color: '#fff',
    fontSize: 13,
    backgroundColor: 'transparent',
    fontWeight: '500',
    marginBottom: 4
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 2,

  },
  card: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 2,
    backgroundColor: '#EFEFEF',
    marginHorizontal: 5
  },
  endLeftCard: {
    marginLeft: 25
  },
  endRightCard: {
    marginRight: 25
  }
});