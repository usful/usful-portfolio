import React, { Component } from 'react';
import Navigation from '../../helpers/Navigation';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';

import global from '../../styles';



export default class InitiativeCard extends Component {

  static defaultProps = {
    initiatives: [{
      name : '',
    }]

  };

  constructor(props) {
    super(props);

  }
  openInitiatives() {

    Navigation.push({id: Navigation.DETAILED_INITIATIVE_SCENE.id, initiativeId: this.props.id});

  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.openInitiatives()} >
      <View style={[styles.card]}>
        <Text style= {styles.text}>{this.props.name}</Text>
      </View>
      </TouchableOpacity>

    );

  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: '#A9A9A9',

  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#999',
    borderWidth: 0.3,
    width: 300,
    height: 400,
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
    marginHorizontal: 10,

  }
})