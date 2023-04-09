import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {LogoApp} from '../../assets/logoApp-img.png';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 4000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#EFC81A',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LogoApp />
      <Text style={{ color:'white',fontSize:32,fontFamily:'Poppins-Medium' }}>Recipes</Text>
    </View>
  );
};

export default SplashScreen;
