import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import SwipeSelector from 'react-native-swipe-selector';
import ContactCards from './ContactCards';

export default class ExampleSwipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };

    this.elements = [
    ];
  }

  render() {

    let elements = [].concat(this.elements).concat(
      [
        {id:1, name: "name1", jobPosition: "dosth", ig: "@asgdfgd"},
        {id: 2, name: "name2", jobPosition: "dosth2", ig: "@a2fgd"},
        {id: 3,name: "name3", jobPosition: "dosth3", ig: "@asgd2223fgd"},
        {id: 4,name: "name4", jobPosition: "dosth4", ig: "@444fgd"},
      ]);

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SwipeSelector onChange={
          ({index:index}) => {
            this.setState({num: index})
          }
        }
                       leftPoint= {{x: -150, y: -50}}
                       rightPoint= {{x: 150, y: -50}}
                       scalingOptions={{padRightItems: 1, padLeftItems: 1}}
        >
          {elements.map((member,i) => <View id={i.toString()} key={i.toString()}>
            <ContactCards   /></View>
          )}
        </SwipeSelector>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  transparentView: {
    backgroundColor: '#00000000'
  }
});