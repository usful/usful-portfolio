import Model from 'models';

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