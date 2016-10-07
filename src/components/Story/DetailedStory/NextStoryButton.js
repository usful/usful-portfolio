import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
Image,
TouchableOpacity,
    View
} from 'react-native';

import global from '../../../styles';

export default class NextStoryButton extends Component {
  constructor(props) {
    super(props);
  }
_nextStory(e){
  {this.props.navigator.push(
    {
      id: 'DetailedStoryScene',
      storyId: 1
    }
  )}
}
  render() {
    return (
      <TouchableOpacity
        onPress={(e)=>this._nextStory(e)}>
        <View style={style.content}>
          <View style={style.row1}>
            <Text style={style.title}>{this.props.title}</Text>
            <Text style={style.next}>NEXT STORY</Text>
          </View>
          <View style={style.row2}>
            <Image style={style.image} source={this.props.image}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  row1: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'center',
    marginRight: 35
  },
  row2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    height: 150
  },
  title: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 18,
    flexWrap: 'wrap'
  },
  next: {
    marginTop: 15,
    fontSize: 13,
    fontFamily: 'Avenir',
    alignSelf: 'flex-start'
  }
});