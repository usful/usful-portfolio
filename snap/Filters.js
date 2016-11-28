import React, { Component } from 'react';
import  {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  Text,
  CameraRoll,
  TouchableOpacity,
  ScrollView
} from 'react-native';/**
 * Created by mercedes on 2016-11-25.
 */

let { height, width } = Dimensions.get('window');
let filts = ['transparent','red','black','blue', 'green', 'yellow'];
import Icon from 'react-native-vector-icons/Ionicons';

//TODO: add more than 1 icon, zoomIn zoomOut

export default class Filters extends Component {


  constructor(props) {
    super(props);
  }

    render(){
      return (
      <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        onScroll={()=> console.log("scrolling")}
        scrollEnabled={true}
        pagingEnabled={true}

        showsHorizontalScrollIndicator={false}
        horizontal={true}

        style={[styles.scrollView, {zIndex: 3}]}>


        {filts.map((filter, i) => <View key={i} style={{flex: 1, width: width, backgroundColor: filter, opacity: 0.3}}>
          <TouchableOpacity onPress={() => this.props.close()}>
            <Icon style={{position: 'absolute', top: 580, left: 190}} name="ios-close-outline" color={"white"} size={90}></Icon>
          </TouchableOpacity>
        </View>)}


      </ScrollView>);
    }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#111"
  },
  scrollView: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'transparent'
  }
});
