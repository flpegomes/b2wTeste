import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, FlatList, Image } from 'react-native';
import ProductCart from '../components/ProductCart';
import { connect } from 'react-redux'
import _ from 'lodash'


class Carrinho extends Component {

  render() {
    const { cart } = this.props
    return (
      this.props.cart ? (
        <View style={styles.container}>
          <FlatList
              data={cart}
              keyExtractor={(product) => product._id}
              renderItem={(product) => (
                <ProductCart key={product.item._id} product={product.item} />

            )}
          />
        </View>
      ) : (
        <View style={{marginTop: 25, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../images/undraw_empty_xct9.png')}
            style={{height: 250, width: 250}}
            resizeMode={'contain'}
          />
          <Text style={{fontSize: 16, color: '#999'}}>Opa! Parece que seu carrinho ainda está vazio...</Text>
        </View> 
      )
    );
  }
}

function mapStateToProps({ cart, loading }) {
  console.log(cart)
  if(cart === undefined || _.isEmpty(cart) ) {
    return {
      cart: undefined,
      loading
    }
  } else {
    const _cart = _.values(cart);
    return {
      cart: _cart,
      loading
    }
  }
}

export default connect(mapStateToProps)(Carrinho)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecef',
  },
});
