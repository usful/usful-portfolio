'use strict';

import Model from 'models';

const ProductModel = Model.create(
  'Product',
  {
    name: String,
    description: String,
    email: String,
    phone: String,
    url: String,
    address: String
  }
);

export default ProductModel;