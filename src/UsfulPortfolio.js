import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Modal,
  StatusBar,
  View,
  Navigator,
} from 'react-native';

import Navigation from './helpers/Navigation';
import AppData from './AppData';

import Team from './components/Team';
import DetailedContentItem from './components/Content/DetailedContentItem';
import PortfolioScene from './components/scenes/PortfolioScene';
import SplashScene from './components/scenes/SplashScene';
import IntroductionScene from './components/scenes/IntroductionScene';

let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  modalBg: {
    top: 0,
    left: 0,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
});

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isModalVisible: false
    };
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
        return <DetailedContentItem content={route.content} onOpenTeam={(team) => this.openTeamModal(team)} nextContent={AppData.getNextContent(route.content)}/>;
      case Navigation.DETAILED_INITIATIVE_SCENE.id:
        return <DetailedContentItem content={route.content} onOpenTeam={(team) => this.openTeamModal(team)} nextContent={AppData.getNextContent(route.content)}/>;
      case Navigation.DETAILED_PRODUCT_SCENE.id:
        return <DetailedContentItem content={route.content} onOpenTeam={(team) => this.openTeamModal(team)} nextContent={AppData.getNextContent(route.content)}/>;
      case Navigation.SPLASH_SCENE.id:
        return <SplashScene/>;
      case Navigation.INTRODUCTION_SCENE.id:
        return <IntroductionScene/>;
      case Navigation.PORTFOLIO_SCENE.id:
        return <PortfolioScene/>;
      case Navigation.CONTACT_CARD_SCENE.id:
        return <Team content={route.content}/>;
    }
  }

  openTeamModal(team) {
    this.setState({team: team, isModalVisible: true});
  }
  
  closeTeamModal() {
    this.setState({isModalVisible: false});
  };
  
  render() {
    return (
      <View style={ {flex:1} }>
        <StatusBar translucent={true} backgroundColor="rgb(0,0,0)"/>
        <Navigator
          ref={(el) => Navigation.navigator = el}
          initialRoute={Navigation.PORTFOLIO_SCENE}
          configureScene={() => this.configureScene()}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
        />
        <Modal animationType="fade"
               transparent={true}
               visible={this.state.isModalVisible}
               onRequestClose={() => this.closeTeamModal()}>
          <View style={styles.modalBg}>
            <Team team={this.state.team} onClose={() => this.closeTeamModal()} />
          </View>
        </Modal>
      </View>
    );
  }
}