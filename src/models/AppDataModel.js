'use strict';

import Model from 'models';

import StoryModel from './StoryModel';
import InitiativeModel from './InitiativeModel';
import ProductModel from './ProductModel';

const AppDataModel = new Model(
  'AppDataModel',
  {
    stories: [StoryModel],
    initiatives: [InitiativeModel],
    products: [ProductModel]
  }
);

export default AppDataModel;