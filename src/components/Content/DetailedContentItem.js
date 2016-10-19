import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View
} from 'react-native';

import global from '../../styles';

import longDateFormatter from '../../helpers/formatters/longDate';
import Navigation from '../../helpers/Navigation';

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
    let blocks = this.props.content.blocks;

    return (
      <ScrollView style={global.container}>

        <HeaderItem image={require('../../img/350-200.png')} date={longDateFormatter(this.props.content.date)}/>
        <TitleItem content={this.props.content} title={this.props.content.name} tags={this.props.content.tags}/>

        {blocks.map((block, index) => {
          switch (block._type) {
            case 'CopyBlock':
              return <BodyItem key={index} text={block.text}/>;
            case 'LegalBlock':
              return <BodyItem key={index} text={block.text}/>;
            case 'MediaBlock':
              return <ImageItem key={index} image={require('../../img/350-200.png')}/>;
            case 'MediaCarouselBlock':
              return <SliderItem key={index}
                                 images={[require('../../img/350-200.png'), require('../../img/350-200.png'), require('../../img/350-200.png'), require('../../img/350-200.png'), require('../../img/350-200.png')]}/>;
            case 'QuoteBlock':
              return <FeatureImageItem image={require('../../img/350-200.png')}
                                       key={index}
                                       author={block.author}
                                       byline={block.text}/>;
            default:
              return <View key={index}><Text>{block._type}</Text></View>;
          }
        })}
        <NextContentButton content={this.props.nextContent} image={require('../../img/footer.png')}/>
        <CloseButton onPress={() => Navigation.popToRoute(Navigation.PORTFOLIO_SCENE)}/>
      </ScrollView>
    );
  }
}