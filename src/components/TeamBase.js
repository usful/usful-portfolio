import React, {Component} from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Animated,
  Platform,
  ViewPagerAndroid
} from 'react-native';

import team from '../data/team';
import ContactCard from './ContactCard';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible'
  }
});

export default class TeamBase extends Component {
  static MAX_SCALE = 1;
  static REGULAR_SCALE = 0.8;
  
  static defaultProps = {
    content: {
      team: team
    },
    onClose: (e) => {}
  };

  constructor(props) {
    super(props);
    
    this.state = {
      modalVisible: true,
      scales: [],
      page: 0
    };
  }

  componentWillMount() {
    this.setupScales(this.props.content.team);
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.content.team !== this.props.content.team) {
      this.setupScales(nextProps.content.team);
    }
  }
  
  setupScales(people) {
    this.setState({scales: people.map((person, i) => new Animated.Value(i === 0 ? this.constructor.MAX_SCALE : this.constructor.REGULAR_SCALE))});
  }
  
  renderStoryCard(person, i) {
    let wrapperStyle = {
      transform: [{scale: this.state.scales[i]}],
      overflow: 'visible'
    };
  
    return (
      <View key={i + person._id} style={styles.container} collapsable={false}>
        <Animated.View style={wrapperStyle}  ollapsable={false}>
          <ContactCard personId={person._id}
                       person={person}
                       totalCards={this.props.content.team.length}
                       onClose={this.props.onClose}
                       id={i + 1}/>
        </Animated.View>
      </View>
    )
  };
  
  render() {
    return null;
  }
}