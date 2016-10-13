"use strict";

import React from 'react';

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

  static routes = [];
  static route = {};

  static initRoutes(route) {
    Navigation.route = route;
    Navigation.routes = [route];
  }

  static push(route) {
    Navigation.routes.push(route);
    this.navigator.push(route)
  }

  static pop() {
    this.navigator.pop();
    return Navigation.routes.pop();
  }

}