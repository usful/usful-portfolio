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

  static routes = [];
  static route = {};

  static set navigator(val) {
    navigator = val;
  }

  static initRoutes(route) {
    Navigation.route = route;
    Navigation.routes = [route];
  }

  static goStory (){

  }

  static push(route) {
    Navigation.routes.push(route);
      navigator.push(route)
  }

  static pop() {
    navigator.pop();
    return Navigation.routes.pop();
  }

}