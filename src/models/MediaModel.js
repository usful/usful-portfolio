'use strict';

import Model from 'models';
import DocumentProperties from './properties/DocumentProperties';

import mediaUriFormatter from '../helpers/formatters/mediaUri';

const MediaModel = Model.create(
  'Media',
  {
    ... DocumentProperties,
    contentType: String,
    width: Number,
    height: Number,
    length: Number,
    bytes: Number
  },
  {
    get uri() {
      return {uri: mediaUriFormatter(this)};
    }
  }
);

export default MediaModel;