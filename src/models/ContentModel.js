'use strict';

import Model from 'models';
import BlockModel from './blocks/BlockModel';
import ContactModel from './ContactModel';
import NamedDocumentProperties from './properties/NamedDocumentProperties';
import PersonModel from './PersonModel';

const ContentModel = Model.create(
  'Content',
  {
    ... NamedDocumentProperties,
    type: String,
    author: PersonModel,
    date: Date,
    tags: [String],
    blocks: [Object],
    team: [PersonModel],
    contactInfo: ContactModel
  }
);

export default ContentModel;