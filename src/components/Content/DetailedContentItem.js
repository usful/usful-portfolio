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


import Style from '../../styles';

import Font from '../../styles/Font';


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

export default class DetailedContentItem extends Component {

  static defaultProps = {
    content: {},
    nextContent: {}
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      footerToggle: false,
      blockHeight: 0
    }
  }
  
  _handleScroll(el) {
    let pullDown = Platform.OS == 'ios' ? this.state.blockHeight + 100 : this.state.blockHeight;
    let scrollHeight = el.nativeEvent.contentOffset.y + Style.height;
    if(scrollHeight <= this.state.blockHeight){
      this.setState({
        footerToggle: false
      })
    }
    if (scrollHeight >= pullDown) {
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
    return (
      <View>
        <ScrollView
        bounces={true}
        ref={ref => this._ScrollView = ref}
        scrollEventThrottle={1000/30}
        onScroll= {(el) => this._handleScroll(el)}>
          {this.renderFooter()}
        <View
          style = {type !== 'Story' && this.state.footerToggle ? styles.contentShow : styles.contentHide}
          elevation = {10}
          onLayout={(event) => {
            this.setState({blockHeight: event.nativeEvent.layout.height})
          }}
          >
          <HeaderItem type={this.props.content.type} image={this.props.content.header.uri} date={longDateFormatter(this.props.content.date)}/>
          <TitleItem content={this.props.content} title={this.props.content.title} tags={this.props.content.tags}/>


          {blocks.map((block, index) => {
            switch (block._type) {
              case 'CopyBlock':
                return <BodyItem key={index} text={block.text}/>;
              case 'LegalBlock':
                return <BodyItem style={styles.legal} key={index} text={block.text}/>;
              case 'MediaBlock':
                return <ImageItem key={index} style={block.style} image={block.media.uri}/>;
              case 'ButtonBlock':
                return <View key={index} style={[Style.sheets.content, styles.buttonContainer]}><OutlineButton
                  text={block.text} uri={block.uri}/></View>;
              case 'ButtonRowBlock':
                return (
                  <View key={index} style={Style.sheets.content}>
                    {block.title
                      ? <View
                      style={block.buttons.length > 2 ? styles.buttonRowTitleContainer : styles.buttonTitleContainer}>
                      <Text style={styles.buttonTitle}>{block.title}</Text>
                    </View>
                      : null
                    }
                    <View style={[styles.buttonsContainer]}>
                      {block.buttons.map((button, i) =>
                        <View key={i} style={block.buttons.length > 2 ? styles.buttonRow : styles.buttonContainer}>
                          <OutlineButton height={75} text={button.text} uri={button.uri}/>
                        </View>
                      )}
                    </View>
                  </View>
                );
              case 'MediaCarouselBlock':
                return <SliderItem key={index} images={block.media.map((img) => img.uri)}/>;
              case 'QuoteBlock':
                return <QuoteItem key={index} byline={block.text}/>;
              default:
                return <View key={index}><Text>{block._type}</Text></View>;
            }
          })}
          
          <NextContentButton style={ [styles.footer, type === 'Story' ? styles.noShadow : styles.shadow]} current = {this.props.content} content={this.props.nextContent} image={this.props.content.footer.uri}/>
          <CloseButton onPress={() => Navigation.popToRoute(Navigation.PORTFOLIO_SCENE)}/>
        </View>

      </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({

  contentShow: {
    backgroundColor: 'white',
    marginBottom: ContactFooter.FOOTER_HEIGHT - ContactFooter.UNDERLAY_HEIGHT,
  },
  contentHide: {
    backgroundColor: 'white',
    marginBottom: 0
  },
  legal: {
    fontFamily: Font.secondaryFont.fontFamily,
    fontStyle: Font.italics.fontStyle,
    fontSize: 12,
    marginHorizontal: 30,
    flexWrap: 'wrap',
    color: Style.colours.textGrey
  },
  buttonTitle: {
    fontFamily: Font.secondaryFont.fontFamily,
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
});