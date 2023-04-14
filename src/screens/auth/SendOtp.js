import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { confirmOtp } from '../../storages/actions/auth';
const SendOtp = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const postData = e => {
    e.preventDefault();
    let data = {
      email,
      otp,
    };
    dispatch(confirmOtp(data), navigation.navigate('SendOtp'));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.justifyContentCenter}>
          <Image source={require('../../assets/fg-pwd.png')} />
          <Text style={{textAlign: 'center', marginTop: 50}}>
            Request for reset password send in your email
          </Text>
        </View>
        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={value => setEmail(value, 'email')}
          />
        </View>
        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.input}
            placeholder="OTP"
            underlineColorAndroid="transparent"
            value={otp}
            onChangeText={value => setOtp(value, 'otp')}
          />
        </View>
        <View style={styles.btn}>
          <Button color="#EFC81A" title="Send OTP" onPress={postData} />
        </View>
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
