import Model from 'models';

const SocialMediaModel = Model.create(
  'SocialMedia',
  {
    id: String,
    type: String,
    uri: String
  }
);

export default SocialMediaModel;


