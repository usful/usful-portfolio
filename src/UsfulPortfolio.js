import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
  TouchableOpacity
} from 'react-native';

import AppData from './AppData';

import DetailedStoryItem from './components/Story/DetailedStoryItem';
import Portfolio from './components/Portfolio';
import TagView from './components/TagView';

const styles = StyleSheet.create({
  navBar: {
    padding: 10,
    height: 40,
    backgroundColor: '#999'
  }
});

const DetailedStoryDemoScene = {
  id: 'DetailedStoryDemoScene'
};

const MainNavDemoScene = {
  id: 'MainNavDemoScene'
};

const TagListDemoScene = {
  id: 'TagListDemoScene'
};

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }


  get routeMapper() {
    return {
      LeftButton: function (route, navigator, index, navState) {
        return (
          <TouchableOpacity onPress={() => navigator.pop()}>
            <Text>Back</Text>
          </TouchableOpacity>
        );
      },

      RightButton: function (route, navigator, index, navState) {
        return <Text>Right</Text>
      },

      Title: function (route, navigator, index, navState) {
        return <Text>{route.name}</Text>;
      }
    };
  }

  configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
    function getScene() {
      switch (route.id) {
        case 'DetailedStoryDemoScene': {
          return <DetailedStoryItem story={AppData.stories[0]} nextStory={AppData.stories[1]}/>;
        }
        case 'MainNavDemoScene': {
          return <Portfolio/>;
        }
        case 'TagListDemoScene': {
          return <TagView/>;
        }
        case 'StartScene': {
          return (
            <View>
              <TouchableOpacity onPress={() => navigator.push(DetailedStoryDemoScene)}>
                <Text>Detailed Story Demo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigator.push(TagListDemoScene)}>
                <Text>Tag List Demo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigator.push(MainNavDemoScene)}>
                <Text>Main Nav Demo</Text>
              </TouchableOpacity>
            </View>
          )
        }
      }
    }

    return <View style={{flex: 1, marginTop: 40}}>{getScene()}</View>;
  }

  render() {
    return (
      <View style={ {flex:1} } >
        <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0.2)"/>
        <Navigator
          ref="navigator"
          initialRoute={{id: 'StartScene'}}
          configureScene={() => this.configureScene()}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
          navigationBar={<Navigator.NavigationBar routeMapper={this.routeMapper} style={styles.navBar}/>}
        />
      </View>
    );
  }
}