import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';

import global from '../../../styles';

import longDateFormatter from '../../../helpers/formatters/longDate';

import HeaderItem from './HeaderItem';
import TitleItem from './TitleItem';
import BodyItem from './BodyItem';
import FeatureImageItem from './FeatureImageItem';
import SliderItem from './SliderItem';
import ImageItem from './ImageItem';
import NextStoryButton from './NextStoryButton';

export default class DetailedStoryItem extends Component {
  static defaultProps = {
    story: {},
    nextStory: {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={global.container}>
        <HeaderItem image={require('../../../img/350-200.png')} date={longDateFormatter(this.props.story.date)}/>
        <TitleItem title={this.props.story.name} tags={this.props.story.tags}/>
        <BodyItem text={this.props.story.description}/>
        <FeatureImageItem image={require('../../../img/250-250.png')}
                          byline={this.props.story.name}
                          author={this.props.story.author}/>
        <BodyItem text={this.props.story.description}/>
        <SliderItem
          images={[require('../../../img/350-200.png'), require('../../../img/350-200.png'), require('../../../img/350-200.png'), require('../../../img/350-200.png'), require('../../../img/350-200.png')]}/>
        <BodyItem text={this.props.story.description}/>
        <ImageItem image={require('../../../img/350-200.png')}/>
        <BodyItem text={this.props.story.description}/>

        <NextStoryButton navigator = {this.props.navigator} story={this.props.nextStory} image={require('../../../img/footer.png')}/>
      </ScrollView>
    );
  }
}