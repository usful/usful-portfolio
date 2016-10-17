'use strict';

import Model from 'models';
import BlockProperties from '../properties/BlockProperties';

const QuoteBlockModel = Model.create(
  'QuoteBlock',
  {
    ... BlockProperties,
    author: String,
  }
);

export default QuoteBlockModel;