import React, {Component} from 'react';

import ReactNative, {
  ScrollView,
  View,
  DeviceEventEmitter,
  Keyboard
} from 'react-native';

export default class KeyboardHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {keyboardSpace: 0};
    this.focused = null;
    this._didShowListener = null;
    this._willHideListener = null;
  }

  onKeyboarDidShow(frames) {
    if (!frames.endCoordinates || !this.focused) {
      return;
    }
    this.setState({keyboardSpace: frames.endCoordinates.height});
    let scrollResponder = this.refs.scrollView.getScrollResponder();
    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      this.focused,
      this.props.offset, //additionalOffset
      true
    );
  }

  onKeyboardWillHide() {
    this.setState({keyboardSpace: 0});
  }

  componentWillMount() {
    this._didShowListener = Keyboard.addListener('keyboardDidShow', (e) => this.onKeyboarDidShow(e));
    this._willHideListener = Keyboard.addListener('keyboardWillHide', (e) => this.onKeyboardWillHide(e));

    this.scrollviewProps = {
      automaticallyAdjustContentInsets: true,
      keyboardShouldPersistTaps: true,
      scrollEventThrottle: 300,
    };
    // pass on any props we don't own to ScrollView
    Object.keys(this.props).filter((n) => {
      return n != 'children'
    })
      .forEach((e) => {
        this.scrollviewProps[e] = this.props[e]
      });
  }

  componentWillUnmount() {
    this._didShowListener.remove();
    this._willHideListener.remove();
  }

  render() {
    return (
      <ScrollView ref='scrollView' {...this.scrollviewProps}>
        {this.props.children}
        <View style={{ height: this.state.keyboardSpace }}/>
      </ScrollView>
    );
  }

  inputFocused(_this, refName) {
    this.focused = ReactNative.findNodeHandle(_this.refs[refName]);
  }

  static propTypes = {
    offset: React.PropTypes.number
  };

  static defaultProps = {
    offset: 0
  };
}

