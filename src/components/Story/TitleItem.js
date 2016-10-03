import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
Image
} from 'react-native';

import TagList from './TagList';

import styles from '../../styles';

export default class TitleItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style= {[styles.content, style.content]}>
          <View style= {style.row1}>
            <TouchableHighlight>
              <Image style= {style.team}></Image>
            </TouchableHighlight>
            <TouchableHighlight style= {style.share}>
              <Image></Image>
            </TouchableHighlight>
          </View>
          <View style= {style.row2}>
            <Text style={style.title}>{this.props.title}</Text>
            <TagList tags = {['EXPERIENTIAL','USFUL HOUSE','#FFTO']}/>
          </View>
      </View>

    );

  }
}

const style = StyleSheet.create({
    content: {
        flexDirection: 'row'
    },
  row1: {
      flex: 1,
      flexDirection: 'column'
  },
  row2: {
    flex: 3,
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    flexWrap: 'wrap'
  }


})