'use strict';

import React, {Component} from 'react';

import {
  Alert,
  StyleSheet,
  Dimensions,
  Animated,
  Text,
  ScrollView,
  View
} from 'react-native';

import AppData from '../../AppData';
import Navigation from '../../helpers/Navigation';

import StoryCard from '../Story/StoryCard';
import ProductView from '../Product/ProductView';
import InitiativeView from '../Initiative/InitiativeView';

import TopNav from '../TopNav';

let {width, height} = Dimensions.get('window');
let offset = 0;
let idleTime = 0;


//Set the FPS to 30 in dev mode, no need to try to run high frame rates we can't do in iOS simulator
const SCROLL_FPS = Math.round(1000 / __DEV__ ? 30 : 60);

function pause(duration = 250) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), duration);
  });
}

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
      hideAnimation: new Animated.Value(1),
      //Initialize an array of length stories.length and set all elements to 0
      storyOffsets: new Array(AppData.stories.length).map(() => 0),

    };
  }

  componentDidMount() {
    //land Stories first
    this.refs.scrollView.scrollTo({x: width, y: 0, animated: false});
    let idleInterval = setInterval(() => this.timerIncrement(), 1000);
    this.animateStoryCards();
  }

  async animateStoryCards() {
    const cardsPerScreen = Math.ceil(height / StoryCard.CARD_HEIGHT);

    for (let x=0; x<cardsPerScreen; x++) {
      this.refs[`storyCard${x}`].animateEntry();
      await pause();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.index !== this.state.index) return true;
    if (nextState.pageTransition !== this.state.pageTransition) return true;
    if (nextState.previousIndex !== this.state.previousIndex) return true;
    if (nextState.hideNavBar !== this.state.hideNavBar) return true;
    if (nextState.hideAnimation !== this.state.hideAnimation) return true;
    if (nextState.storyOffsets !== this.state.storyOffsets) return true;

    return false;
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
    this.setIdleToZero();
  }


  onTopNavScroll(e) {
    let pageTransition = (e.nativeEvent.contentOffset.x % width) / width;
    let nowIndex = Math.floor(e.nativeEvent.contentOffset.x / width);

    if (nowIndex > 0) pageTransition += nowIndex;

    //CJR: Rather than set the state on each scroll event, we will check the state to see if it needs to be updated.
    //Every time the state is set the component will try to update, so this prevents unnecessary updates.
    if (this.state.pageTransition !== pageTransition) {
      this.setState({pageTransition: pageTransition});
    }

    if (this.state.hideNavBar !== false) {
      this.setState({hideNavBar: false});
    }
  }

  onStoriesScroll(e) {
    let currentOffset = e.nativeEvent.contentOffset.y;
    let direction = currentOffset > offset;

    let cardsScrolled = Math.floor(e.nativeEvent.contentOffset.y / StoryCard.CARD_HEIGHT);
    let cardsPerScreen = Math.ceil(height / StoryCard.CARD_HEIGHT);

    offset = currentOffset;

    //PARALLAX CODE
    //based on the current y offset we can tell where each story card is in the viewport because we know the story card
    //height.  we can use this to determine the offset for its parallax background scroll.
    let storyOffsets = [];
    for (let i=0; i<AppData.stories.length; i++) {
      if (i < cardsScrolled) {
        //cards scrolled by are above the viewport, so set them to max negative offset.
        storyOffsets[i] = -StoryCard.MAX_OFFSET;
      } else if (i > cardsScrolled + cardsPerScreen) {
        //cards past the current bottom of the viewport can be set to max offset.
        storyOffsets[i] = StoryCard.MAX_OFFSET;
      } else {
        //otherwise set a relative offset for each story card as it passes thru the viewport
        this.refs[`storyCard${i}`].animateEntry();
        let relativeOffset = e.nativeEvent.contentOffset.y - (StoryCard.CARD_HEIGHT * i);
        storyOffsets[i] = (relativeOffset / height) * 0.33;
      }
    }
    //END PARALLAX CODE

    this.setState({
      storyOffsets: storyOffsets,
      hideNavBar: direction
    });
  }

  onContentPressed(content){
    Navigation.goContent(content);
  }

  setIdleToZero(e) {
    //console.log("idleTime is (TO ZERO) ", idleTime);
    idleTime = 0;
  }

  timerIncrement(){
    //console.log("idleTime is (TIME++)", idleTime);
    idleTime += 1;
    if (idleTime > 4) {
      this.setState({hideNavBar: true});
      idleTime = 0;
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}
                    pagingEnabled={true}
                    ref='scrollView'
                    onScroll={(e) => this.onTopNavScroll(e)}
                    onMomentumScrollEnd={(e) => this.navSwipeEnds(e)}
                    scrollEventThrottle={SCROLL_FPS}>

          <ScrollView scrollEventThrottle={SCROLL_FPS}
                      showsVerticalScollIndicator={false}
                      style={styles.storiesScroll}>

            <ProductView products={AppData.products}/>
          </ScrollView>

          <ScrollView scrollEventThrottle={SCROLL_FPS}
                      showsVerticalScollIndicator={false}
                      style={styles.storiesScroll}
                      onScroll={(e) => this.onStoriesScroll(e)}
                      onMomentumScrollStart={(e) => {this.setIdleToZero(e)}}>
            {AppData.stories.map((story, i) =>
              <StoryCard ref={`storyCard${i}`}
                         key={story._id}
                         content={story}
                         fps={SCROLL_FPS}
                         offset={this.state.storyOffsets[i]}
                         onPress={() => this.onContentPressed(story)}/>

            )}
          </ScrollView>

          <ScrollView scrollEventThrottle={SCROLL_FPS}
                      showsVerticalScollIndicator={false}
                      style={styles.storiesScroll}>

              <InitiativeView initiatives={AppData.initiatives} />
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