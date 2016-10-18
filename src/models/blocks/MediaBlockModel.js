'use strict';

import Model from 'models';
import MediaModel from '../MediaModel';
import BlockProperties from '../properties/BlockProperties';

const MediaBlockModel = Model.create(
  'MediaBlock',
  {
    ... BlockProperties,
    media: MediaModel
  }
);

export default MediaBlockModel;