import {Alert, ActionSheetIOS, Platform} from 'react-native';

import AndroidShare from 'react-native-android-share';

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

     AndroidShare.openChooserWithOptions(actions, 'Usful Portfolio')
    }
  }
}