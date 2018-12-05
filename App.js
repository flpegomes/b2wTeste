/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import TabNavigator from './src/routes';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#a8000e' barStyle='light-content'/>
        <View style={{backgroundColor: '#a8000e', paddingVertical: 20, justifyContent: 'center'}}>
          <Image 
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Americanas.com_logo.svg/1280px-Americanas.com_logo.svg.png'}}
            style={{height: 30, }}
            resizeMode='contain'
            tintColor='#fff'
          />
        </View>
        <TabNavigator />
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e60014',
  },
});
