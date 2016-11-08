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
    team: [],
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
    this.setupScales(this.props.team);
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.team !== this.props.team) {
      this.setupScales(nextProps.team);
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
      <View key={i + person._id} style={styles.container}>
        <Animated.View style={wrapperStyle}>
          <ContactCard personId={person._id}
                       person={person}
                       totalCards={this.props.team.length}
                       onClose={this.props.onClose}
                       id={i + 1}/>
        </Animated.View>
      </View>
    )
  };
  
  render() {
    return (

      <View style={{ transform: [{ scale: 0.8 }]}}>
        <ScrollView
          horizontal={true}
          style={{ overflow: 'visible'}}
          pagingEnabled={true}
          scrollEventThrottle={Math.floor(1000/60)}
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => this.onScroll(e)} >
          {this.props.team.map((person, i) => this.renderStoryCard(person, i))}
        </ScrollView>
     </View>
    );
  }
}