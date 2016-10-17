'use strict';

import Model from 'models';
import BlockProperties from '../properties/BlockProperties';

const LegalBlockModel = Model.create(
  'LegalBlock',
  {
    ... BlockProperties
  }
);

export default LegalBlockModel;