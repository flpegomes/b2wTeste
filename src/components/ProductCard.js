import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { default as MaterialIcons } from 'react-native-vector-icons/MaterialIcons'

class ProductCard extends Component {
    render() {
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={[styles.tags,{ backgroundColor: '#e60014' }]}>
                        <MaterialIcons name='games' color='#fff' size={15}/>
                    </View>
                    <View style={[styles.tags,{ backgroundColor: '#e60014' }]}>
                        <Text style={styles.textTags}>50% OFF!</Text>
                    </View>
                </View> 
                <View style={styles.cardContent}>
                    <Image 
                        source={{uri: 'https://images-americanas.b2w.io/produtos/01/00/item/132491/2/132491243_1GG.jpg'}}
                        style={{height: 100, width: 100}}
                    />
                    <View style={styles.content}>
                        <Text style={styles.productTitle}>Game Knack 2 - PS4</Text>
                        <Text style={styles.productPrice}>R$999,00</Text>
                        <Text style={styles.productPriceInformation}>10x de R$99,00 s/ juros.</Text>
                    </View>
                </View>
            </View>
            
        )
    }
}

export default ProductCard;

const styles = StyleSheet.create({
    productPriceInformation: {
        fontSize: 12,
        color: '#aaa',
    },
    productPrice: {
        fontSize: 12,
        color: '#aaa',
        fontWeight: '700'
    },
    productTitle: {
        fontSize: 14, 
        fontWeight: '700'
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
        paddingVertical: 6,
        alignItems: 'center',
        marginHorizontal: 5
    },
    cardContent: {
        padding: 12,
        flexDirection: 'row'
    },
    cardHeader: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        padding: 12,
        flexDirection: 'row'
    },
    card: {
        margin: 12, 
        backgroundColor: '#fff',
        borderRadius: 4, 
    },
    
})