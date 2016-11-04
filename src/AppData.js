'use strict';

import AppDataModel from './models/AppDataModel';
import GUID from './helpers/guid';

//Moving test data out into its own files for reusability and to stop this file from growing forever.
import team from './data/team';
import media from './data/media';
import content from './data/content';

/**
 * Quick helper function for test data to grab a random media.
 * @returns {*}
 */

function randomMedia() {
  return media[Math.floor(Math.random() * media.length)];
}

//TODO: Add correct team members for each content piece
//TODO: Better way to retrieve blocks from content data, hardcoded right now to exact position in array, need less terrible solution

const AppData = new AppDataModel(
  {
    team: team,
    content: [
      {
        _id: GUID(),
        hero: media[9],
        type: 'Story',
        name: 'Urban Farming',
        header: media[9],
        title: 'Making a Local Impact on Global Sustainability',
        author: team[0],
        date: new Date(),
        footer: media[14],
        blocks: content[0][0].blocks,
        team: [
          team[6],
          team[3],
          team[1]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        hero: media[14],
        name: '#FarmFreshTO',
        header: media[14],
        title: 'Usful XM’s Food for Thought Experience',
        author: team[0],
        date: new Date(),
        footer: media[4],
        blocks: content[0][1].blocks,
        team: [
          team[1],
          team[5],
          team[4],
          team[6],
          team[3]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        hero: media[4],
        name: 'The Anthropocene',
        header: media[4],
        title: 'Usful as the Digital Partner for the Anthropocene Film Project',
        author: team[0],
        date: new Date(),
        footer: media[33],
        blocks: content[0][2].blocks,
        team: [
          team[0],
          team[1]
        ]
      },
      {
        _id: GUID(),
        type: 'Story',
        hero: media[33],
        name: 'Manufactured Landscapes',
        header: media[33],
        title: 'Using Usful Technology to Create an Interactive Art Gallery',
        author: team[0],
        date: new Date(),
        footer: media[9],
        blocks: content[0][3].blocks,
        team: [
          team[4],
          team[3],
          team[1]
        ]
      },
      {
        _id: GUID(),
        type: 'Initiative',
        name: 'Evolving the Human Condition',
        header: media[17],
        hero: media[17],
        heroDescription: 'Using technology and experience as a means to impact behaviour.',
        title: 'Using technology and experience as a means to impact behaviour.',
        author: team[5],
        footer: media[14],
        blocks: content[1][0].blocks,
        team: [

        ],
        story: '#FarmFreshTO'
      },
      {
        _id: GUID(),
        type: 'Initiative',
        name: 'Developing Efficiencies',
        header: media[15],
        hero: media[15],
        heroDescription: 'Using technology and experience as a means to solving the resource crisis.',
        title: 'Using technology and experience as a means to solving the resource crisis.',
        author: team[4],
        footer: media[9],
        blocks: content[1][1].blocks,
        team: [

        ],
        story: 'Urban Farming'
      },
      {
        _id: GUID(),
        type: 'Product',
        name: 'Lane',
        hero: media[28],
        heroDescription: 'Creating Smart Workplaces',
        title: 'Bringing modern SaaS mobile technology to an untapped and outdated niche market.',
        header: media[28],
        author: team[2],
        footer: media[33],
        blocks: content[2][0].blocks,
        team: [
        ],
        contactInfo: {
          email: 'info@joinlane.com',
          phone: 'tel:1-877-364-6662',
          uri: 'https://joinlane.com/',
          twitter: 'https://twitter.com/joinlane'
        },
        story: 'Manufactured Landscapes'
      },
      {
        _id: GUID(),
        type: 'Product',
        name: 'Usful XM',
        header: media[37],
        author: team[3],
        hero: media[37],
        heroDescription: 'Experiences Designed to Educate, Inform, and Improve the Human Condition',
        title: 'Rethinking experiences to transform believers into doers',
        footer: media[14],
        blocks: content[2][1].blocks,
        team: [
        ],
        story: '#FarmFreshTO'
      }
    ]
  }
);

export default AppData;