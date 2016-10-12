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
import DetailedStoryItem from './components/Story/DetailedStory/DetailedStoryItem';
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
      console.log(route);
      switch (route.id) {
        case Navigation.DETAILED_STORY_SCENE.id: {

          let story = AppData.stories.findIndex(x => x.id === route.storyId);
          return <DetailedStoryItem story={AppData.stories[story]} nextStory={AppData.stories[story + 1] || AppData.stories[0]}
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
        <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0.2)"/>
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