'use strict';

import Model from 'models';
import MediaModel from './MediaModel';

const MediaCarouselBlockModel = Model.create(
  'MediaCarouselBlock',
  {
    media: [MediaModel],
    height: Number,
    scaleMode: String
  }
);

export default MediaCarouselBlockModel;