import React, {Component} from 'react';
import Navigation from '../../helpers/Navigation';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

const style = StyleSheet.create({
  content: {
    flexDirection: 'row'
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
    alignItems: 'flex-end'
  },
  image: {
    width: 125,
    height: 150
  },
  title: {
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 18,
    flexWrap: 'wrap'
  },
  next: {
    marginTop: 15,
    fontSize: 13,
    fontFamily: 'Avenir-Book',
    alignSelf: 'flex-start',

  }
});

export default class NextStoryButton extends Component {
  constructor(props) {
    super(props);
  }

  nextContent() {
    Navigation.goContent(this.props.content);
  }

  render() {
    return (
      <TouchableOpacity style ={this.props.style} onPress={() => this.nextContent()}>
        <View style={style.content}>
          <View style={style.row1}>
            <Text style={style.title}>{this.props.content.name}</Text>
            <Text style={style.next}>NEXT {this.props.content.type.toUpperCase()}</Text>
          </View>
          <View style={style.row2}>
            <Image style={style.image} source={this.props.image}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
