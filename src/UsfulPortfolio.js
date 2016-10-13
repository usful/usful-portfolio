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

import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from './helpers/Navigation';
import AppData from './AppData';
import Team from './components/Team';
import DetailedContentItem from './components/DetailedContent/DetailedContentItem';
import Portfolio from './components/Portfolio';
import TagView from './components/TagView';

const NAV_BAR_HEIGHT = 50;

const styles = StyleSheet.create({
  navBar: {
    paddingVertical: 10,
    height: NAV_BAR_HEIGHT,
    backgroundColor: '#999'
  }
});

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
      switch (route.id) {
        case Navigation.DETAILED_STORY_SCENE.id: {

          let story = AppData.content.findIndex(x => x.id === route.storyId && x.type === 'Story');
          return <DetailedContentItem content={AppData.content[story]} nextContent={AppData.content[story + 1] || AppData.content[0]}
          />;

        }
        case Navigation.DETAILED_INITIATIVE_SCENE.id: {

          let initiative = AppData.content.findIndex(x => x.id === route.initiativeId && x.type === 'Initiative');
          return <DetailedContentItem content={AppData.content[initiative]} nextContent={AppData.content[initiative + 1] || AppData.content[0]}
          />;

        }
        case Navigation.DETAILED_PRODUCT_SCENE.id: {

          let product = AppData.content.findIndex(x => x.id === route.productId && x.type === 'Product');
          return <DetailedContentItem content={AppData.content[product]} nextContent={AppData.content[product + 1] || AppData.content[0]}
          />;

        }
        case Navigation.MAIN_SCENE.id: {
          return <Portfolio
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
          //navigationBar={<Navigator.NavigationBar routeMapper={this.routeMapper} style={styles.navBar}/>}
        />
      </View>
    );
  }
}