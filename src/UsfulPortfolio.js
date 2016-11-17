import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Navigator,
} from 'react-native';

import Navigation from './helpers/Navigation';
import AppData from './AppData';

import DetailedContentItem from './components/Content/DetailedContentItem';
import PortfolioScene from './components/scenes/PortfolioScene';
import SplashScene from './components/scenes/SplashScene';
import IntroductionScene from './components/scenes/IntroductionScene';
import Snap from '../snap/Snap';

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  configureScene() {
    return {
      ...Navigator.SceneConfigs.PushFromRight,
      gestures: {}
    };
  }

  
  renderScene(route, navigator) {
    switch (route.id) {
      case Navigation.DETAILED_STORY_SCENE.id:
        return <DetailedContentItem content={route.content} nextContent={AppData.getNextContent(route.content)}/>;
      case Navigation.DETAILED_INITIATIVE_SCENE.id:
        return <DetailedContentItem content={route.content} nextContent={AppData.getNextContent(route.content)}/>;
      case Navigation.DETAILED_PRODUCT_SCENE.id:
        return <DetailedContentItem content={route.content} nextContent={AppData.getNextContent(route.content)}/>;
      case Navigation.SPLASH_SCENE.id:
        return <SplashScene/>;
      case Navigation.INTRODUCTION_SCENE.id:
        return <IntroductionScene/>;
      case Navigation.PORTFOLIO_SCENE.id:
        return <PortfolioScene/>;
      case Navigation.CONTACT_CARD_SCENE.id:
        return <Team content={route.content}/>;
      case Navigation.SNAP.id:
        return <Snap/>
    }
  }

  render() {
    return (
      <View style={ {flex:1} }>
        <StatusBar translucent={true} backgroundColor="rgb(0,0,0)"/>
        <Navigator
          ref={(el) => Navigation.navigator = el}
          initialRoute={Navigation.SNAP}
          configureScene={() => this.configureScene()}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
        />
      </View>
    );
  }
}