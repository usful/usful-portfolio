'use strict';

import Model from 'models';

const QuoteBlockModel = Model.create(
  'QuoteBlock',
  {
    text: String,
    author: String,
  }
);

export default QuoteBlockModel;