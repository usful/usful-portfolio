/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Dimensions,
    Animated,
    Text,
    ListView,
    ScrollView,
    Navigator,
    TouchableHighlight,
    View
} from 'react-native';

import AppData from '../AppData';

import StoryFeed from './Story/StoriesFeed';
import TopNav from './TopNav';
import InitiativeView from './Initiative/InitiativeView';
import ProductView from './Product/ProductView';

let {height, width} = Dimensions.get('window');
const SCROLL_FPS = Math.round(1000/30);

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },

  page: {
    height: height,
    width: width,
  },
  listScroll: {
    backgroundColor: '#fff',
    height: height,
    width: width,
  }
});

export default class Portfolio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      offset: 0,
    };
  }

  componentDidMount() {
    this._scrollView.scrollTo({x: 375, y: 0, animated: false});
  }

  onStoriesScroll(e) {
    this.setState({
      offset: e.nativeEvent.contentOffset.y / e.nativeEvent.contentSize.height
    });
  }

  onTopNavScroll(e) {
    if ((e.nativeEvent.contentOffset.x % width) === 0) {
      let newPage = e.nativeEvent.contentOffset.x / width;

      if (this.state.page !== newPage) {
        this.setState({
          page: newPage,
          currentTab: newPage
        })
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView horizontal={true}
                    pagingEnabled={true}
                    ref={(c) => this._scrollView = c}
                    onScroll={(e) => this.onTopNavScroll(e)}
                    scrollEventThrottle={SCROLL_FPS}>

          <ScrollView
            onScroll={(e) => this.onStoriesScroll(e)}
            scrollEventThrottle={SCROLL_FPS}
            showsVerticalScollIndicator={false}
            style={styles.listScroll}>
            <ProductView products = {AppData.products}/>
          </ScrollView>

          <ScrollView
            onScroll={(e) => this.onStoriesScroll(e)}
            scrollEventThrottle={SCROLL_FPS}
            showsVerticalScollIndicator={false}
            style={styles.listScroll}>
            <StoryFeed stories = {AppData.stories}/>
          </ScrollView>

          <ScrollView
            onScroll={(e) => this.onStoriesScroll(e)}
            scrollEventThrottle={SCROLL_FPS}
            showsVerticalScollIndicator={false}
            style={styles.listScroll}>
            <InitiativeView initiatives = {AppData.initiatives}/>
          </ScrollView>

        </ScrollView>
        <TopNav currentTab={this.state.currentTab}
                page={this.state.page}
                pageTransition={this.state.pageTransition}/>

      </View>);
  }
}