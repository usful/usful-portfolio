'use strict';

import AppDataModel from './models/AppDataModel';
import GUID from './helpers/formatters/guid';

const AppData = new AppDataModel(
  {
    stories: [{
      id: GUID(),
      name: 'Nanoleaf and the Usful Team Partner to Brighten Space',
      author: 'Clint',
      date: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO']
    }, {
      id: GUID(),
      name: 'Nanoleaf Partners to Brighten Usful Team',
      author: 'Rishabh',
      date: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      tags: ['HORSE', 'GMAIL', '#FTFY']
    }, {
      id: GUID(),
      name: 'Story 3',
      author: 'Rishabh',
      description: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.',
      tags: ['pig', 'horse']
    }, {
      id: GUID(),
      name: 'Story 4',
      author: 'Clovis',
      description: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.',
      tags: ['cat', 'dog']
    }, {
      id: GUID(),
      name: 'Story 5',
      author: 'Bill',
      description: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.',
      tags: ['elephant', 'giraffe']
    }, {
      id: GUID(),
      name: 'Story 6',
      author: 'Doug',
      description: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.',
      tags: ['cat', 'dog']
    }, {
      id: GUID(),
      name: 'Story 7',
      author: 'Juliana',
      description: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.',
      tags: ['giraffe', 'elephant']
    }, {
      id: GUID(),
      name: 'Story 8',
      author: 'Mecha',
      description: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.',
      tags: ['elephant', 'giraffe']
    }, {
      id: GUID(),
      name: 'Story 9',
      author: 'Mersay',
      description: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.',
      tags: ['cat', 'giraffe']
    }, {
      id: GUID(),
      name: 'Story 10',
      author: 'Kofi',
      description: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.',
      tags: ['elephant', 'dog']
    }],
    initiatives: [{
      name: 'Initiative 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, {
      name: 'Initiative 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, {
      name: 'Initiative 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, {
      name: 'Initiative 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, {
      name: 'Initiative 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }],
    products: [{
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      email: 'mailto:info@monanetworks.com',
      phone: 'tel:1234567890',
      url: 'https://www.joinlane.com',
      address: '46 Stewart St, Toronto, ON, Canada, A1B 2C3'
    }, {
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      email: 'mailto:info@test.com',
      phone: 'tel:1234567890',
      url: 'https://www.facebook.com',
      address: '46 Stewart Dr, Toronto, ON, Canada, A1B 2C3'
    }, {
      name: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      email: 'mailto:info@monanetworks.com',
      phone: 'tel:1234567890',
      url: 'https://www.ign.com',
      address: '46 Stewart Terr, Toronto, ON, Canada, A1B 2C3'
    }, {
      name: 'Product 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      email: 'mailto:info@monanetworks.com',
      phone: 'tel:1234567890',
      url: 'https://www.cnn.com',
      address: '46 Stewart Cres, Toronto, ON, Canada, A1B 2C3'
    }, {
      name: 'Product 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      email: 'mailto:info@monanetworks.com',
      phone: 'tel:1234567890',
      url: 'https://www.hypebeast.com',
      address: '46 Stewart Rd, Toronto, ON, Canada, A1B 2C3'
    }]
  }
);

export default AppData;