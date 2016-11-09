import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';

import Style from '../../styles';

const styles = StyleSheet.create({
  text: {
    width: Style.width,
    fontFamily: 'Avenir-Book',
    fontSize: 15,
    paddingHorizontal: 30,
    flexWrap: 'wrap'
  }
});

export default class BodyItem extends Component {
  
  static defaultProps = {
    style: styles.text
  };
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Style.sheets.content}>
        <Text style={this.props.style}>{this.props.text}</Text>
      </View>
    );
  }
}
