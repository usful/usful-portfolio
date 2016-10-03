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
        marginHorizontal:10,


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
        paddingTop: 30,
        fontWeight: '600',
        fontSize : 30,
        color: '#A9A9A9'


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


export default class ContactCards extends Component {

    static defaultProps = {
        index: 0
    };

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            animate: new Animated.Value(0),
            totalTabs : this.props.totalTabs
        };
    }


    _onMoveShouldSetResponder(e) {
        return true;
    }


    _onStartShouldSetResponder(e) {
        return true;
    }

    render() {

        return (
            <Animated.View style={[styles.container]}>
                <Animated.View
                        onStartShouldSetResponder={this._onStartShouldSetResponder.bind(this)}
                        onMoveShouldSetResponder={this._onMoveShouldSetResponder.bind(this)}
                        style={[styles.card,
                            {opacity: this.state.animate.interpolate({
                                    inputRange: [0, this.props.index, this.state.totalTabs],
                                    outputRange: [0.8,1,0.8]})},
                            {transform: [
                                {scale: this.state.animate.interpolate({
                                    inputRange: [0, this.props.index, this.state.totalTabs],
                                    outputRange: [1, 2, 1]})},
                                ]}
                            ]}>
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




