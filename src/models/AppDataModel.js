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

    getNextContent(content) {
      function _getNext(arr) {
        return arr[arr.findIndex(x => x._id === content._id) + 1] || arr[0];
      }
      function _getLinkedStory(arr) {
        return arr.find(x => x.name === content.story);
      }

      switch (content.type) {
        case 'Story':
          return _getNext(this.stories);
        case 'Initiative':
          return _getLinkedStory(this.stories);
        case 'Product':
          return _getLinkedStory(this.stories);
      }
    }
  }
);

export default AppDataModel;

