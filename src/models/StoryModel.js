'use strict';

import Model from 'models';

const StoryModel = Model.create(
  'Story',
  {
    name: String,
    author: String,
    description: String,
    date: Date,
    tags: [String]
  }
);

export default StoryModel;