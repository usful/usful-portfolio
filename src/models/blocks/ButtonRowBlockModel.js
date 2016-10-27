'use strict';

import Model from 'models';
import ButtonBlock from './ButtonBlockModel';
import BlockProperties from '../properties/BlockProperties';

const ButtonRowBlockModel = Model.create(
  'ButtonRowBlock',
  {
    ... BlockProperties,
    buttons: [ButtonBlock]
  }
);

export default ButtonRowBlockModel;


/**
 * Created by rishabhnag on 2016-10-27.
 */
