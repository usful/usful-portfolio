import media from './media';
function randomMedia() {
  return media[Math.floor(Math.random() * media.length)];
}


export default[
storyBlocks = [
  {
    title: 'Urban Farming',
    blocks: [
      {
      _type: 'CopyBlock',
      text: 'The root of a sustainable future is maintaining a sustainable ecosystem. Food costs are rising, excessive consumption is taking a toll on the environment, and our planet’s climate is drastically changing for the worst.'
      },
      {
        _type: 'CopyBlock',
        text: 'There are many practices that can contribute to improving our global ecosystem. Urban agriculture is one that is feasible and impactful on a local scale.'
      },
      {
        _type: 'MediaBlock',
        media: media[8],
        style: 'round'
      },
      {
        _type: 'QuoteBlock',
        text: 'There are huge environmental and health benefits of urban farming - yet, they remain unknown to the majority of the population.',
      },
      {
        _type: 'CopyBlock',
        text: 'To introduce these benefits to Toronto’s working professionals, Usful partnered with local urban farmers to bring affordable and viable tech solutions to the downtown core. Over one month, Usful’s installation tapped into the minds of thousands by educating people on the positive impact of growing your own food.'
      },
      {
        _type: 'CopyBlock',
        text: 'The installation included:\n\n\u2022 Bright Agrotech’s  ZipGrow Towers\n\u2022 Urban Cultivator Microgreen Growing Units\n\u2022 Landscape Culture’s “Language of Plants'
      },
      {
        _type: 'MediaCarouselBlock',
        media: [media[5], media[6], media[7]],
        height: 300,
        scaleMode: 'contain'
      },
      {
        _type: 'CopyBlock',
        text: 'Attendees were able to interact with the Usful XM installation through a self-guided tour accessible on the exclusive Usful app. The tour explained each installation, its environmental benefit, and how urban farming can positively impact personal health and wellness.'
      },
      {
        _type: 'MediaBlock',
        media: media[7]
      },
      {
        _type: 'CopyBlock',
        text: 'In addition to the exhibit, Usful hosted a mobile Sustainability Fair that engaged people in solutions for indoor and outdoor gardening, methods for reducing food and energy waste, and rewarded people for taking an interest in reducing their ecological footprint.'
      },
      {
        _type: 'CopyBlock',
        text: 'Taking all factors into consideration, Usful reminded the community of the connection that needs to be made between people and food; helping us all to make informed choices when it comes to consumption.'
      },
    ]
  },
  {
    title: '#FarmFreshTO',
    blocks: [
      {
        _type: 'CopyBlock',
        text: 'It’s only been until recently that people are truly giving their food some thought. Attitudes, practices, and beliefs of food are changing. The conscious foodie revolution is soaring and people want to know how their food is produced, distributed, and lastly consumed. '
      },
      {
        _type: 'CopyBlock',
        text: 'The reality remains, however, that people are not as deeply connected to food as they may believe. The missing piece to the food revolution puzzle is educating people on the resources that go into food production and distribution. For this reason, Usful supports the Sustainable Food Revolution.'
      },
      {
        _type: 'MediaBlock',
        media: media[13],
        style: 'round'
      },
      {
        _type: 'QuoteBlock',
        text: 'FarmFreshTO is a farmer’s market with a determined objective to educate people on sustainable food consumption.',
      },
      {
        _type: 'CopyBlock',
        text: 'The market inspires people to think about food on a global scale by living and consuming locally.'
      },
      {
        _type: 'CopyBlock',
        text: 'The seasonal pop-up features local Ontario vendors selling fresh produce, artisan merchandise, and prepared foods.'
      },
      {
        _type: 'CopyBlock',
        text: 'Ticketed weekly lunch sessions held during the FarmFreshTO market are curated by Usful XM to reconnect people with food. Each lunch, featuring a guest speaker, leaves attendees informed on how they can start to make a difference by participating in the sustainable food revolution.'
      },
      {
        _type: 'MediaCarouselBlock',
        media: [media[10], media[11], media[12]],
        height: 300,
        scaleMode: 'contain'
      },
      {
        _type: 'CopyBlock',
        text: 'Partnering with industry leaders in sustainable food production, the FarmFreshTO market displays hydroponic vertical farms in the Usful XM shipping container. As the main attraction, the farm container is open to the public to educate on sustainable food sourcing and the positive impact it has in our community.'
      },
      {
        _type: 'MediaBlock',
        media: media[11]
      },
      {
        _type: 'CopyBlock',
        text: 'Results:\n\nFarmFreshTO is a market attraction that is impacting local communities citywide. During its operating season, FarmFreshTO connects people to local food and leaves a lasting impact on their thoughts of living a modern and sustainable lifestyle.'
      },
      {
        _type: 'ButtonRowBlock',
        title: 'In The News',
        buttons: [
          {
            _type: 'ButtonBlock',
            text: 'Toronto Life',
            uri: 'https://torontolife.com/food/farmers-market-lunch-financial-district-downtown-forno-culture-healthy-butcher/'
          },
          {
            _type: 'ButtonBlock',
            text: 'Toronto Financial District',
            uri: 'http://torontofinancialdistrict.com/a-usful-co-summer-farmfreshto-market-at-bay-adelaide-centre/'
          },
        ]
      },

    ]
  },
  {
    title: 'The Anthropocene',
    blocks: [
      {
        _type: 'CopyBlock',
        text: 'The goal of The Anthropocene is to explore a critical point in Earth and human history, and expand awareness of our species’ reach and impact. From awareness comes understanding, and from understanding comes change.'
      },
      {
        _type: 'CopyBlock',
        text: 'Anthropocene is a term coined by Paul Crutzen and Eugene Stoermer to describe the massive and irreversible effects that humans have had on the planet. The Anthropocene Film Project is from the multiple-award winning team of Jennifer Baichwal, Edward Burtynsky and Nicholas de Pencier. The Film Project marks the third in a trilogy that includes Manufactured Landscapes (2006) and Watermark (2014).'
      },
      {
        _type: 'CopyBlock',
        text: 'As the digital partner of choice, Usful developed an interactive web platform for The Anthropocene Film Project.'
      },
      {
        _type: 'MediaBlock',
        media: media[3],
        style: 'round'
      },
      {
        _type: 'QuoteBlock',
        text: 'The objective was to create an engaging experience for users that parallels the impact humans have on the Planet’s future.',
       },

      {
        _type: 'CopyBlock',
        text: 'As platform engagement and interaction lessens, the experience slowly dies; mirroring the effect humans have on the world if no progression on sustainable resourcing is made . The more a user interacts with the site, the longer it will stay alive. The unique display of information, large background images, and dramatic animations encourage site visitors to continue exploring and raise awareness by sharing the cause with others.'
      },
      {
        _type: 'CopyBlock',
        text: 'Usful built the site on React Native to reuse 80% of the same code for future mobile app development. The Anthropocene site by Usful was nominated for an Awwward in 2016 for its creativity and innovative approach to design.'
      },
      {
        _type: 'CopyBlock',
        text: 'Like what you see? The entire project is open source.'
      },
      {
        _type: 'ButtonRowBlock',
        buttons: [
          {
        _type: 'ButtonBlock',
        text: 'theanthropocene.org',
        uri: 'https://theanthropocene.org/#chapter-0'
      },
      {
        _type: 'ButtonBlock',
        text: 'Open Source Code',
        uri: 'https://github.com/usful/anthropocene'
      }]
      }
    ]
  },
  {
    title: 'Manufactured Landscapes',
    blocks: [
      {
        _type: 'CopyBlock',
        text: 'Manufactured Landscapes is a feature length documentary on the world and work of renowned artist Edward Burtynsky. To share the incredible works and findings of the film, Usful created a self-guided interactive audio tour exploring the photographs of Burtynsky’s 25 year exploration of how industrial activity has created and shaped the landscapes of our world.'
      },
      {
        _type: 'MediaBlock',
        media: media[37],
        style: 'round'
      },
      {
        _type: 'CopyBlock',
        text: 'Held in the public space of one of Toronto’s most modern office buildings, the exhibit featured photographs from quarries, oil spills, and landfills across the globe, leaving the public audience in disbelief of the unexpected beauty in today’s modern landscapes.'
      },
      {
        _type: 'CopyBlock',
        text: 'Usful’s interactive and curated self guided audio tour shared the stories of Burtynsky’s inspiration for each photograph. Lane, Usful’s engagement SaaS platform, made it possible for listeners to engage with the art in an intimate setting. Lane’s advanced analytics tracking system collected data on how many listeners engaged with the audio tour and gathered the feedback given by pop-up visitors. This information was used to evaluate the success of the gallery as well as the social interest in the exhibit.'
      },
      {
        _type: 'MediaBlock',
        media: media[30]
      },
      {
        _type: 'CopyBlock',
        text: 'The gallery connected over 5,000 people daily to Burtynsky’s cause to intersect with a contemporary view of the great ages of man and challenged the thought process of listeners by integrating modern perspectives of art and existence; resulting in an educated and diverse audience. Usful XM successfully transformed unused space into an educational and artistic social setting; promoting creative use of space within Toronto.'
      },
      {
        _type: 'ButtonBlock',
        text: 'Manufactured Landscapes',
        uri: 'https://www.edwardburtynsky.com/site_contents/Films/Manufactured_Landscapes_Film.html'
      },

    ]
  },

],

initiativeBlocks = [
  {
    title: 'Evolving the Human Condition',
    blocks: [
      {
        _type: 'CopyBlock',
        text: 'The universal human condition encompasses key characteristics, events, and situations that define human existence.'
      },
      {
        _type: 'MediaBlock',
        media: media[18]
      },
      {
      _type: 'CopyBlock',
      text: 'With the rise of technological advancements, we believe it is necessary that humans are educated on how technology can be applied to     limit human suffering, impact positive behaviour changes, and help people live fulfilled lives.'
      },
      {
        _type: 'MediaBlock',
        media: media[19]
      },

    ]
  },
  {
    title: 'Developing Efficiencies',
    blocks: [
      {
        _type: 'CopyBlock',
        text: 'Planetary resources are limited. Mass production, resource extraction, and increased energy generation are causing irreversible            effects to our planet.'
      },
      {
        _type: 'MediaBlock',
        media: media[16]
      },
      {
        _type: 'CopyBlock',
        text: 'We believe that developing technology and educating through experiences to increase efficiency, reduce consumption, and increase           re-use within communities are the means to solving this problem.'
      },
      {
        _type: 'MediaBlock',
        media: media[16]
      },

    ]
  }
],

  productBlocks = [
    {
      title: 'Lane',
      blocks: [
        {
          _type: 'CopyBlock',
          text: 'Commercial Real Estate (CRE) is the second largest asset class on earth. It is a multi-trillion dollar industry and one of the largest consumers of our planet’s resources.'
        },
        {
          _type: 'CopyBlock',
          text: 'Everyday millions of people go to work in CRE environments unengaged with their surroundings and unaware of the impact their behaviour has on the environment. This disconnect  costs the CRE industry $2.7B* per year and the companies within it $550B per year in lost productivity**. Over $4,400 per employee.'
        },
        {
          _type: 'MediaBlock',
          media: media[26]
        },
        {
          _type: 'CopyBlock',
          text: 'For years CRE has lagged behind in acquiring modern technology to improve workplace deficiencies. Lane is disrupting this once legacy driven industry by introducing a personal and mobile type of engagement.'
        },
        {
          _type: 'MediaBlock',
          media: media[27],
          style: 'round'
        },
        {
          _type: 'QuoteBlock',
          text: 'Lane brings modern SaaS mobile technology into an untapped and outdated niche market.',
        },
        {
          _type: 'CopyBlock',
          text: 'Property Managers can create interactive mobile experiences to inform and educate their buildings about programs, services, and amenities offered. In return, properties are able to measure building engagement through real-time analytics and make informed decisions that impact energy efficiencies, the human condition, and increase ROI.'
        },
        {
          _type: 'MediaCarouselBlock',
          media: [media[22], media[23], media[24], media[25]],
          height: 300,
          scaleMode: 'contain'
        },
        {
          _type: 'CopyBlock',
          text: 'With 125M employees in over 8M businesses across 600K CRE buildings in North America, Lane is solving the human condition at work and is driving positive behaviour changes through innovation and technology.'
        },
        {
          _type: 'CopyBlock',
          text: 'Results:\n\nThe effects of Lane are real. Since launching the platform, clients have experienced:\n\n\u2022 A 20x increase in tenant engagement\n\u2022 An increase in awareness of building programs from 5% to 40%\n\u2022 An increase in event and program participation from 2% to 20%\n\u2022 A positive environmental impact such as a reduction in print material distributed throughout workplaces\n\u2022 Stronger energy efficiencies due to awareness of energy usage programs through Lane'
        },
        {
          _type: 'LegalBlock',
          text: '*2015 GRESB Report ($0.22c per SF)\n**2013 Gallup "State of the American Workplace'
        },
        {
          _type: 'ButtonBlock',
          text: 'Join Lane',
          uri: 'https://joinlane.com/'
        },
        {
          _type: 'ButtonRowBlock',
          title: 'In The News',
          buttons: [
              {
            _type: 'ButtonBlock',
            text: 'Real Estate Tech News',
            uri: 'http://realestatetechnews.com/blog/lane-saas-software-platform-that-enhances-tenant-engagement'
              },
              {
            _type: 'ButtonBlock',
            text: 'CRE.Tech',
            uri: 'https://cre.tech/toronto-startups-mobile-platform-transforms-tenant-engagement/'
              },
              {
            _type: 'ButtonBlock',
            text: 'The Bulletin',
            uri: 'http://thebulletin.ca/financial-district-bia-signs-on-with-smart-workplaces-provider/'
              },
              {
            _type: 'ButtonBlock',
            text: 'Dx3 Digest',
            uri: 'http://digest.dx3canada.com/2015/11/17/lane-app-connects-employees-to-the-best-parts-of-their-workplace/'
              }
          ]
        },
      ]
    },
    {
      title: 'Usful XM',
      blocks: [
        {
          _type: 'CopyBlock',
          text: 'Traditional outreach has lost its impact.  With the increased demand and shifting interests of the modern consumer, captivating the attention of an audience can be a challenge. The truth is, today’s audience wants to be communicated with differently - through experiences.'
        },
        {
          _type: 'MediaBlock',
          media: media[37],
          style: 'round'
        },
        {
          _type: 'QuoteBlock',
          text: 'By fundamentally understanding our audience, Usful XM curates experiences of deep interaction that connect people to a greater cause.'
        },
        {
          _type: 'CopyBlock',
          text: 'Usful XM exists to educate consumers and create a bond between the audience and Usful’s core philosophy and initiatives. The objective is to inspire our community to move from believers into doers.'
        },
        {
          _type: 'MediaCarouselBlock',
          media: [media[34], media[35], media[36]],
          height: 300,
          scaleMode: 'contain'
        },
        {
          _type: 'CopyBlock',
          text: 'We connect like-minded organizations to their target audience and brand by transforming ordinary and unused spaces into experiences. Our installations introduce and immerse people into what it means to be Usful. With our team of technologists, designers, developers, engineers, and architects at the forefront of XM  we are able to execute experiences that inspire thinking. The immediate result is an educated and informed society that is able to positively impact the human condition within their community.'
        },
        {
          _type: 'CopyBlock',
          text: 'Usful XM has converted thousands of people into believers and transformed them into doers. Our interactive and educational experiences are measurable and impactful. By relating to our audience through food, art and culture, health and wellness, and sustainability, we are able to leave a lasting impression on every Usful XM attendee.'
        },
        {
          _type: 'MediaBlock',
          media: media[36],
          style: 'round'
        },
        {
          _type: 'CopyBlock',
          text: 'Successes:\n\n\u2022 Introduced over 35,500 professionals in the downtown Toronto core to local farmers\n\u2022 Generated $41,566 in community revenue for local farmers and vendors\n\u2022 Educated thousands city-wide on Hydroponic Farming using Usful’s retrofitted Shipping Container that features high-tech vertical growing systems and LED lighting'
        },
        {
          _type: 'ButtonRowBlock',
          title: 'In The News',
          buttons: [
            {
              _type: 'ButtonBlock',
              text: 'Toronto Life',
              uri: 'http://torontolife.com/food/farmers-market-lunch-financial-district-downtown-forno-culture-healthy-butcher/'
            },
          ]
        },

      ]
    }
  ]
  ]

