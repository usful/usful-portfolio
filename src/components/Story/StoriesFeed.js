import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import StoryCard from './StoryCard';

let {height, width} = Dimensions.get('window');

let styles = StyleSheet.create({
  author: {
    color: '#656565',
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 50,

  },
  rect: {
    borderWidth: 1,
    borderColor: 'black',
    minHeight: 200,
    width: width,

  },
  rightContainer: {
    alignItems: 'center',
    flex: 1,
  },
  separator: {
    backgroundColor: '#85cee3',
    height: 2,
  },
  title: {
    color: '#9a9a9a',
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 8,
    maxWidth: 200,
    textAlign: 'center',


  },
});

export default class StoriesFeed extends Component {


  constructor(props) {
    super(props);
  }

  render() {
  return(
    <View>
    {this.props.stories.map((data, index) =>
      <StoryCard key={index} ident={key} title={data.name} navigator = {this.props.navigator} author={data.author}/>
    )}
    </View>
    );
  }
}

