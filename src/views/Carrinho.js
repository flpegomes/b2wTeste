import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../actions';


class Carrinho extends Component {
  
  omponentDidMount() {
    getProducts();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>carrinho</Text>
      </View>
    );
  }
}

export default Carrinho

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecef',
  },
});
