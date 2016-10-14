import Model from 'models';

const SociaMediaModel = Model.create(
  'SocialMedia',
  {
    id: String,
    type: String,
    uri: String
  }
);

export default SocialMediaModel;


