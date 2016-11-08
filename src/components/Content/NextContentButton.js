import React, {Component} from 'react';
import Navigation from '../../helpers/Navigation';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import Font from '../../styles/Font';

const style = StyleSheet.create({
  content: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
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
    fontFamily: Font.primaryFont.fontFamily,
    fontWeight: 'bold',
    fontSize: 18,
    flexWrap: 'wrap'
  },
  next: {
    marginTop: 15,
    fontSize: 13,
    fontFamily: Font.secondaryFont.fontFamily,
    alignSelf: 'flex-start',

  }
});

export default class NextStoryButton extends Component {
  constructor(props) {
    super(props);
  }

  renderCopy() {
    switch(this.props.current.type){
      case 'Story' :
        return(
        <View style={style.row1}>
          <Text style={style.title}>{this.props.content.name}</Text>
          <Text style={style.next}>NEXT STORY</Text>
        </View>)

      case 'Initiative' :
        if(this.props.current.name === 'Evolving the Human Condition') {
          return (
            <View style={style.row1}>
              <Text style={style.title}>Read more about how we’re impacting the Human Condition</Text>
            </View>)
        } else if(this.props.current.name === 'Developing Efficiencies') {
          return (
            <View style={style.row1}>
              <Text style={style.title}>Read more about how we're solving the Resource & Energy Crisis</Text>
            </View>)
        }

      case 'Product' :
        return(
        <View style={style.row1}>
          <Text style={style.title}>{this.props.current.name} in Action</Text>
        </View>
        )

    }

  }

  nextContent() {
    Navigation.goContent(this.props.content);
  }

  render() {
    return (
      <View>
      <TouchableOpacity style ={this.props.style} onPress={() => this.nextContent()}>
        <View style={style.content}>
          {this.renderCopy()}
          <View style={style.row2}>
            <Image style={style.image} source={this.props.image}/>
          </View>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}
