/**
 * Created by mercedes on 2016-11-17.
 */


import React, { Component } from 'react';
import  {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';


let pngs = ["e8",
            "e9",
            "ea",
            "eb",
            "ec",
            "ee",
            "f1",
            "f2",
            "f4",
            "f6",
            "f7",
            "f8",
            "f9",
            "fa",
            "fc",
            "fd",
            "ff"];

export default class IconsDrawer extends Component {

  constructor(props){
    super(props);

  }

  getImageSrc(name) {
    switch(name) {
      case 'e8':
        return require("../assets/1f1e6-1f1e8.png");
      case 'e9':
        return require("../assets/1f1e6-1f1e9.png");
      case 'ea':
        return require("../assets/1f1e6-1f1ea.png");
      case 'eb':
        return require("../assets/1f1e6-1f1eb.png");
      case 'ec':
        return require("../assets/1f1e6-1f1ec.png");
      case 'ee':
        return require("../assets/1f1e6-1f1ee.png");

      case 'f1':
        return require("../assets/1f1e6-1f1f1.png");

      case 'f2':
        return require("../assets/1f1e6-1f1f2.png");

      case 'f4':
        return require("../assets/1f1e6-1f1f4.png");

      case 'f6':
        return require("../assets/1f1e6-1f1f6.png");
      case 'f7':
        return require("../assets/1f1e6-1f1f7.png");

      case 'f8':
        return require("../assets/1f1e6-1f1f8.png");
      case 'f9':
        return require("../assets/1f1e6-1f1f9.png");

      case 'fa':
        return require("../assets/1f1e6-1f1fa.png");
      case 'fc':
        return require("../assets/1f1e6-1f1fc.png");

      case 'fd':
        return require("../assets/1f1e6-1f1fd.png");
      case 'ff':
        return require("../assets/1f1e6-1f1ff.png");



    }

  }

  render(){

    return <View

                style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <View>
      {pngs.map((name,i)=> <TouchableOpacity key={i + name}
                                style={{ height:30, width: 30, marginHorizontal: 30}}>
                              <Image
                                     style={{marginHorizontal:30}}
                                     resizeMode={"contain"}
                                     source={this.getImageSrc(name)}/>
                            </TouchableOpacity>)}
      </View>

    </View>

  }
}
