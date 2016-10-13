'use strict';

import Model from 'models';

import ContentModel from './ContentModel';


const AppDataModel = new Model(
  'AppDataModel',
  {
    content: [ContentModel],
    teamMembers: [String],
  }
);

export default AppDataModel;

