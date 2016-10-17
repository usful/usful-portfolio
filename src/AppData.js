'use strict';

import AppDataModel from './models/AppDataModel';
import GUID from './helpers/guid';

let team = [
  {
    _id: GUID(),
    name: 'Clinton Robinson',
    description: 'Something.',
    tags: ['Vision', 'Leadership', 'Technology']
  }, {
    _id: GUID(),
    name: 'Kofi Gyekye',
    description: 'Something Else.',
    tags: ['Relationships', 'Stuff', 'More Stuff']
  }, {
    _id: GUID(),
    name: 'Rhea Claus',
    description: 'Something Else.',
    tags: ['Relationships', 'Stuff', 'More Stuff']
  }, {
    _id: GUID(),
    name: 'Mecha Clarke',
    description: 'Something Else.',
    tags: ['Relationships', 'Stuff', 'More Stuff']
  }, {
    _id: GUID(),
    name: 'Juliana Ciccarelli',
    description: 'Something Else.',
    tags: ['Relationships', 'Stuff', 'More Stuff']
  }, {
    _id: GUID(),
    name: 'Casey Pierria',
    description: 'Something Else.',
    tags: ['Relationships', 'Stuff', 'More Stuff']
  }, {
    _id: GUID(),
    name: 'Alexandra Panagoulia',
    description: 'Something Else.',
    tags: ['Relationships', 'Stuff', 'More Stuff']
  }, {
    _id: GUID(),
    name: 'Jessica Graziani',
    description: 'Something Else.',
    tags: ['Relationships', 'Stuff', 'More Stuff']
  }, {
    _id: GUID(),
    name: 'Rishabh Nag',
    description: 'Something Else.',
    tags: ['Relationships', 'Stuff', 'More Stuff']
  }, {
    _id: GUID(),
    name: 'Mercedes',
    description: 'Something Else.',
    tags: ['Relationships', 'Stuff', 'More Stuff']
  }
];

let storyBlocks = [
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },

  {
    _type: 'QuoteBlock',
    text: 'Nanoleaf and the Usful Team Partner to Brighten Space',
    author: 'Clint'
  },
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    _type: 'MediaCarouselBlock',
    media: {},
    height: 300,
    scaleMode: 'contain'
  },
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    _type: 'MediaBlock',
    media: {}
  },
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  }
];

let initiativeBlocks = [
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    _type: 'MediaBlock',
    media: {}
  },
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
];

const AppData = new AppDataModel(
  {
    team: team,
    content: [
      {
        _id: GUID(),
        type: 'Story',
        name: 'Nanoleaf and the Usful Team Partner to Brighten Space',
        author: team[0],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO'],
        blocks: storyBlocks,
        teamMembers: [
          team[0],
          team[1],
          team[2]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        name: 'Usful goes to Mars',
        author: team[0],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO'],
        blocks: storyBlocks,
        teamMembers: [
          team[0],
          team[1],
          team[2]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        name: 'Launching the Anthropocene',
        author: team[0],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO'],
        blocks: storyBlocks,
        teamMembers: [
          team[0],
          team[1],
          team[2]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        name: 'Nanoleaf Does something else',
        author: team[0],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['TEST', 'GMAIL', '#FTFY'],
        blocks: storyBlocks,
        teamMembers: [
          team[2],
          team[3],
          team[4]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        name: 'Nanoleaf and the Usful Team Partner to Brighten Space',
        author: team[1],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO'],
        blocks: storyBlocks,
        teamMembers: [
          team[4],
          team[5],
          team[6]
        ]
      },
      {
        _id: GUID(),
        type: 'Product',
        name: 'Lane',
        author: team[2],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        blocks: storyBlocks,
        teamMembers: [
          team[0],
          team[1],
          team[2]
        ],
        contactInfo: {
          email: 'rishabh@monanetworks.com',
          phone: '123-456-7890',
          uri: 'http://www.hypebeast.com',
          address: '123 Stewart Cres, Toronto, ON, Canada, A1B 2D4 '
        }
      },
      {
        _id: GUID(),
        type: 'Product',
        name: 'XM',
        author: team[3],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        blocks: storyBlocks,
        teamMembers: [
          team[2],
          team[4],
          team[6]
        ],
        contactInfo: {
          email: 'rishabh@monanetworks.com',
          phone: '123-456-7890',
          uri: 'http://www.lane.com',
          address: '123 Stewart Rd, Toronto, ON, Canada, A1B 2D4 '
        }
      },
      {
        _id: GUID(),
        type: 'Initiative',
        name: 'Resource Crisis',
        author: team[4],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        blocks: initiativeBlocks,
        teamMembers: [
          team[1],
          team[2],
          team[3]
        ]
      },
      {
        _id: GUID(),
        type: 'Initiative',
        name: 'Human Condition',
        author: team[5],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        blocks: initiativeBlocks,
        teamMembers: [
          team[3],
          team[2],
          team[1]
        ]
      },
      {
        _id: GUID(),
        type: 'Initiative',
        name: 'Artificial Intelligence',
        author: team[6],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        blocks: initiativeBlocks,
        teamMembers: [
          team[6],
          team[4],
          team[2]
        ]
      },
    ]
  }
);

export default AppData;