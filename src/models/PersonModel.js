import Model from 'models';

import NamedDocumentProperties from './properties/NamedDocumentProperties';
import SocialMediaModel from './SocialMediaModel';

const PersonModel = Model.create(
  'Person',
  {
    ... NamedDocumentProperties,
    tags: [String],
    socialAccounts: [SocialMediaModel]
  }
);

export default PersonModel;