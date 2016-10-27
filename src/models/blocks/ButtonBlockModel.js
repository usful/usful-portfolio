'use strict';

import Model from 'models';
import BlockProperties from '../properties/BlockProperties';

const ButtonBlockModel = Model.create(
  'ButtonBlock',
  {
    ... BlockProperties,
    text: String,
    uri: String
  }
);

export default ButtonBlockModel;