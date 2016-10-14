import React, { Component } from 'react';
import Navigation from '../../helpers/Navigation';
import {
    StyleSheet,
    Text,
Image,
TouchableOpacity,
    View
} from 'react-native';


export default class NextStoryButton extends Component {
  constructor(props) {
    super(props);
  }

_nextContent(e){
    console.log(this.props.content._id);
    switch(this.props.content.type){

      case 'Story':
      {
        Navigation.push({id: Navigation.DETAILED_STORY_SCENE.id, storyId: this.props.content._id});

      }
      case 'Initiative':
      {
        Navigation.push({id: Navigation.DETAILED_INITIATIVE_SCENE.id, initiativeId: this.props.content._id});
      }
      case 'Product':
      {
        Navigation.push({id: Navigation.DETAILED_PRODUCT_SCENE.id, productId: this.props.content._id});
      }

    }

  }

  render() {
    return (
      <TouchableOpacity
        onPress={(e)=>this._nextContent(e)}>
        <View style={style.content}>
          <View style={style.row1}>
            <Text style={style.title}>{this.props.content.name}</Text>
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