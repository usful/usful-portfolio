'use strict';

import AppDataModel from './models/AppDataModel';
import GUID from './helpers/guid';

const AppData = new AppDataModel(
  {
    content: [{
        _id: GUID(),
        type: 'Story',
        name: 'Nanoleaf and the Usful Team Partner to Brighten Space',
        author: 'Clint',
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO'],
        blocks: [
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaBlock',
            mediaBlock: {
              media: {

              }
            }
          },
          {
            blockType: 'QuoteBlock',
            quoteBlock: {
              text: 'Nanoleaf and the Usful Team Partner to Brighten Space',
              author: 'Clint'
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaCarouselBlock',
            mediaCarouselBlock: {
              media: {

              },
              height: 300,
              scaleMode: 'contain'
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaBlock',
            mediaBlock: {
              media: {

              }
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          }
        ],
        teamMembers: [
          'Clint', 'Rishabh', 'Merc'
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        name: 'Nanoleaf Team Partners With Usful',
        author: 'Clint',
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['TEST', 'GMAIL', '#FTFY'],
        blocks: [
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaBlock',
            mediaBlock: {
              media: {

              }
            }
          },
          {
            blockType: 'QuoteBlock',
            quoteBlock: {
              text: 'Nanoleaf and the Usful Team Partner to Brighten Space',
              author: 'Clint'
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaCarouselBlock',
            mediaCarouselBlock: {
              media: {

              },
              height: 300,
              scaleMode: 'contain'
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaBlock',
            mediaBlock: {
              media: {

              }
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          }
        ],
        teamMembers: [
          'Mecha', 'Clint', 'Kofi'
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        name: 'Nanoleaf and the Usful Team Partner to Brighten Space',
        author: 'Clint',
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['EXPERIENTIAL', 'USFUL HOUSE', '#FFTO'],
        blocks: [
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaBlock',
            mediaBlock: {
              media: {

              }
            }
          },
          {
            blockType: 'QuoteBlock',
            quoteBlock: {
              text: 'Nanoleaf and the Usful Team Partner to Brighten Space',
              author: 'Clint'
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaCarouselBlock',
            mediaCarouselBlock: {
              media: {

              },
              height: 300,
              scaleMode: 'contain'
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaBlock',
            mediaBlock: {
              media: {

              }
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          }
        ],
        teamMembers: [
          'Clint', 'Rishabh', 'Merc'
        ]
      },
      {
        _id: GUID(),
        type: 'Product',
        name: 'Lane',
        author: 'Clint',
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        blocks: [
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaBlock',
            mediaBlock: {
              media: {

              }
            }
          },
          {
            blockType: 'QuoteBlock',
            quoteBlock: {
              text: 'Nanoleaf and the Usful Team Partner to Brighten Space',
              author: 'Clint'
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaCarouselBlock',
            mediaCarouselBlock: {
              media: {

              },
              height: 300,
              scaleMode: 'contain'
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaBlock',
            mediaBlock: {
              media: {

              }
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          }
        ],
        teamMembers: [
          'Clint', 'Rishabh', 'Merc'
        ],
        contactInfo: {
          email: 'rishabh@monanetworks.com',
          phone: '123-456-7890',
          uri: 'http://www.lane.com',
          address: '123 Stewart Cres, Toronto, ON, Canada, A1B 2D4 '
        }
      },
      {
        _id: GUID(),
        type: 'Initiative',
        name: 'Resource Crisis',
        author: 'Merc',
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        blocks: [
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
          {
            blockType: 'MediaBlock',
            mediaBlock: {
              media: {

              }
            }
          },
          {
            blockType: 'CopyBlock',
            copyBlock: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            }
          },
        ],
        teamMembers: [
          'Clint', 'Rishabh', 'Merc'
        ]
      },
    ]
  }
);

export default AppData;