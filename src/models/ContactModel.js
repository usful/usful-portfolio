'use strict';

import Model from 'models';

const ContactModel = Model.create(
  'Contact',
  {
    email: String,
    phone: String,
    uri: String,
    address: String
  }
);

export default ContactModel;