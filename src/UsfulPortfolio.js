import React, { Component } from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Navigation from './helpers/Navigation';
import AppData from './AppData';
import Team from './components/Team';
import DetailedContentItem from './components/Content/DetailedContentItem';
import Portfolio from './components/Portfolio';

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
    let stories = AppData.content.filter(x => x.type === 'Story');
    let initiatives = AppData.content.filter(x => x.type === 'Initiative');
    let products = AppData.content.filter(x => x.type === 'Product');
      switch (route.id) {
        case Navigation.DETAILED_STORY_SCENE.id: {

          let story = stories.findIndex(x => x._id === route.storyId);
          return <DetailedContentItem content={stories[story]} nextContent={stories[story + 1] || stories[0]}
          />;

        }
        case Navigation.DETAILED_INITIATIVE_SCENE.id: {

          let initiative = initiatives.findIndex(x => x._id === route.initiativeId);
          return <DetailedContentItem content={initiatives[initiative]} nextContent={initiatives[initiative + 1] ||initiatives[0]}
          />;

        }
        case Navigation.DETAILED_PRODUCT_SCENE.id: {

          let product = products.findIndex(x => x._id === route.productId);
          return <DetailedContentItem content={products[product]} nextContent={products[product + 1] || products[0]}
          />;

        }
        case Navigation.MAIN_SCENE.id: {
          return <Portfolio content = {AppData.content}
            />;
        }
        case Navigation.CONTACT_CARD_SCENE.id: {
          return <Team
            />;
        }

      }
    }

  render() {
    return (
      <View style={ {flex:1} } >
        <StatusBar translucent={true} backgroundColor="rgb(0,0,0)"/>
        <Navigator
          ref={(el) => Navigation.navigator = el}
          initialRoute={Navigation.MAIN_SCENE}
          configureScene={() => this.configureScene()}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}