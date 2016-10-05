'use strict';

import Model from 'models';

import StoryModel from './StoryModel';

const AppDataModel = new Model(
  'AppDataModel',
  {
    stories: [StoryModel]
  }
);

export default AppDataModel;