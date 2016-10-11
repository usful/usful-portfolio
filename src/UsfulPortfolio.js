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

import AppData from './AppData';

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


  get routeMapper() {
    return {
      LeftButton: function (route, navigator, index, navState) {
        return (
          <TouchableOpacity onPress={() => navigator.pop()}>
            <View style={{paddingHorizontal: 10}}>
              <Icon name="ios-arrow-back" size={25} color="#ffffff"/>
            </View>
          </TouchableOpacity>
        );
      },

      RightButton: function (route, navigator, index, navState) {
        return (
          <TouchableOpacity onPress={() => Alert.alert('Menu?')}>
            <View style={{paddingHorizontal: 10}}>
              <Icon name="ios-menu" size={25} color="#ffffff"/>
            </View>
          </TouchableOpacity>
        );
      },

      Title: function (route, navigator, index, navState) {
        return <Text style={{color: '#fff'}}>{route.id}</Text>;
      }
    };
  }

  configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
    let globalNavigatorProps = {navigator};
    function getScene() {
      switch (route.id) {
        case 'DetailedStoryScene': {
          let storyId = AppData.stories.indexOf(AppData.stories.find(x => x.id === route.storyId));
          console.log(storyId);
          return <DetailedStoryItem story={AppData.stories[storyId]} nextStory={AppData.stories[storyId + 1] || AppData.stories[0]}
                                    {...globalNavigatorProps}/>;
        }
        case 'MainNavScene': {
          return <Portfolio
            {...globalNavigatorProps}/>;
        }

      }
    }

    return <View style={{flex: 1, marginTop: NAV_BAR_HEIGHT}}>{getScene()}</View>;
  }

  render() {
    return (
      <View style={ {flex:1} } >
        <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0.2)"/>
        <Navigator
          ref="navigator"
          initialRoute={{id: 'MainNavScene'}}
          configureScene={() => this.configureScene()}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
          navigationBar={<Navigator.NavigationBar routeMapper={this.routeMapper} style={styles.navBar}/>}
        />
      </View>
    );
  }
}