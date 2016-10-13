'use strict';

import Model from 'models';
import MediaModel from './MediaModel';

const HeaderBlockModel = Model.create(
  'HeaderBlock',
  {
    text: String,
    media: [MediaModel]
  }
);

export default HeaderBlockModel;