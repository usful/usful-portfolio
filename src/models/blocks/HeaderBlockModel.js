'use strict';

import Model from 'models';
import MediaModel from '../MediaModel';
import BlockProperties from '../properties/BlockProperties';

const HeaderBlockModel = Model.create(
  'HeaderBlock',
  {
    ... BlockProperties,
    media: [MediaModel]
  }
);

export default HeaderBlockModel;