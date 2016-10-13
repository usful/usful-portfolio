'use strict';

import Model from 'models';
import BlockModel from './BlockModel';
import ContactModel from './ContactModel';
import DocumentProperties from './properties/DocumentProperties';

const ContentModel = Model.create(
  'Content',
  [
    DocumentProperties,
  {
    type: String,
    name: String,
    author: String,
    description: String,
    date: Date,
    tags: [String],
    blocks: [BlockModel],
    teamMembers: [String],
    contactInfo: ContactModel
  }]
);

export default ContentModel;