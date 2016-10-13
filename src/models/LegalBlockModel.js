'use strict';

import Model from 'models';
import MediaModel from './MediaModel';

const LegalBlockModel = Model.create(
  'LegalBlock',
  {
    text: String,
  }
);

export default LegalBlockModel;