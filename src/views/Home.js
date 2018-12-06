import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import ProductCard from '../components/ProductCard';
import { fetchProducts, teste } from '../actions/index';
import { connect } from 'react-redux'

class Home extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { listProducts } = this.props
    return (
      this.props.loading ? (
        <View style={styles.container}>
          <FlatList
              data={listProducts}
              renderItem={(product) => (
                <ProductCard key={product.item._id} product={product.item} />

            )}
          />
        </View>
      ): (
        <View style={{marginTop: 25}}>
          <ActivityIndicator size="large" color="#a8000e" />
        </View> 
      )
    );
  }
}

function mapStateToProps({ listProducts, loading }) {
  console.log(listProducts)
  return {
    listProducts,
    loading
  }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecef',
  },
});
