import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import React from 'react';

const SendOtp = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.justifyContentCenter}>
          <Image source={require('../../assets/fg-pwd.png')} />
          <Text style={{textAlign: 'center', marginTop: 50}}>
            Request for reset password send in your email
          </Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Button color="#EFC81A" title="Check your Email" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  justifyContentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    margin: 10,
    marginTop: 20,
    width: '80%',
    borderColor: '#EFC81A',
    color: '#EFC81A',
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '78%',
    marginBottom: 20,
  },
});
export default SendOtp;
