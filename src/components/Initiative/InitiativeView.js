import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ListView,
  Image,
  Dimensions
} from 'react-native';

import InitiativeRow from './InitiativeRow';
import ContactFooter from '../ContactFooter';

let {width, height} = Dimensions.get('window');

export default class InitiativeView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView >
        <View style={styles.container}>
          <InitiativeRow initiatives={this.props.initiatives}/>
        </View>
        <ContactFooter />
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#000'
  },
  container: {
    backgroundColor: '#18232c',
    paddingTop: 100,
    height: height,
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.2
  }
})