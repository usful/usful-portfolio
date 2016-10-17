'use strict';

import Model from 'models';

const MediaModel = Model.create(
  'Media',
  {
    contentType: String,
    width: Number,
    height: Number,
    length: Number,
    bytes: Number
  }
);

export default MediaModel;