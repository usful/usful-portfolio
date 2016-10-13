"use strict";

import React from 'react';

export default class Navigation {

  static navigator = null;

  static MAIN_SCENE = {
    id: 'MainNavScene'
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

  static goStory (){

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