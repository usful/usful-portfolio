import Model from 'models';

import SocialMediaModel from './SocialMediaModel';

const PersonModel = Model.create(
  'Person',
  {
    id: String,
    name: String,
    tags: [String],
    description: String,
    socialAccounts: [SocialMediaModel]
  }
);

export default PersonModel;