import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    Dimensions,
    View,
    TouchableOpacity,
    Platform
} from 'react-native';

import global from '../../styles';
import Colors from '../../styles/Colours';

import OutlineButton from '../OutlineButton';
import longDateFormatter from '../../helpers/formatters/longDate';
import Navigation from '../../helpers/Navigation';
import ContactFooter from '../ContactFooter';
import CloseButton from './CloseButton';
import HeaderItem from './HeaderItem';
import TitleItem from './TitleItem';
import BodyItem from './BodyItem';
import QuoteItem from './QuoteItem';
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
        return <ContactFooter toggle={this.state.footerToggle}/>;
      case "Story":
        return;
      case "Product":
        return <ContactFooter toggle={this.state.footerToggle} contact={this.props.content.contactInfo}/>;
      default:
        return <View><Text>{this.props.content.type}</Text></View>;
    }
  }

  render() {
    let contentShow = Platform.OS === 'ios' ? styles.contentShow : styles.contentShowAndroid;
    let blocks = this.props.content.blocks;
    let type = this.props.content.type;
    let blockHeight = 0;
    return (

      <ScrollView
        alwaysBounceVertical = {true}
        ref={ref => this._ScrollView = ref}
        scrollEventThrottle={1000/30}
        onScroll= {(el) => this._handleScroll(el, blockHeight)} style={[global.container]}>

          {this.renderFooter()}

        <View
          onLayout={(event) => {
            blockHeight = event.nativeEvent.layout.height;
          }}
          style = {type !== 'Story' && this.state.footerToggle ? contentShow : styles.contentHide}>
          <HeaderItem type={this.props.content.type} image={this.props.content.header.uri} date={longDateFormatter(this.props.content.date)}/>
          <TitleItem content={this.props.content} title={this.props.content.title} tags={this.props.content.tags}/>

          {blocks.map((block, index) => {
            switch (block._type) {
              case 'CopyBlock':
                return <BodyItem key={index} text={block.text}/>;
              case 'LegalBlock':
                return <BodyItem style={styles.legal} key={index} text={block.text}/>;
              case 'MediaBlock':
                return <ImageItem key={index} style= {block.style} image={block.media.uri}/>;
              case 'ButtonBlock':
                return <View  key={index} style = {[global.content,styles.buttonContainer]}><OutlineButton text={block.text} uri={block.uri}/></View>;
              case 'ButtonRowBlock':
                return (<View key={index} style = {[global.content]}>
                  {block.title ? <View style= {block.buttons.length > 2 ? styles.buttonRowTitleContainer : styles.buttonTitleContainer}><Text style= {styles.buttonTitle}>{block.title}</Text></View> : undefined}
                  <View style = {[styles.buttonsContainer]}>
                  {block.buttons.map((button,i) => <View key={i} style = {block.buttons.length > 2 ? styles.buttonRow : styles.buttonContainer}>
                      <OutlineButton height={75} text={button.text} uri={button.uri}/>
                    </View>)}
                </View>
                  </View>)
              case 'MediaCarouselBlock':
                return <SliderItem key={index}
                                   images={block.media.map((img) => img.uri)}/>;
              case 'QuoteBlock':
                return <QuoteItem key={index}
                                  byline={block.text}/>;
              default:
                return <View key={index}><Text>{block._type}</Text></View>;
            }
          })}


          <NextContentButton
            elevation= {5} style={ [styles.footer, type === 'Story' ? styles.noShadow : styles.shadow]} current = {this.props.content} content={this.props.nextContent}
                             image={this.props.content.footer.uri}/>
        </View>

        <CloseButton onPress={() => Navigation.popToRoute(Navigation.PORTFOLIO_SCENE)}/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentShow: {
    marginBottom: ContactFooter.FOOTER_HEIGHT - ContactFooter.UNDERLAY_HEIGHT
  },
  contentShowAndroid: {
    marginBottom: ContactFooter.FOOTER_HEIGHT
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
  buttonTitle: {
    fontFamily: 'Avenir-Book',
    fontSize: 15,
    paddingHorizontal: 30,
    flexWrap: 'wrap'
  },

  buttonTitleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonRowTitleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowOffset: {
      height: 6,
      width: 6
    },
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20
  },
  footer: {
    marginTop: 30
  },
  noShadow: {}
})
