import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
ScrollView,
    View,
ListView,
Image
} from 'react-native';

import global from '../../styles';



export default class InitiativeView extends Component {

  constructor(props) {
    super(props);


  }

  render() {
    return (
      <View style={global.content}>
          {this.props.data.map(obj =>
            <Text style={styles.text}>{obj.description}</Text>
          )}
      </View>

    );

  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#000'
  }
})