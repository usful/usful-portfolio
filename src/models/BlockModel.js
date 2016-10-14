'use strict';

import Model from 'models';
import DocumentProperties from './properties/DocumentProperties';
import CopyBlockModel from './CopyBlockModel';
import LegalBlockModel from './LegalBlockModel';
import MediaBlockModel from './MediaBlockModel';
import MediaCarouselBlockModel from './MediaCarouselBlockModel';
import QuoteBlockModel from './QuoteBlockModel';

const BlockModel = new Model(
  'BlockModel',
  [
  {
      blockType: String,
      animation : String,
      copyBlock: CopyBlockModel,
      legalBlock: LegalBlockModel,
      mediaBlock: MediaBlockModel,
      mediaCarouselBlock: MediaCarouselBlockModel,
      quoteBlock: QuoteBlockModel
  }]
);

export default BlockModel;