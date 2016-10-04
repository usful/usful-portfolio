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

import InitiativeView from './InitiativeView';
import StoriesFeed from './StoriesFeed';
import StoryRow from './Story/StoryRow';
import ProductView from './ProductView';
import TopNav from './TopNav';


let {height, width} = Dimensions.get('window');
const SCROLL_FPS = Math.round(1000/30);

let stories = [
    {title: 'Story #1 Title Goes Here', author: "Merc", message: "something goes here", tags: ["erer", "tag2", "tag3"]},
    {title: 'Story #2 Title Goes Here', author: "Aaron", message: "something goes hereidnewhtjewtew", tags: ["erer", "tag2", "tag3"]},
    {title: 'Story #3 Title Goes Here', author:" JAM", message: "random hahaaawew", tags: ["erer", "tag2", "tag3"]}
];

let styles = StyleSheet.create({

    container: {
        backgroundColor: '#000',
        flex: 1,
    },

    page: {
        height: height,
        width: width,
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
            page: 1,
            offset: 0,
        };
    }

    componentDidMount() {
        //this._scrollView.scrollTo({x:375, y:0, animated: false});
    }


    onStoriesScroll(e){

    }

    onTopNavScroll(e){
        if ((e.nativeEvent.contentOffset.x % width) === 0) {
            let newPage = e.nativeEvent.contentOffset.x / width;

            if (this.state.page !== newPage) {
                this.setState({
                    page: newPage,
                    currentTab : newPage
                })
            }
        }
    }

    render() {
        return(
        <View style={styles.container}>



            <ScrollView horizontal={true}
                        pagingEnabled={true}
                        ref={(c) => this._scrollView = c}
                        onScroll={(e) => this.onTopNavScroll(e)}
                        scrollEventThrottle={SCROLL_FPS}>

                <ProductView/>

                <ScrollView
                  onScroll={(e) => this.onStoriesScroll(e)}
                  scrollEventThrottle={SCROLL_FPS}
                  showsVerticalScollIndicator={false}
                  style={styles.storiesScroll}
                >
                    {stories.map((data,i) => <StoriesFeed key={i} title={data.title} author={data.author} />)}
                </ScrollView>


                <InitiativeView/>
            </ScrollView>
            <TopNav tab1Anim={this.state.tab1Anim}
                    tab2Anim={this.state.tab2Anim}
                    tab3Anim={this.state.tab3Anim}
                    currentTab={this.state.currentTab}
                    page={this.state.page}
                    pageTransition={this.state.pageTransition} />

        </View>);
    }

}
