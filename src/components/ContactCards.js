import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    View,
    Text
} from 'react-native';

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
        width: 200,
        height: 320,
        paddingVertical: 30,
        backgroundColor: '#cfebf9',
        alignItems: 'center',
        marginHorizontal:-0,
    },
    cardImage: {
        borderWidth:1,
        borderColor: '#FFF',
        height: 120,
        borderRadius: 60,
        width: 120,
        backgroundColor:'white'
    },
    contactInfo: {
        alignItems: 'center'
    },
    textName: {
        color: '#A9A9A9',
        fontWeight: '600',
        fontSize : 22,
        paddingTop: 30,

    },
    detailText: {
        fontStyle: 'italic',
        color: '#A9A9A9',
        fontSize: 12,
    },

    textPositionTitle: {
        paddingBottom: 20,
        color: '#A9A9A9',
        fontSize: 12,

    },
});

export default class ContactCards extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.card]}>
                    <Image source={{uri: this.props.uri}} style={styles.cardImage} />
                    <View style={styles.contactInfo}>
                        <Text style={styles.textName}>Team Member</Text>
                        <Text style={styles.textPositionTitle}>Position /Contribution</Text>
                        <Text style={styles.detailText}>I: handle</Text>
                        <Text style={styles.detailText}>T: @handle </Text>
                        <Text style={styles.detailText}>E: name@email.com</Text>
                    </View>
                </View>
            </View>
        );
    }
}




