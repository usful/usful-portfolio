'use strict';

import Model from 'models';

/**
 * CJR: Don't remove this import, forces BlockModel to be loaded/inited.
 */
import BlockModel from './blocks/BlockModel';

import MediaModel from './MediaModel';
import ContactModel from './ContactModel';
import NamedDocumentProperties from './properties/NamedDocumentProperties';
import PersonModel from './PersonModel';

const ContentModel = Model.create(
  'Content',
  {
    ... NamedDocumentProperties,
    type: String,
    title: String,
    header: MediaModel,
    author: PersonModel,
    date: Date,
    hero: MediaModel,
    tags: [String],
    blocks: [Object],
    team: [PersonModel],
    footer: MediaModel,
    contactInfo: ContactModel
  }
);

export default ContentModel;