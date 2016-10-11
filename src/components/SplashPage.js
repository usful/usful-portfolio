import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default class SplashPage extends Component{

  constructor(props){
    super(props);

    this.state = {
      animated: new Animated.Value(0)
    }
  }

  componentDidMount(){
    Animated.timing(
      this.state.animated,
      {toValue: 1}
    ).start();
  }

  render() {

    return (
      <View style={styles.container}>

        <Animated.Image style={{opacity: this.state.animated}} source={require('../../assets/logo.png')}></Animated.Image>

      </View>);
  }


}