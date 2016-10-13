import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View
} from 'react-native';

import global from '../../styles';

import longDateFormatter from '../../helpers/formatters/longDate';

import CloseButton from './CloseButton';
import HeaderItem from './HeaderItem';
import TitleItem from './TitleItem';
import BodyItem from './BodyItem';
import FeatureImageItem from './FeatureImageItem';
import SliderItem from './SliderItem';
import ImageItem from './ImageItem';
import NextContentButton from './NextContentButton';

export default class DetailedContentItem extends Component {
  static defaultProps = {
    content: {},
    nextContent: {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={global.container}>
        <CloseButton/>
        <HeaderItem image={require('../../img/350-200.png')} date={longDateFormatter(this.props.content.date)}/>
        <TitleItem content ={this.props.content} title={this.props.content.name} tags={this.props.content.tags}/>
        <BodyItem text={this.props.content.description}/>
        <FeatureImageItem image={require('../../img/250-250.png')}
                          byline={this.props.content.name}
                          author={this.props.content.author}/>
        <BodyItem text={this.props.content.description}/>
        <SliderItem
          images={[require('../../img/350-200.png'), require('../../img/350-200.png'), require('../../img/350-200.png'), require('../../img/350-200.png'), require('../../img/350-200.png')]}/>
        <BodyItem text={this.props.content.description}/>
        <ImageItem image={require('../../img/350-200.png')}/>
        <BodyItem text={this.props.content.description}/>

        <NextContentButton content ={this.props.nextContent} image={require('../../img/footer.png')}/>
      </ScrollView>
    );
  }
}