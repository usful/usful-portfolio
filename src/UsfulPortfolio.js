import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Navigator,
} from 'react-native';

import Navigation from './helpers/Navigation';
import AppData from './AppData';

import DetailedStoryItem from './components/Story/DetailedStory/DetailedStoryItem';

import PortfolioScene from './components/scenes/PortfolioScene';
import SplashScene from './components/scenes/SplashScene';
import IntroductionScene from './components/scenes/IntroductionScene';

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'SplashScene':
        return <SplashScene/>;
      case 'IntroductionScene':
        return <IntroductionScene/>;
      case 'PortfolioScene':
        return <PortfolioScene/>;
      case 'DetailedStoryScene':
        let story = AppData.stories.findIndex(x => x.id === route.story.id);

        return <DetailedStoryItem story={AppData.stories[story]}
                                  nextStory={AppData.stories[story + 1] || AppData.stories[0]}/>;
    }
  }

  render() {
    return (
      <View style={ {flex:1} } >
        <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0.2)"/>
        <Navigator
          ref={(el) => Navigation.navigator = el}
          initialRoute={Navigation.SPLASH_SCENE}
          configureScene={() => this.configureScene()}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
        />
      </View>
    );
  }
}