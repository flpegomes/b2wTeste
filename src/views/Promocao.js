import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import ProductCard from '../components/ProductCard';
import { onSaleProducts, teste } from '../actions/index';
import { connect } from 'react-redux'

class Promocao extends Component {
  
  componentDidMount() {
    this.props.dispatch(onSaleProducts());
  }

  render() {
    const { onSaleProducts } = this.props
    return (
      this.props.loading ? (
        <View style={styles.container}>
          <FlatList
              data={onSaleProducts}
              keyExtractor={(product) => product._id}
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

function mapStateToProps({ onSaleProducts, loading }) {
  return {
    onSaleProducts,
    loading
  }
}

export default connect(mapStateToProps)(Promocao)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecef',
  },
});
