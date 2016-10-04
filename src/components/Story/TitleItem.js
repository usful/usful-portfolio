import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
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
            <TouchableOpacity>
              <Image style= {style.team} source={require('../../img/judge.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image style= {style.share} source={require('../../img/share.png')}></Image>
            </TouchableOpacity>
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
        flexDirection: 'row',
    },
  row1: {
      flex: 1,
      flexDirection: 'column',
    alignItems: 'center'
  },
  team: {
    borderRadius: 22,
    height: 45,
    width: 45,
    borderColor: 'transparent',
    borderWidth: 0.4,
    marginBottom: 20

  },
  row2: {
    flex: 3,
    flexDirection: 'column',
    marginRight: 15
  },
  title: {
    fontSize: 27,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    flexWrap: 'wrap'
  }


})