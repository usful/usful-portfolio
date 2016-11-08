import React, { Component } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Text,
  ScrollView,
Dimensions
} from 'react-native';

let headerHeight = 0;
let contentHeight = 0;
const HEADER_MAX_HEIGHT = 700;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
let {width, height} = Dimensions.get('window');

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };

  }

  componentDidMount() {
    setTimeout(this.measureMainComponent.bind(this));
    headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, contentHeight + 20],
      outputRange: [0, HEADER_MAX_HEIGHT],
      extrapolate: 'extend',
    })
  }

  measureMainComponent() {
    this.refs._ScrollView.measure((ox, oy, width, height) =>
    {
      contentHeight = height
    }
      );
    };


  _renderScrollViewContent() {
    const data = Array.from({length: 30});
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }


  render() {

    ;

    return (
      <View style={styles.fill}>
        <ScrollView
          style={styles.fill}
          ref = '_ScrollView'
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}>
          {this._renderScrollViewContent()}
        </ScrollView>
        <Animated.View style={[styles.header, {height: headerHeight}]}>
          <View style={styles.bar}>
            <Text style={styles.title}>Title</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    fill: {
      flex: 1,
    },
    row: {
      height: 40,
      margin: 16,
      backgroundColor: '#D3D3D3',
      alignItems: 'center',
      justifyContent: 'center',
    },
  header: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginBottom: HEADER_MAX_HEIGHT,
  },
  });