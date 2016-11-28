/**
 * Created by mercedes on 2016-11-14.
 */

import React, { Component } from 'react';
import  {
  Animated,
  CameraRoll,
  StyleSheet,
  Platform,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  View
} from 'react-native';

import Style from '../src/styles';
import Camera from 'react-native-camera';
import Navigation from '../src/helpers/Navigation';
import TempPic from './TempPic';
import IconsDrawer from './IconsDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

let myInt;

export default class Snap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mode: Camera.constants.CaptureMode.still,
      camera: Camera.constants.Type.front,
      aspect: Camera.constants.Aspect.fill,
      fill: 0
    }

  }


 takePicture() {

      this.camera.capture()
        .then((data) => console.log(data))
        .catch(err => console.error(err));
        //var data = this.getPhotosFromRoll();
        //console.log(data);
        Navigation.push(Navigation.SHOWSNAP);
  }


  getPhotosFromRoll(){
    const fetchParams = {
      first: 1,
      groupTypes: 'SavedPhotos',
      assetType: 'Photos',
    };

    CameraRoll.getPhotos(fetchParams).then((data) => {
      return (data);
    }).catch((e) => {
      console.log(e);
    });
  }

  changeCamera() {

    if (this.state.camera === Camera.constants.Type.front){
      this.setState({camera: Camera.constants.Type.back});
    } else {
      this.setState({camera: Camera.constants.Type.front});
    }
  }

  changeMode() {

    if (this.state.mode === Camera.constants.CaptureMode.video){
      this.setState({mode: Camera.constants.Type.still});
    } else {
      this.setState({mode: Camera.constants.CaptureMode.video});
    }
  }

  startRecording(){
    let val;
    myInt = setInterval(() => {
      let oldFill = this.state.fill;
      val = oldFill + 1;

      if (val > 100) {
        val = 0;
      }
      this.setState({fill: val});
    }, 100);
    if (val == 0) clearInterval(myInt);
  }

  doneRecording(){
    clearInterval(myInt);
    this.setState({fill: 0});
  }

  render(){
    return <View style={styles.container}>

      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        type={this.state.camera}
        captureTarget={Platform.OS === 'ios'? Camera.constants.CaptureTarget.cameraRoll: Camera.constants.CaptureTarget.disk}
        captureMode={this.state.mode}
        aspect={this.state.aspect}>
        <View style={styles.firstRow}>
            <TouchableHighlight onPress={() => this.changeCamera()}>
              <Icon name={"ios-reverse-camera-outline"} color={'white'} size={60}></Icon>
            </TouchableHighlight>
            <TouchableHighlight style={{marginLeft: Style.width * 0.5}} onPress={() => this.changeMode()}>
              <Icon name={this.state.mode === Camera.constants.Type.video? 'ios-videocam-outline' : 'ios-camera-outline'} color={'white'} size={60}></Icon>
            </TouchableHighlight>
        </View>
        <TouchableOpacity onPress={() => this.takePicture()}
                                  onLongPress={(e)=>this.startRecording()}
                                  onPressOut={(e)=>this.doneRecording()}>
          <View>
            <AnimatedCircularProgress
              size={100}
              width={5}
              fill={this.state.fill}
              rotation={0}
              tintColor="red"
              backgroundColor="#fff">
            </AnimatedCircularProgress>
          </View>
        </TouchableOpacity>
        <TouchableOpacity><Text>Get Icons</Text></TouchableOpacity>



      </Camera>


    </View>
  }




}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Style.height,
    width: Style.width
  },
  capture: {
    height: 40,
    width: 60,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 40,
    alignItems: 'center',
    justifyContent : 'center'
  },
  firstRow: {
    flex: 0,
    flexDirection: 'row',
    height: 60,
    position: 'absolute',
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40
  }
})