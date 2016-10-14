'use strict';

import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Dimensions,
    Animated,
    Text,
    ListView,
    ScrollView,
    TouchableHighlight,
    View
} from 'react-native';

import AppData from '../../AppData';
import Navigation from '../../helpers/Navigation';

import StoryCard from '../Story/StoryCard';
import TopNav from '../TopNav';

let {width, height} = Dimensions.get('window');
let offset = 0;
const SCROLL_FPS = Math.round(1000/30);

let styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex: 1,
      width: width
    },
    storiesScroll: {
      backgroundColor: '#000',
      height: height,
      width: width,
    }
});

export default class PortfolioScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      previousIndex: 0,
      index: 0,
      pageTransition: 0,
      hideNavBar: false,
      hideAnimation: new Animated.Value(1)
    };
  }

  componentDidMount(){
    //land Stories first
    this.refs.scrollView.scrollTo({x: 375, y: 0, animated:true});

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.index !== this.state.index) return true;
    if (nextState.pageTransition !== this.state.pageTransition) return true;
    if (nextState.previousIndex !== this.state.previousIndex) return true;
    if (nextState.hideNavBar !== this.state.hideNavBar) return true;
    if (nextState.hideAnimation !== this.state.hideAnimation) return true;

    return true;
  }



  onTopNavScroll(e) {
    let pageTransition = (e.nativeEvent.contentOffset.x % width) / width;
    let nowIndex = Math.floor(e.nativeEvent.contentOffset.x / width);
    if (nowIndex > 0) pageTransition += nowIndex ;
    this.setState({
      pageTransition: pageTransition,
      hideNavBar: false
    });
  }

  onStoriesScroll(e) {
    let direction = true;
    let currentOffset = e.nativeEvent.contentOffset.y;
    if (currentOffset <= 0) {
      direction = false;
    } else if (currentOffset > offset) {
      direction = true;
    } else {
      direction = false;
    }
    offset = currentOffset;
    this.setState({hideNavBar: direction});
  }

  swipeEnds(e) {

  }

  navSwipeEnds(e) {
    if ((e.nativeEvent.contentOffset.x % width) === 0) {
      let oldIndex = this.state.index;
      let newPage = e.nativeEvent.contentOffset.x / width;
      if (oldIndex !== newPage) {
        this.setState({
          previousIndex: oldIndex,
          index: newPage
        });
      }
    }

    //setTimeout(() => {this.setState({ hideNavBar: false})}, 2000);
  }

  goStory(story) {
    Navigation.push({
      id: 'DetailedStoryScene',
      story: story
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}
                    pagingEnabled={true}
                    ref='scrollView'
                    onScroll={(e) => this.onTopNavScroll(e)}
                    scrollEventThrottle={SCROLL_FPS}
                    onMomentumScrollEnd={(e) => this.navSwipeEnds(e)}>

          <ScrollView scrollEventThrottle={SCROLL_FPS}
                      showsVerticalScollIndicator={false}
                      style={styles.storiesScroll}>
            {AppData.stories.map(story => <StoryCard key={story.id} story={story} onStoryPressed={() => this.goStory(story)}/>)}
          </ScrollView>

          <ScrollView scrollEventThrottle={SCROLL_FPS}
                      showsVerticalScollIndicator={false}
                      style={styles.storiesScroll}
                      onScroll={(e) => this.onStoriesScroll(e)}
                      onMomentumScrollEnd={(e) => this.swipeEnds(e)}>
            {AppData.stories.map(story => <StoryCard key={story.id} story={story} onStoryPressed={() => this.goStory(story)}/>)}
          </ScrollView>

          <ScrollView scrollEventThrottle={SCROLL_FPS}
                      showsVerticalScollIndicator={false}
                      style={styles.storiesScroll}>

            {AppData.stories.map(story => <StoryCard key={story.id} story={story} onStoryPressed={() => this.goStory(story)}/>)}
          </ScrollView>
        </ScrollView>
        <TopNav
          hideNavBar={this.state.hideNavBar}
          previousIndex={this.state.previousIndex}
          index={this.state.index}
          pageTransition={this.state.pageTransition}/>
      </View>
    );
  }
}