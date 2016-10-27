import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    Dimensions,
    View,
    TouchableOpacity
} from 'react-native';

import global from '../../styles';
import Colors from '../../styles/Colours';

import longDateFormatter from '../../helpers/formatters/longDate';
import Navigation from '../../helpers/Navigation';
import ContactFooter from '../ContactFooter';
import CloseButton from './CloseButton';
import HeaderItem from './HeaderItem';
import TitleItem from './TitleItem';
import BodyItem from './BodyItem';
import FeatureImageItem from './FeatureImageItem';
import SliderItem from './SliderItem';
import ImageItem from './ImageItem';
import NextContentButton from './NextContentButton';

let {width,height} = Dimensions.get('window');

export default class DetailedContentItem extends Component {

  static defaultProps = {
    content: {},
    nextContent: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      footerToggle : false
    }
  }

  _handleScroll(el, blockHeight) {
    let scrollHeight = el.nativeEvent.contentOffset.y + height;
    if (scrollHeight === blockHeight) {
      this.setState({
        footerToggle: true
      });
    }
  }

  renderFooter() {
    switch (this.props.content.type) {
      case "Initiative":
        return <ContactFooter />;
      case "Story":
        return;
      case "Product":
        return <ContactFooter contact={this.props.content.contactInfo}/>;
      default:
        return <View><Text>{this.props.content.type}</Text></View>;
    }
  }

  render() {
    let blocks = this.props.content.blocks;
    let type = this.props.content.type;
    let blockHeight = 0;
    return (

      <ScrollView
        alwaysBounceVertical = {true}
        ref={ref => this._ScrollView = ref}
        scrollEventThrottle={1000/30}
        onScroll= {(el) => this._handleScroll(el, blockHeight)} style={[global.container]}>
        <View style = {this.state.footerToggle ? styles.contactShow : styles.contactHide}>
          {this.renderFooter()}
        </View>
        <View
          onLayout={(event) => {
            blockHeight = event.nativeEvent.layout.height;
          }}
          style = {type !== 'Story' && this.state.footerToggle ? styles.contentShow : styles.contentHide}>
          <HeaderItem image={this.props.content.header.uri} date={longDateFormatter(this.props.content.date)}/>
          <TitleItem content={this.props.content} title={this.props.content.name} tags={this.props.content.tags}/>

          {blocks.map((block, index) => {
            switch (block._type) {
              case 'CopyBlock':
                return <BodyItem key={index} text={block.text}/>;
              case 'LegalBlock':
                return <BodyItem style={styles.legal} key={index} text={block.text}/>;
              case 'MediaBlock':
                return <ImageItem key={index} image={block.media.uri}/>;
              case 'MediaCarouselBlock':
                return <SliderItem key={index}
                                   images={block.media.map((img) => img.uri)}/>;
              case 'QuoteBlock':
                return <FeatureImageItem image={block.media.uri}
                                         key={index}
                                         author={block.author}
                                         byline={block.text}/>;
              default:
                return <View key={index}><Text>{block._type}</Text></View>;
            }
          })}


          <NextContentButton style={type === 'Story' ? styles.noShadow : styles.shadow} current = {type} content={this.props.nextContent}
                             image={this.props.content.footer.uri}/>
        </View>

        <CloseButton onPress={() => Navigation.popToRoute(Navigation.PORTFOLIO_SCENE)}/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contactShow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: ContactFooter.FOOTER_HEIGHT,
    opacity: 1
  },
  contactHide: {
    height: 0,
    opacity: 0
  },
  contentShow: {
    marginBottom: ContactFooter.FOOTER_HEIGHT - ContactFooter.UNDERLAY_HEIGHT
  },
  contentHide: {
    marginBottom: 0
  },
  legal: {
    fontFamily: 'Avenir-BookOblique',
    fontSize: 12,
    marginHorizontal: 30,
    flexWrap: 'wrap',
    color: Colors.textGrey
  },
  shadow: {
    elevation: 3,
    shadowOffset: {
      height: 6,
      width: 6
    },
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  noShadow: {}
})
