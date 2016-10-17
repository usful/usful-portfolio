'use strict';

import Model from 'models';
import MediaModel from '../MediaModel';
import BlockProperties from '../properties/BlockProperties';

const MediaCarouselBlockModel = Model.create(
  'MediaCarouselBlock',
  {
    ... BlockProperties,
    media: [MediaModel],
    height: Number,
    scaleMode: String
  }
);

export default MediaCarouselBlockModel;