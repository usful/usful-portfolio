"use strict";

import React from 'react';

let navigator;


export default class Navigation {

  static MAIN_SCENE = {
    id: 'MainNavScene'
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

  static set navigator(val) {
    navigator = val;
  }

  static initRoutes(route) {
    Navigation.route = route;
    Navigation.routes = [route];
  }

  static push(route) {
    Navigation.routes.push(route);
    navigator.push(route)
  }

  static pop() {
    navigator.pop();
  }
  static popToRoute(route) {
    navigator.popToRoute(route);
  }

}