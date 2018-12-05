import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import ProductCard from '../components/ProductCard';


class Home extends Component {
    
  render() {
    return (
      <View style={styles.container}>
        <ProductCard />
      </View>
    );
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e60014',
  },
});
