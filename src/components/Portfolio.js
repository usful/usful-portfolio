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

import StoriesFeed from './StoriesFeed';
import TopNav from './TopNav';


let {width, height} = Dimensions.get('window');
const SCROLL_FPS = Math.round(1000/30);

let stories = [
    {title: 'Story #1 Title Goes Here', author: "Merc", message: "something goes here", tags: ["erer", "tag2", "tag3"]},
    {title: 'Story #2 Title Goes Here', author: "Aaron", message: "something goes hereidnewhtjewtew", tags: ["erer", "tag2", "tag3"]},
    {title: 'Story #3 Title Goes Here', author:" JAM", message: "random hahaaawew", tags: ["erer", "tag2", "tag3"]},
    {title: 'Story #4 Title Goes Here', author:" JAM", message: "random hahaaawew", tags: ["erer", "tag2", "tag3"]}
];

let styles = StyleSheet.create({

    container: {
        backgroundColor: '#000',
        flex:1,
        width: width

    },
    storiesScroll: {
        backgroundColor: '#000',
        height: height,
        width: width,
    },

});

export default class Portfolio extends Component {

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

    shouldComponentUpdate(nextProps,nextState){
        if (nextState.index !== this.state.index) return true;
        if (nextState.pageTransition !== this.state.pageTransition) return true;
        if (nextState.previousIndex !== this.state.previousIndex) return true;
        if (nextState.hideNavBar !== this.state.hideNavBar) return true;
        if (nextState.hideAnimation !== this.state.hideAnimation) return true;
        return false;
    }


    swipeEnds(e) {

        if ((e.nativeEvent.contentOffset.x % width) === 0) {

            let oldIndex = this.state.index;
            let newPage = e.nativeEvent.contentOffset.x / width
            if (oldIndex !== newPage) {

                this.setState({
                    previousIndex: oldIndex,
                    index : newPage,

                });
            }
        }
    }
    onTopNavScroll(e){
        let pageTransition = (e.nativeEvent.contentOffset.x % width) / width;
        let nowIndex = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            pageTransition: pageTransition + nowIndex
        });
    }

    onStoriesScroll(e){
      console.log(e.nativeEvent.contentOffset.y);
    }

    storiesScrollStarts(e) {
      if(e.nativeEvent.contentOffset.y > 0) {
        this.setState({hideNavBar: true})
      } else {
        console.log("show");
        this.setState({hideNavBar: false})
      }
    }

    storiesScrollEnds(e){
      console.log("ends");
      setTimeout(
        () => { this.setState({hideNavBar: false}) },
        2000
      );
    }

    render() {
          return(
          <View style={styles.container}>
              <ScrollView horizontal={true}
                          pagingEnabled={true}
                          onScroll={(e) => {this.onTopNavScroll(e)}}
                          scrollEventThrottle={SCROLL_FPS}
                          onMomentumScrollEnd={(e) => this.swipeEnds(e)}>

                  <ScrollView scrollEventThrottle={SCROLL_FPS}
                              showsVerticalScollIndicator={false}
                              style={styles.storiesScroll}>
                      {stories.map((data,i) => <StoriesFeed key={i} title={data.title} author={data.author} />)}
                  </ScrollView>

                  <ScrollView scrollEventThrottle={SCROLL_FPS}
                              showsVerticalScollIndicator={false}
                              style={styles.storiesScroll}
                              onScroll={(e) => this.onStoriesScroll(e)}
                              onMomentumScrollBegin={(e) => this.storiesScrollStarts(e)}
                              onMomentumScrollEnd={(e) => this.storiesScrollEnds(e)}
                  >
                      {stories.map((data,i) => <StoriesFeed key={i} title={data.title} author={data.author} />)}
                  </ScrollView>


                  <ScrollView scrollEventThrottle={SCROLL_FPS}
                              showsVerticalScollIndicator={false}
                              style={styles.storiesScroll}>
                      {stories.map((data,i) => <StoriesFeed key={i} title={data.title} author={data.author} />)}
                  </ScrollView>
              </ScrollView>
              <TopNav
                      hideNavBar={this.state.hideNavBar}
                      previousIndex={this.state.previousIndex}
                      index={this.state.index}
                      pageTransition={this.state.pageTransition}

              />

          </View>);
      }

  }
