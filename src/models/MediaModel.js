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
    bytes: Number,
    folder: String
  },
  {
    get uri() {
      return {uri: mediaUriFormatter(this)};
    },

    get type() {
      let result = null;
      let mime = this.contentType.match(/[^/]*/);
      if (mime && mime.length) {
        result = mime[0];
      }
      return result.toString().toUpperCase();
    }
  }
);

export default MediaModel;