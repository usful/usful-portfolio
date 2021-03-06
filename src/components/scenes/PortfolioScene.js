'use strict';

import React, {Component} from 'react';

import {
  Animated,
  AppState,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppData from '../../AppData';
import Navigation from '../../helpers/Navigation';
import Style from '../../styles';

import ContactFooter from '../ContactFooter';
import StoryCard from '../Story/StoryCard';
import Carousel from '../Carousel';
import TopNav from '../TopNav';

let offset = 0;
let idleTime = 0;
let idleInterval;

function pause(duration = 900) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), duration);
  });
}

let styles = StyleSheet.create({

  container: {
    backgroundColor: Style.colours.navBarBlack,
    flex: 1,
    width: Style.width
  },
  storiesScroll: {
    backgroundColor: Style.colours.navBarBlack,
    height: Style.height,
    width: Style.width,
  },
  shadow: {
    elevation: 2,
    shadowOffset: {
      height: 6,
      width: 6
    },
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  contactShow: {
    marginBottom: ContactFooter.FOOTER_HEIGHT - ContactFooter.UNDERLAY_HEIGHT
  },
  contactHide: {
    marginBottom: 0
  },
});

export default class PortfolioScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      previousIndex: 0,
      index: 0,
      pageTransition: 0,
      blockHeight : 0,
      parentScroll: true,
      productCount: 0,
      footerToggle: false,
      hideNavBar: false,
      hideAnimation: new Animated.Value(1),
      //Initialize an array of length stories.length and set all elements to 0
      storyOffsets: new Array(AppData.stories.length).map(() => 0),
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', () => this.handleAppStateChange());
    //land Stories first
    setTimeout(() => {
      this.refs.scrollView.scrollTo({x: Style.width, y: 0, animated: false});
    }, 0);

    idleInterval = setInterval(() => this.timerIncrement(), 1000);
    this.animateStoryCards();

  }

  async animateStoryCards() {
    const cardsPerScreen = Math.ceil(Style.height / StoryCard.CARD_HEIGHT);

    for (let x = 0; x < cardsPerScreen; x++) {
      this.refs[`storyCard${x}`].animateEntry();
      await pause();
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', () => this.handleAppStateChange());
    clearInterval(idleInterval);
  }

  handleAppStateChange() {
    this.setState({hideNavBar: false});
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.index !== this.state.index) return true;
    if (nextState.pageTransition !== this.state.pageTransition) return true;
    if (nextState.previousIndex !== this.state.previousIndex) return true;
    if (nextState.hideNavBar !== this.state.hideNavBar) return true;
    if (nextState.hideAnimation !== this.state.hideAnimation) return true;
    if (nextState.storyOffsets !== this.state.storyOffsets) return true;
    if (nextState.footerToggle !== this.state.footerToggle) return true;

    return false;
  }

  navSwipeEnds(e) {
    if ((e.nativeEvent.contentOffset.x % Style.width) === 0) {
      let oldIndex = this.state.index;
      let newPage = e.nativeEvent.contentOffset.x / Style.width;

      if (oldIndex !== newPage) {
        this.setState({
          previousIndex: oldIndex,
          index: newPage
        });
      }
    }
    this.setIdleToZero();

    //Toggling scrollenabled value of parent scrollview on product/initiative carousels to work on android
    if (Platform.OS !== 'ios' && (e.nativeEvent.contentOffset.x / Style.width === 0 || e.nativeEvent.contentOffset.x / Style.width === 2)) {
      this.setState({parentScroll: false})
    }
  }


  onTopNavScroll(e) {
    let pageTransition = (e.nativeEvent.contentOffset.x % Style.width) / Style.width;
    let nowIndex = Math.floor(e.nativeEvent.contentOffset.x / Style.width);

    if (nowIndex > 0) {
      pageTransition += nowIndex;
    }

    //CJR: Rather than set the state on each scroll event, we will check the state to see if it needs to be updated.
    //Every time the state is set the component will try to update, so this prevents unnecessary updates.
    if (this.state.pageTransition !== pageTransition) {
      this.setState({pageTransition: pageTransition});
    }

    if (this.state.hideNavBar !== false) {
      this.setState({hideNavBar: false});
    }
  }

  setScrollEnabled(e) {

    this.setState({parentScroll: true})
  }

  onStoriesScroll(e) {
    let currentOffset = e.nativeEvent.contentOffset.y;
    let direction = currentOffset > offset;
    let cardsScrolled = Math.floor(e.nativeEvent.contentOffset.y / StoryCard.CARD_HEIGHT);
    let cardsPerScreen = Math.ceil(Style.height / StoryCard.CARD_HEIGHT);

    //PARALLAX CODE
    //based on the current y offset we can tell where each story card is in the viewport because we know the story card
    //height.  we can use this to determine the offset for its parallax background scroll.
    let storyOffsets = [];
    for (let i = 0; i < AppData.stories.length; i++) {
      if (i < cardsScrolled) {
        //cards scrolled by are above the viewport, so set them to max negative offset.
        storyOffsets[i] = -StoryCard.MAX_OFFSET;
      } else if (i > cardsScrolled + cardsPerScreen) {
        //cards past the current bottom of the viewport can be set to max offset.
        storyOffsets[i] = StoryCard.MAX_OFFSET;
      } else {
        //otherwise set a relative offset for each story card as it passes thru the viewport
        this.refs[`storyCard${i}`].animateEntry(i);
        let relativeOffset = e.nativeEvent.contentOffset.y - (StoryCard.CARD_HEIGHT * i);
        storyOffsets[i] = (relativeOffset / Style.height) * 0.33;
      }
    }
    //END PARALLAX CODE

    let yOffset = e.nativeEvent.contentOffset.y;
    let reachedTop = (yOffset <= 30);

    let pullDown = Platform.OS == 'ios' ? this.state.blockHeight + 100 : this.state.blockHeight;
    let reachedBottom = (this.state.blockHeight == yOffset);
    let reachedPullDown = (yOffset >= pullDown);
    if(yOffset < this.state.blockHeight){
      this.setState({
        footerToggle: false
      })
    }
    if (reachedTop) {
      this.setState({
        storyOffsets: storyOffsets,
        hideNavBar: false
      })
    } else if (reachedBottom) {
      this.setState({
        storyOffsets: storyOffsets,
        hideNavBar: true
      })
    }
    else if(reachedPullDown){
      this.setState({
        footerToggle: true
      })
    }
    else {
      this.setState({
        storyOffsets: storyOffsets,
        hideNavBar: direction,
      });
    }
    offset = currentOffset;

  }

  hideNavBar(e) {
    let currentOffset = e.nativeEvent.pageY;
    let direction = currentOffset > offset;
    offset = currentOffset;
  
    this.setState({
      hideNavBar: direction
    });
  }

  onContentPressed(content) {
    Navigation.goContent(content);
  }

  setIdleToZero(e) {
    idleTime = 0;
  }

  timerIncrement() {
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
                    scrollEnabled={this.state.parentScroll}
                    onScroll={(e) => this.onTopNavScroll(e)}
                    onMomentumScrollEnd={(e) => this.navSwipeEnds(e)}
                    scrollEventThrottle={Style.SCROLL_FPS}>
          <Carousel
            text="Usful products are inspired by our guiding initiatives. They are developed by our team to have purpose and impact."
            slides={AppData.products}
            onTouchEnd={(e) => this.setScrollEnabled(e) }
          />

          <ScrollView scrollEventThrottle={Style.SCROLL_FPS}

            onTouchEnd={(e) => {
              this.setScrollEnabled(e)
            }}/>
          <View style={styles.storiesScroll}>

          <ScrollView scrollEventThrottle={16}

                      showsVerticalScrollIndicator={false}
                      bounces={true}
                      onScroll={(e) => this.onStoriesScroll(e)}
                      onMomentumScrollEnd={(e) => this.setIdleToZero(e)}>
            <ContactFooter />


            <View
              onLayout={(event) => {
                this.setState({blockHeight: event.nativeEvent.layout.height - Style.height})
              }}
              elevation = {10} style = {[{backgroundColor: Style.colours.navBarBlack}, this.state.footerToggle ? styles.contactShow : styles.contactHide, styles.shadow]}>
            {AppData.stories.map((story, i) =>
              <StoryCard ref={`storyCard${i}`}
                         key={story._id}
                         content={story}
                         offset={this.state.storyOffsets[i]}
                         onPress={() => this.onContentPressed(story)}/>
            )}
            </View>
          </ScrollView>
            </View>

          <Carousel
            text="Usful Initiatives guide our company mission and cultural values. They are the motive behind our authenticity."
            slides={AppData.initiatives}
            onTouchEnd={(e) => this.setScrollEnabled(e)}/>

        </ScrollView>

        <TopNav
          bar={this.refs.scrollView}
          hideNavBar={this.state.hideNavBar}
          previousIndex={this.state.previousIndex}
          index={this.state.index}
          pageTransition={this.state.pageTransition}/>
      </View>
    );
  }
}