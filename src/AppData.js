'use strict';

import AppDataModel from './models/AppDataModel';
import GUID from './helpers/guid';

//Moving test data out into its own files for reusability and to stop this file from growing forever.
import team from './data/team';
import media from './data/media';

/**
 * Quick helper function for test data to grab a random media.
 * @returns {*}
 */
function randomMedia() {
  return media[Math.floor(Math.random() * media.length)];
}

let storyBlocks = [
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },

  {
    _type: 'QuoteBlock',
    media: randomMedia(),
    text: 'Nanoleaf and the Usful Team Partner to Brighten Space',
    author: 'Clint'
  },
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    _type: 'MediaCarouselBlock',
    media: [randomMedia(),randomMedia(),randomMedia(),randomMedia()],
    height: 300,
    scaleMode: 'contain'
  },
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    _type: 'MediaBlock',
    media: randomMedia()
  },
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    _type: 'LegalBlock',
    text: 'Photograph sources listed here. Photograph sources listed here. Photograph sources listed here.'
  }
];

let initiativeBlocks = [
  {
    _type: 'CopyBlock',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    _type: 'MediaBlock',
    media: randomMedia()
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
        hero: randomMedia(),
        type: 'Story',
        name: 'Better Bulbs',
        header: randomMedia(),
        title: 'Nanoleaf and the Usful Team Partner to Brighten Space',
        author: team[0],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO'],
        footer: randomMedia(),
        blocks: storyBlocks,
        team: [
          team[0],
          team[1],
          team[2]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        hero: randomMedia(),
        name: 'Usful goes to Mars',
        header: randomMedia(),
        title: 'It is now time to start colonizing other planets because it will be fun',
        author: team[0],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO'],
        footer: randomMedia(),
        blocks: storyBlocks,
        team: [
          team[0],
          team[1],
          team[2]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        hero: randomMedia(),
        name: 'Launching the Anthropocene',
        header: randomMedia(),
        title: 'Earth is running out of stuff and we need to do something about it.',
        author: team[0],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO'],
        footer: randomMedia(),
        blocks: storyBlocks,
        team: [
          team[0],
          team[1],
          team[2]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        hero: randomMedia(),
        name: 'Nanoleaf Does something else',
        header: randomMedia(),
        title: 'Some other stuff was done by NanoLeaf, and its really great.',
        author: team[0],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['TEST', 'GMAIL', '#FTFY'],
        footer: randomMedia(),
        blocks: storyBlocks,
        team: [
          team[2],
          team[3],
          team[4]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        name: 'Even more LEDS',
        header: randomMedia(),
        title: 'Nanoleaf and the Usful Team Partner to Brighten Space.',
        hero: randomMedia(),
        author: team[1],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO'],
        footer: randomMedia(),
        blocks: storyBlocks,
        team: [
          team[4],
          team[5],
          team[6]
        ]
      },
      {
        _id: GUID(),
        type: 'Product',
        name: 'Lane',
        hero: randomMedia(),
        heroDescription: 'Lorem Ipsum',
        header: randomMedia(),
        author: team[2],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        footer: randomMedia(),
        blocks: storyBlocks,
        team: [
          team[0],
          team[1],
          team[2]
        ],
        contactInfo: {
          email: 'rishabh@monanetworks.com',
          phone: '123-456-7890',
          uri: 'http://www.hypebeast.com',
          address: '123 Stewart Cres, Toronto, ON, Canada, A1B 2D4 '
        },
        story: 'Better Bulbs'
      },
      {
        _id: GUID(),
        type: 'Product',
        name: 'XM',
        header: randomMedia(),
        author: team[3],
        hero: randomMedia(),
        heroDescription: 'Lorem Ipsum',
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        footer: randomMedia(),
        blocks: storyBlocks,
        team: [
          team[2],
          team[4],
          team[6]
        ],
        contactInfo: {
          email: 'rishabh@monanetworks.com',
          phone: '123-456-7890',
          uri: 'http://www.lane.com',
          address: '123 Stewart Rd, Toronto, ON, Canada, A1B 2D4 '
        },
        story: 'Nanoleaf Does something else'
      },
      {
        _id: GUID(),
        type: 'Initiative',
        name: 'Resource Crisis',
        header: randomMedia(),
        hero: randomMedia(),
        heroDescription: 'Lorem Ipsum',
        author: team[4],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        footer: randomMedia(),
        blocks: initiativeBlocks,
        team: [
          team[1],
          team[2],
          team[3]
        ],
        story: 'Even more LEDS'
      },
      {
        _id: GUID(),
        type: 'Initiative',
        name: 'Human Condition',
        header: randomMedia(),
        hero: randomMedia(),
        heroDescription: 'Lorem Ipsum',
        author: team[5],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        footer: randomMedia(),
        blocks: initiativeBlocks,
        team: [
          team[3],
          team[2],
          team[1]
        ],
        story: 'Usful goes to Mars'
      },
      {
        _id: GUID(),
        type: 'Initiative',
        name: 'Artificial Intelligence',
        header: randomMedia(),
        hero: randomMedia(),
        heroDescription: 'Lorem Ipsum',
        author: team[6],
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        footer: randomMedia(),
        blocks: initiativeBlocks,
        team: [
          team[6],
          team[4],
          team[2]
        ],
        story: 'Launching the Anthropocene'
      },
    ]
  }
);

export default AppData;