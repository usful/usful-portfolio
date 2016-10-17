'use strict';

import Model from 'models';

import BlockProperties from '../properties/BlockProperties';

const CopyBlockModel = Model.create(
  'CopyBlock',
  {
    ... BlockProperties
  }
);

export default CopyBlockModel;