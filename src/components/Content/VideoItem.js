'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,

} from 'react-native';

import Video from 'react-native-video';
import Style from '../../styles';

const VIDEO_URI = 'https://www.gns3.com/assets/media/GNS3_Banner.mp4';

const styles = StyleSheet.create({
  videoContainer : {
    width: Style.width,
    height: 200
  }
});

export default class VideoItem extends Component {
  static defaultProps = {
    video: VIDEO_URI
  }
  constructor(props){
    super(props);
  }

  render() {
    return(
      <Video source={{uri: VIDEO_URI}}
             ref={(ref) => {
               this.player = ref
             }}
             resizeMode="cover"
             muted={true}
             playWhenInactive={false}
             playInBackground={false}
             style={styles.videoContainer}
      />
    );
  }


}


