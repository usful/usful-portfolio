'use strict';

import Model from 'models';

import StoryModel from './StoryModel';
import InitiativeModel from './InitiativeModel';

const AppDataModel = new Model(
  'AppDataModel',
  {
    stories: [StoryModel],
    initiatives: [InitiativeModel]
  }
);

export default AppDataModel;