'use strict';

import Model from 'models';

const InitiativeModel = Model.create(
  'Initiative',
  {
    name: String,
    description: String,
  }
);

export default InitiativeModel;