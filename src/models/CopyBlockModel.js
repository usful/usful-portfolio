'use strict';

import Model from 'models';

const CopyBlockModel = Model.create(
  'CopyBlock',
  {
    text: String,
  }
);

export default CopyBlockModel;