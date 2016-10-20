import Model from 'models';

import NamedDocumentProperties from './properties/NamedDocumentProperties';
import SocialMediaModel from './SocialMediaModel';
import MedialModel from './MediaModel';

const PersonModel = Model.create(
  'Person',
  {
    ... NamedDocumentProperties,
    tags: [String],
    socialAccounts: [SocialMediaModel],
    picture: MedialModel
  }
);

export default PersonModel;