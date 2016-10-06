import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
ScrollView
} from 'react-native';

import AppData from './AppData';

import DetailedStoryItem from './components/Story/DetailedStoryItem';

import ProductView from './components/Product/ProductView';
import InitiativeView from './components/Initiative/InitiativeView';
import global from './styles';

import Portfolio from './components/Portfolio';
import TagView from './components/TagView';
import TopNav from './components/TopNav';

export default class UsfulPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(AppData.products[1].address);
}
  render() {
    return (

      <ScrollView style= {global.container}>
        <TopNav />
        <ProductView products={AppData.products}/>
      </ScrollView>
    );




  }
}