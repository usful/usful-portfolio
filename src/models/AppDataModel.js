'use strict';

import Model from 'models';

import ContentModel from './ContentModel';
import PersonModel from './PersonModel';

const AppDataModel = new Model(
  'AppDataModel',
  {
    content: [ContentModel],
    team: [PersonModel],
  }, {
    get stories() {
      return this.content.filter(x => x.type === 'Story');
    },
    get initiatives() {
      return this.content.filter(x => x.type === 'Initiative');
    },
    get products() {
      return this.content.filter(x => x.type === 'Product');
    },
    //TODO: not working, need to figure out why next item isn't being passed, only works on first card
    getNextContent(content) {
      function _getNext(arr) {
        return arr[arr.findIndex(x => x.id === arr.id) + 1] || arr[0];
      }

      switch (content.type) {
        case 'Story':
          return _getNext(this.stories);
        case 'Initiative':
          return _getNext(this.initiatives);
        case 'Product':
          return _getNext(this.products);
      }
    }
  }
);

export default AppDataModel;

