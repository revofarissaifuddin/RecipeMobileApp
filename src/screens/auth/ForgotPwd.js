import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import { forgotPassword } from '../../storages/actions/auth';
import {useDispatch} from 'react-redux';

const ForgotPwd = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const postData = () => {
    let data = {
      email
    };
    dispatch(forgotPassword(data), navigation.navigate('SendOtp',{
            itemEmail: email,
          }));
  };
  const checkTextInput = () => {
    if (!email.match(/\S+@\S+\.\S+/)) {
      alert('Please Enter Email');
      return;
    }
    postData();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.justifyContentCenter}>
          <Image source={require('../../assets/fg-pwd.png')} />
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={{textAlign: 'center'}}>
            We just need your registered e-mail addres to send your password
            reset
          </Text>
        </View>
        <View style={styles.sectionStyle}>
          <Image
            source={require('../../assets/user.png')}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.input}
            placeholder="examplexxx@gmail.com"
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={value => setEmail(value, 'email')}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <Button
          color="#EFC81A"
          title="Reset Password"
          onPress={checkTextInput}
        />
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
  title: {
    marginTop: 20,
    color: '#EFC81A',
    fontSize: 20,
    fontWeight: 'bold',
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
  input: {
    flex: 1,
    minWidth: '70%',
    height: 40,
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
    marginBottom: 10,
  },
});
export default ForgotPwd;
