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

  static CONTACT_CARD_SCENE = {
    id: 'ContactCardScene'
  };

  static DETAILED_INITIATIVE_SCENE = {
    id: 'DetailedInitiativeScene'
  };

  static DETAILED_PRODUCT_SCENE = {
    id: 'DetailedProductScene'
  };

  static SNAP = {
    id: 'Snap'
  }

  static SHOWSNAP = {
    id: 'ShowSnap'
  }

  static FILTERS = {
    id: 'Filters'
  }

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

  static popToRoute(route) {
    this.navigator.popToRoute(route);
  }

  /* static pushPic(picPath) {
    this.push({id: this.SHOWSNAP.id, pic: picPath});

  } */

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