import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { default as AntDesign } from 'react-native-vector-icons/AntDesign'
import numeral from 'numeral'
import { addCart } from '../actions';
import { addCart } from '../actions/index';


class ProductCard extends Component {

    render() {
        const { _id, name, imgUrl, price, quantity, installments, onSale} = this.props.product
        
        
        const priceInstallments = (price) => { return numeral(price/installments).format('0.00') }

        return (
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Image 
                        source={{uri: imgUrl}}
                        style={{height: 100, width: 100}}
                    />
                    <View style={styles.content}>
                        {onSale !== null ? (
                            <View>
                                <View style={styles.cardHeader}>
                                    <View style={[styles.tags,{ backgroundColor: '#e60014' }]}>
                                        <Text style={styles.textTags}>PROMOÇÃO</Text>
                                    </View>
                                </View> 
                                <Text style={styles.productTitle}>{name}</Text>
                                <Text style={styles.productPrice}>de R$ {price}, por: </Text>
                                <Text style={styles.productOnSalePrice}>R$ {onSale.price}</Text>
                                <Text style={styles.productPriceInformation}>{installments}x de R$ {priceInstallments(onSale.price)} s/ juros.</Text>
                            </View>
                        ) : (
                            <View>
                                <Text style={styles.productTitle}>{name}</Text>
                                <Text style={styles.productPrice}>R$ {price}</Text>
                                <Text style={styles.productPriceInformation}>{installments}x de R$ {priceInstallments(price)} s/ juros.</Text>
                            </View>
                        )}
                        <TouchableOpacity 
                            onPress={() => this.props.dispatch(addCart(this.props.product))}
                            style={styles.button}
                        >
                            <Text style={styles.textButton}>ADICIONAR NO CARRINHO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}

export default ProductCard;

const styles = StyleSheet.create({
    productOnSalePrice: {
        fontSize: 16,
        color: '#000',
        fontWeight: '700',
    },
    button: {
        backgroundColor: '#e60014',
        borderRadius: 2,
        padding: 6,
        marginTop: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 14,
        color:'#fff',
        fontWeight: '900'
    },
    productPriceInformation: {
        fontSize: 12,
        color: '#e60014',
    },
    productPrice: {
        fontSize: 14,
        color: '#000',
        fontWeight: '300',
    },
    productTitle: {
        fontSize: 14, 
        fontWeight: '700',
        color: '#000',
    },
    content: {
        flex:1,
        padding: 12,
        justifyContent: 'center'
    },
    textTags: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '900'
    },
    tags: {
        borderRadius: 50,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignItems: 'center',
        marginRight: 5
    },
    cardContent: {
        flexDirection: 'row' ,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardHeader: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    card: {
        marginTop: 12, 
        marginHorizontal: 12,
        backgroundColor: '#fff',
        borderRadius: 2, 
        elevation: 1.5,
        paddingVertical: 5
    },
    
})