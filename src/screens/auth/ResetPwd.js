import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {resetPassword} from '../../storages/actions/auth';
import {useDispatch, useSelector} from 'react-redux';

const ResetPwd = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user_resetPwd = useSelector(state => state.user_resetPwd);
  const resetPWD = () => {
    const data = {
      email,
      password,
    };
    console.log(data)
    dispatch(resetPassword(data), navigation.navigate('Login'));
  };
  const checkTextInput = () => {
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter New Password');
      return;
    }
    resetPWD();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.justifyContentCenter}>
          <Image source={require('../../assets/fg-pwd.png')} />
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
        <View style={styles.sectionStyle}>
          <Image
            source={require('../../assets/lock.png')}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Create New Password"
            value={password}
            onChangeText={value => setPassword(value, 'password')}
            underlineColorAndroid="transparent"
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
    width: '80%',
    marginBottom: 20,
  },
});
export default ResetPwd;
