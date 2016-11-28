"use strict";

import React from 'react';

import {BackAndroid} from 'react-native';

export default class Navigation {

  static navigator = null;

  static SPLASH_SCENE = {
    id: 'SplashScene'
  };

  static INTRODUCTION_SCENE = {
    id: 'IntroductionScene'
  };

  static PORTFOLIO_SCENE = {
    id: 'PortfolioScene'
  };

  static DETAILED_STORY_SCENE = {
    id: 'DetailedStoryScene'
  };

  static CONTACT_CARD_SCENE = {
    id: 'ContactCardScene'
  };

  static DETAILED_INITIATIVE_SCENE = {
    id: 'DetailedInitiativeScene'
  };

  static DETAILED_PRODUCT_SCENE = {
    id: 'DetailedProductScene'
  };

  static routes = [];
  static route = {};

  static initRoutes(route) {
    Navigation.route = route;
    Navigation.routes = [route];
  }

  static androidBackPressed() {

      if (Navigation.routes[lastIndex].id === ('PortfolioScene' || 'IntroductionScene')) {
          BackAndroid.exitApp();
          return false;
      }

      Navigation.pop();
      return true;
  }

  static push(route) {
    Navigation.routes.push(route);
    this.navigator.push(route);
  }

  static pop() {
    this.navigator.pop();
    Navigation.routes.pop();
  }

  static popToRoute(route) {

    this.navigator.popToRoute(route);
    Navigation.routes.pop(route);
  }

  static goContent(content) {
    switch (content.type) {
      case 'Story':
        this.push({id: this.DETAILED_STORY_SCENE.id, content: content});
        break;
      case 'Initiative':
        this.push({id: this.DETAILED_INITIATIVE_SCENE.id, content: content});
        break;
      case 'Product':
        this.push({id: this.DETAILED_PRODUCT_SCENE.id, content: content});
        break;
    }
  }
}

BackAndroid.addEventListener('hardwareBackPress', Navigation.androidBackPressed);