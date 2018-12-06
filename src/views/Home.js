import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';


class Home extends Component {
    
  render() {
    return (
      <View style={styles.container}>
      <FlatList
          data={[1,2,3]}
          renderItem={() => (
        <ProductCard />

        )}
      />
      </View>
    );
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecef',
  },
});
