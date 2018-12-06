import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { default as AntDesign } from 'react-native-vector-icons/AntDesign'

class ProductCard extends Component {
    render() {
        return (<View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Image 
                        source={{uri: 'https://images-americanas.b2w.io/produtos/01/00/item/132491/2/132491243_1GG.jpg'}}
                        style={{height: 100, width: 100}}
                    />
                    <View style={styles.content}>
                        <View style={styles.cardHeader}>
                            <View style={[styles.tags,{ backgroundColor: '#e60014' }]}>
                                <Text style={styles.textTags}>PROMOÇÃO</Text>
                            </View>
                        </View> 
                        <Text style={styles.productTitle}>Game Knack 2 - PS4</Text>
                        <Text style={styles.productPrice}>R$ 999,00</Text>
                        <Text style={styles.productPriceInformation}>10x de R$ 99,00 s/ juros.</Text>
                        <TouchableOpacity 
                            onPress={() => {}}
                            style={styles.button}
                        >
                            <Text style={styles.textButton}>COMPRAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
            <View style={styles.cardContent}>
                <Image 
                    source={{uri: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133759/8/133759820_1GG.png'}}
                    style={{height: 100, width: 100}}
                />
                <View style={styles.content}>
                    <View style={styles.cardHeader}>
                        <View style={[styles.tags,{ backgroundColor: '#007bff' }]}>
                            <Text style={styles.textTags}>MAIS VENDIDO</Text>
                        </View>
                    </View> 
                    <Text style={styles.productTitle}>Smart TV LED 55" Philco PTV55G50SN Ultra HD 4k com Conversor Digital 3 HDMI 2 USB Wi-Fi Soundbar Embutido 60Hz Preta</Text>
                    <Text style={styles.productPrice}>R$ 2.579,99</Text>
                    <Text style={styles.productPriceInformation}>10x de R$ 257,99 s/ juros.</Text>
                    <TouchableOpacity 
                            onPress={() => {}}
                            style={styles.button}
                        >
                            <Text style={styles.textButton}>COMPRAR</Text>
                        </TouchableOpacity>
                </View>
                
            </View>
        </View>

            </View>
        )
    }
}

export default ProductCard;

const styles = StyleSheet.create({
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