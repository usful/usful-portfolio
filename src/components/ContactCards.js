import React, { Component } from 'react';
import {
    Animated,
    Animation,
    StyleSheet,
    Dimensions,
    Easing,
    Image,
    Text,
    ListView,
    ScrollView,
    TouchableOpacity,
    Navigator,
    View
} from 'react-native';

let {height, width} = Dimensions.get('window');

let styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginHorizontal:-50,

    },
    card: {

        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#00BFFF',
        width: 300,
        height: 450,
        paddingVertical: 30,
        backgroundColor: '#cfebf9',
        alignItems: 'center',
        marginHorizontal:-0,

    },
    cardImage: {
        borderWidth:1,
        borderColor: '#FFF',
        height: 180,
        borderRadius: 90,
        width: 180,
        backgroundColor:'white'
    },
    contactInfo: {
        alignItems: 'center'
    },
    textName: {
        color: '#A9A9A9',
        fontWeight: '600',
        fontSize : 30,
        paddingTop: 30,

    },
    textEmail: {
        fontStyle: 'italic',
        color: '#A9A9A9',
        fontSize: 18,
    },
    textInstagram: {
        fontStyle: 'italic',
        color: '#A9A9A9',
        fontSize: 18,

    },
    textPhone: {
        fontStyle: 'italic',
        color: '#A9A9A9',
        fontSize: 18,

    },
    textPositionTitle: {
        paddingBottom: 20,
        color: '#A9A9A9',
        fontSize: 18,

    },
});

let animate =  new Animated.Value(0);
export default class ContactCards extends Component {

    static defaultProps = {
        index: 0,
        totalTabs:0,
    };

    constructor(props) {
        super(props);

    }

    getZIndex(){
      /* if (page == this.props.index) {
        return {
          zIndex: 2
        }
      } else if (page - 1 == this.props.index || page + 1 == this.props.index) {
        return {
          zIndex: 1
        }
      } else {
        return {
          zIndex: 0
        }
      } */
    }

    shouldComponentUpdate(nextProps, nextState){
      if (nextProps.page !== this.props.index) return true;
      if (nextProps.pageTransition !== this.props.pageTransition) {
        let max = nextProps.pageTransition;
        animate.setValue(max);
        return true;
      }
      if(nextProps.totalTabs !== this.props.totalTabs) return true;
      if(nextProps.uri !== this.props.uri) return true;
      return false;
    }

    _onMoveShouldSetResponder(e) {
        return true;
    }


    _onStartShouldSetResponder(e) {
        return true;
    }

    render() {
        return (
            <Animated.View style={[styles.container,this.getZIndex()]}>
                <Animated.View
                        onStartShouldSetResponder={this._onStartShouldSetResponder.bind(this)}
                        onMoveShouldSetResponder={this._onMoveShouldSetResponder.bind(this)}
                        style={[styles.card,
                          {opacity: animate.interpolate({
                          inputRange: [0, (this.props.index /this.props.totalTabs), 1],
                          outputRange: [0.8, 1, 0.8]})},
                        {transform: [
                        {scale: animate.interpolate({
                          inputRange: [0, (this.props.index /this.props.totalTabs), 1],
                          outputRange: [0.5, 1, 0.8]})},

                        {translateX: animate.interpolate({
                          inputRange: [0, (this.props.index /this.props.totalTabs), 1],
                          outputRange: [-20, 0, 20]
                        })},
                        {perspective: animate.interpolate({
                          inputRange: [0, (this.props.index /this.props.totalTabs), 1],
                          outputRange: [1, 1000 ,1]
                        })}]}]}>
                    <Image source={{uri: this.props.uri}} style={styles.cardImage} />
                    <View style={styles.contactInfo}>
                        <Text style={styles.textName}>Team Member</Text>
                        <Text style={styles.textPositionTitle}>Position /Contribution</Text>
                        <Text style={styles.textInstagram}>I: handle</Text>
                        <Text style={styles.textPhone}>T: @handle </Text>
                        <Text style={styles.textEmail}>E: name@email.com</Text>
                    </View>
                </Animated.View>
            </Animated.View>
        );
    }
}




