import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import CarouselCard from './CarouselCard';
let {width, height} = Dimensions.get('window');

export default class SliderIndicator extends Component {

  static defaultProps = {
    position: 0,
    text: false,
    slides: []
  };

  constructor(props) {
    super(props);

    this.state = {
      card: 0
    };
  }

  handleScroll(e) {
    this.setState({
      card: (Math.round(e.nativeEvent.contentOffset.x / width))
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.card !== this.state.card;
  }

  _move(index) {
    if (this.state.card !== index) {
      this._ScrollView.scrollTo({x: index * width, y: 0, animated: true})
    }
  }

  render() {
    return (
      <View>
        {this.props.text
          ? <View style={styles.textContainer}>
              <Text style={styles.text}>{this.props.slides[this.state.card].description}</Text>
            </View>
          : <View><Text>{this.props.text}</Text></View>
        }

        <ScrollView
          ref={ref => this._ScrollView = ref}
          horizontal={true}
          snapToInterval={width}
          decelerationRate={0}
          snapToAlignment={'center'}
          onScroll={(e) => this.handleScroll(e)}
          scrollEventThrottle={300}
          showsHorizontalScrollIndicator={false}
          style={styles.cardScroll}>
          {this.props.slides.map((obj, index) =>
            <View key={index} style={styles.view}>
              <CarouselCard content={obj}/>
            </View>
          )}
        </ScrollView>
        <View style={styles.buttons}>
          {this.props.slides.map((slides, index) =>
            <TouchableOpacity
              key={index}
              onPress={() => this._move(index)}
              underlayColor="#ccc"
              style={[styles.button, this.state.card === index && styles.buttonSelected]}>
              <View></View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardScroll: {
    marginBottom: 20
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    marginHorizontal: 5,
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#ccc',
    opacity: 0.9,
  },
  buttonSelected: {
    opacity: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: width - 40,
    height: 136,
    marginHorizontal: 10
  },
  text: {
    fontFamily: 'Avenir-Book',
    fontSize: 18,
    color: '#A9A9A9',
    flexWrap: 'wrap',
    marginBottom: 30,
    textAlign: 'center'
  },
});