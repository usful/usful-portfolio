import {Alert, ActionSheetIOS, Platform} from 'react-native';

const DEFAULT_OPTS = {
  buttons: [{
    text: 'Example Button',
    onPress: (e) => {}
  }]
};

export default class ActionSheet {
  static open(actions) {

    ActionSheetIOS.showShareActionSheetWithOptions(actions, (error)=>
    alert(error),
      (success, method) => {
        var text;
        if (success) {
          text = `Shared via ${method}`;
        } else {
          text = 'You didn\'t share';
        }

  }
    );
  }
}