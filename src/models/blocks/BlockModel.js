'use strict';

import Model from 'models';

import BlockProperties from '../properties/BlockProperties';

const BlockModel = new Model(
  'BlockModel',
  {
    ... BlockProperties
  }
);

export default BlockModel;