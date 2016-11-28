import React, { Component } from 'react';
import  {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  PanResponder,
  Image,
  View
} from 'react-native';

var CIRCLE_SIZE = 64;

export default class IconOnImage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      pan : new Animated.ValueXY(),
      showDraggable : true,
      dropZoneValues : null,
    };
  }

  setDropZoneValues(event){
    this.setState({
      dropZoneValues : event.nativeEvent.layout
    });
  }

  renderDraggable(){
    if(this.state.showDraggable){      //Step 2
      return (
        <View style={styles.draggableContainer}>
          //...
        </View>
      );
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {  //null because raw event arg ignored
        dx: this.state.pan.x, // x,y are Animated.Value
        dy: this.state.pan.y,
      }]),
    });
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.circle]}>
          <Image source={this.getImageSrc(this.props.img)}/>
        </Animated.View>
      </View>
    );
  }

  _onPanResponderMove(){
    Animated.event([null,{
      dx : this.state.pan.x,
      dy : this.state.pan.y
    }])
  }

  getImageSrc(name){
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

  _handleStartShouldSetPanResponder(e, gestureState){
    // Should we become active when the user presses down on the circle?
    return true;
  }
  
  _handleMoveShouldSetPanResponder(e, gestureState) {
    // Should we become active when the user moves a touch over the circle?
    return true;
  }

}

let styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,

  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});
