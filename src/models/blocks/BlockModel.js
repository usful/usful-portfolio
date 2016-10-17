'use strict';

import Model from 'models';

import BlockProperties from '../properties/BlockProperties';

import CopyBlockModel from './CopyBlockModel';
import LegalBlockModel from './LegalBlockModel';
import MediaBlockModel from './MediaBlockModel';
import MediaCarouselBlockModel from './MediaCarouselBlockModel';
import QuoteBlockModel from './QuoteBlockModel';

const BlockModel = new Model(
  'BlockModel',
  {
    ... BlockProperties
  }
);

export default BlockModel;