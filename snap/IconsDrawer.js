/**
 * Created by mercedes on 2016-11-17.
 */


import React, { Component } from 'react';
import  {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ListView
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

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

import IconOnImage from './IconOnImage';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IconsDrawer extends Component {
/* <Icon style={{alignSelf: 'flex-end'}} name={"ios-close-outline"} size={30} color={"white"}></Icon>*/
  constructor(props){
    super(props);

    this.state= { dataSource: ds.cloneWithRows(pngs) };

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

  putIconOnImage(rowData){
    this.props.closeModal(rowData);
    return <IconOnImage img={rowData}/>
  }

  renderRow(rowData){
    return (
        <View style={styles.row}>
          <TouchableOpacity
                            onPress={() => this.putIconOnImage(rowData)}>
            <Image source={this.getImageSrc(rowData)} style={ styles.square } />
          </TouchableOpacity>
        </View>);

  }

  render(){

    return (



      <ListView
        contentContainerStyle={styles.container}
        dataSource={ this.state.dataSource }
        renderRow={(rowData) => this.renderRow(rowData) }/>

    )

  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:20,
    marginTop: 70,
    flex: 1,

  },
  square: {
    flexDirection: 'row',
    alignItems: 'center',
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    padding:20,
  },
  row: {
    justifyContent: 'center',
    width:64,
    height: 64,
 },
})
