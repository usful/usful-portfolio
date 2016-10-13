'use strict';

import Model from 'models';
import MediaModel from './MediaModel';

const MediaBlockModel = Model.create(
  'MediaBlock',
  {
    media: MediaModel
  }
);

export default MediaBlockModel;