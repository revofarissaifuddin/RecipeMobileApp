import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000)
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#465bd8"
      />
      <Image
        source={require('../../assets/logo-app.png')}
        style={{width: 70, height: 70}}
      />
      <Text
        style={{
          fontFamily: 'OpenSans-Bold',
          fontSize: 35,
          color: 'white',
          fontWeight:'bold'
        }}>
        Recipes App
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
