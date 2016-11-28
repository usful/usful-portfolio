import React, { Component } from 'react';
import  {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Text,
  CameraRoll,
  TouchableOpacity,
  ScrollView
} from 'react-native';

/**
 * Created by mercedes on 2016-11-22.
 */
const catsSource = {
  uri: "https://i.imgur.com/5EOyTDQ.jpg",
};
const { width: viewportW, height:viewportH } = require("Dimensions").get("window");
import RNViewShot from "react-native-view-shot";
import { RNS3 } from 'react-native-aws3';
import IconOnImage from './IconOnImage';
import Filters from './Filters';
import IconsDrawer from './IconsDrawer';
import Icon from 'react-native-vector-icons/Ionicons';

let { height, width } = Dimensions.get('window');
let icons = [];

//TODO: add more than 1 icon, zoomIn zoomOut

export default class ShowSnap extends Component {

  /**/
  constructor(props) {
    super(props);
    this.state = {
      alertSaved: new Animated.Value(0),
      groupTypes: 'SavedPhotos',
      modalVisible: false,
      modalVisible2: false,
      //below is for snapshot save
      previewSource: catsSource,
      error: null,
      res: null,
      value: {
        format: "png",
        quality: 0.9,
        result: "file",
      },
    };
  }

    onPhotosFetchedSuccess(data) {
    var photos = data.edges.map((asset) => {
      return asset.node.image;
    });
    console.log(photos);
  }

  onPhotosFetchError(error) {
    // Handle error here
    console.err(error);
  }

  closeModal(rowData){
    this.setState({modalVisible: false}, console.log("done"));
    icons.push(rowData);


  }
  openOrClose(){
    let oldState = this.state.modalVisible;
    this.setState({modalVisible:!oldState});
  }
  openOrClose2(){
    let oldState = this.state.modalVisible2;
    this.setState({modalVisible2:!oldState});
  }

    snapshot(refname) {
      Animated.sequence(
        [
          Animated.timing(this.state.alertSaved, {toValue: 1, duration: 2000}),
          Animated.timing(this.state.alertSaved, {toValue: 0, duration: 2000}),

        ]
      ).start();

/*
      console.log("running");
      RNViewShot.takeSnapshot(this.refs[refname], this.state.value)
        .then(res => {
          console.log("success");
          (this.state.value.result !== "file") ? res : new Promise((success, failure) =>
            // just a test to ensure res can be used in Image.getSize
            Image.getSize(
              res,
              (width, height) => (console.log(res, width, height), success(res)),
              failure)
          )
        })
        .then(res => {
          this.setState({
            error: null,
            res,
            previewSource: {
              uri: this.state.value.result === "base64"
                ? "data:image/" + this.state.value.format + ";base64," + res
                : res
            }
          })
        })
        .catch(error => {

            console.log("error");

            this.setState({error, res: null, previewSource: null})
          }

        ); */
    }



  uploadToS3(filePath){

    let file = {
      // `uri` can also be a file system path (i.e. file://)
      uri: "https://usful-portfolio.s3.amazonaws.com/usfulHouse/DSC02901.JPG",
      name: "image.png",
      type: "image/png"
    }

    let options = {
      keyPrefix: "snap/",
      bucket: "us-west-2",
      region: "us-west-2",
      accessKey: "your-access-key",  //must
      secretKey: "your-secret-key",  //must
      successActionStatus: 201
    }

    RNS3.put(file, options).then(response => {
      if (response.status !== 201)
        throw new Error("Failed to upload image to S3");
      console.log(response.body);
      /**
       * {
   *   postResponse: {
   *     bucket: "your-bucket",
   *     etag : "9f620878e06d28774406017480a59fd4",
   *     key: "uploads/image.png",
   *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
   *   }
   * }
       */
    });
  }

  getInitImage(){
    CameraRoll.getPhotos({
      // take the first n photos after given photo uri
      first: 1,
      // after,
    }, () => this.onPhotosFetchedSuccess(), () => this.onPhotosFetchError());
  }

  render() {
    return <View style={{flex:1}}>
      <Modal
        style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}
        animationType={"none"}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => { console.log("Modal has been closed.")}}>
        <IconsDrawer closeModal={(rowData)=> this.closeModal(rowData)}></IconsDrawer>
      </Modal>
      <Modal
        style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}
        animationType={"none"}
        transparent={true}
        visible={this.state.modalVisible2}
        onRequestClose={() => { console.log("Modal has been closed.")}}>
        <Filters close={() => this.openOrClose2()} style={{zIndex:5}}/>
      </Modal>

      <View ref="full">
        <Image
          source={require('./Image.jpg')}
          style={{zIndex: 1}}
          resizeMode="cover">
          <View style={{flexDirection: 'row', flex: 1}}>
            <TouchableOpacity
              style={{ left: 90, top : 10 }}
              onPress={() => this.openOrClose()}>
              <Icon name={"ios-happy-outline"} color={'black'} size={60}></Icon>
            </TouchableOpacity>
            <TouchableOpacity
            style={{ left: 180, top : 10 }}
            onPress={() => this.openOrClose2()}>
            <Icon name={"ios-happy-outline"} color={'white'} size={60}></Icon>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ left: -80, top : 600 }}
              onPress={() => this.snapshot("full")}>
              <Icon name={"ios-download-outline"} color={'white'} size={60}></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ left: 180, top : 600 }}
              onPress={() => this.uploadToS3()}>
              <Icon name={"ios-send"} color={'white'} size={60}></Icon>
            </TouchableOpacity>
          </View>
          <Animated.View style={{opacity: this.state.alertSaved, backgroundColor: '#333', height: 30, width : 200, top: 200, left: 50}}>
            <Text style={{color: 'white'}}>Saved To Camera Roll</Text></Animated.View>

          {icons.map((icon,i) => <IconOnImage style={{flex: 1, zIndex: i }} key={i} img={icon}/>)}

        </Image>

      </View>
      </View>
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
    left: 0,
    backgroundColor:'transparent'
  }
});

