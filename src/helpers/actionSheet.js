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

    if(Platform.OS == 'ios'){
      ActionSheetIOS.showShareActionSheetWithOptions(actions,
        function(err){
        Alert(err)
      },
      function(){
        return
      })
    } else {

      Share.open(actions);
    }
  }
}