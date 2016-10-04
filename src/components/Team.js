import React, { Component } from 'react';
import {
  Animated,
  Animation,
  StyleSheet,
  Dimensions,
  Easing,
  Image,
  Text,
  ListView,
  ScrollView,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';


let cards = [{url: 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png'},
  {url: 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png'},
  {url: 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png'},
  {url: 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'}];


let {height, width} = Dimensions.get('window');
import ContactCards from './ContactCards';

let styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFFFFF',
    height: 300,
  },
});


export default class Team extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0

    };
  }

  _onScroll(e){
  }

  render() {
    return (

      <ScrollView
        decelerationRate={0}
        directionalLockEnabled={true}
        horizontal={true}
        onScroll={(e) =>this._onScroll(e)}
        ref={(scrollView) => { _scrollView = scrollView; }}
        scrollEventThrottle={32}
        snapToInterval={320}
        snapToAlignment= 'center'
        style={[styles.scrollView]}
        zoomScale={1}>
        {cards.map((data, i) => <ContactCards key={i} totalTabs={cards.length} index={i} uri={data.url} page={this.state.page} />)}
      </ScrollView>
    );
  }

}
