import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight,
PanResponder,
  Dimensions
} from 'react-native';

let {width, height} = Dimensions.get('window');

export default class SliderIndicator extends Component {

  static defaultProps = {
    position: 0
  }

  constructor(props) {
    super(props);

  }

  

  render() {

    return (
      <View style={styles.buttons}>
        {this.props.slides.map((slides, index) => {
          return (<TouchableHighlight
            key={index}
            onPress = {(e) => this._move(e)}
            underlayColor="#ccc"
            style={[styles.button, this.props.position === index && styles.buttonSelected]}>
            <View></View>
          </TouchableHighlight>);
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    margin: 3,
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#ccc',
    opacity: 0.9
  },
  buttonSelected: {
    opacity: 1,
    backgroundColor: '#fff',
  }
})