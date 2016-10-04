import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';

import styles from '../../styles';
import HeaderItem from './HeaderItem';
import TitleItem from './TitleItem';
import BodyItem from './BodyItem';
import FeatureImageItem from './FeatureImageItem';
import SliderItem from './SliderItem';
import ImageItem from './ImageItem';
import NextStoryButton from './NextStoryButton';

export default class DetailedStoryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style ={styles.container}>

          <HeaderItem image= {require('../../img/350-200.png')} date='SEPTEMBER 30TH, 2016'/>
          <TitleItem title='Nanoleaf and the Usful Team Partner to Brighten Space' />
          <BodyItem text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>
          <FeatureImageItem image={require('../../img/250-250.png')} byline='Nanoleaf and the Usful Team Partner to Brighten Space' author='-Name Here'/>
          <BodyItem text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>
          <SliderItem images={[require('../../img/350-200.png'),require('../../img/350-200.png'),require('../../img/350-200.png'),require('../../img/350-200.png'),require('../../img/350-200.png')]}/>
          <BodyItem text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>
          <ImageItem image={require('../../img/350-200.png')}/>
          <BodyItem text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>
          <NextStoryButton title='Usful does Summer in Prince Edward County' image={require('../../img/footer.png')}/>
      </ScrollView>

    );

  }
}





