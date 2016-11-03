import {Alert, ActionSheetIOS, Platform} from 'react-native';

import Share, {ShareSheet, Button} from 'react-native-share';

const DEFAULT_OPTS = {
  buttons: [{
    text: 'Example Button',
    onPress: (e) => {}
  }]
};

export default class ActionSheet {
  static open(actions) {

    Share.open(actions);
  }
}