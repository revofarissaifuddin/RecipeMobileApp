import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../../storages/actions/auth';
import {
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
} from 'native-base';

const Loading = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading.....
      </Heading>
    </HStack>
  );
};
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const postData = () => {
    let data = {
      email,
      password,
    };
    dispatch(login(data), navigation.navigate('BottomNav'));
  };
  const checkTextInput = () => {
    if (!email.match(/\S+@\S+\.\S+/)) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter password');
      return;
    }
    postData();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 0.1}}>
          <Image
            style={{
              width: 450,
              height: 200,
              borderRadius: 35,
              marginTop: -220,
            }}
            source={require('../../assets/bg-detail.png')}
          />
        </View>
        <View style={styles.justifyContentCenter}>
          <Text style={styles.title}>Welcome !</Text>
          <Text>Log in to your exiting account.</Text>
        </View>
        <View style={styles.sectionStyle}>
          <Image
            source={require('../../assets/mail.png')}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.input}
            placeholder="examplexxx@gmail.com"
            value={email}
            onChangeText={value => setEmail(value, 'email')}
            underlineColorAndroid="transparent"
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
            value={password}
            onChangeText={value => setPassword(value, 'password')}
            label="Password"
            placeholder="Password"
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <Text
            style={{marginStart: '45%'}}
            onPress={() => navigation.navigate('ForgotPwd')}>
            Forgot password?
          </Text>
        </View>
        <View style={styles.btnLogin}>
          <Button
            color="#EFC81A"
            title="LOGIN"
            onPress={checkTextInput}></Button>
        </View>
        {auth.isError && <Text>Login Failed</Text>}
        {auth.isLoading && (
          <NativeBaseProvider>
            <Center flex={1} px="3">
              <Loading />
            </Center>
          </NativeBaseProvider>
        )}
        <View
          style={[
            styles.justifyContentCenter,
            {flexDirection: 'row', marginTop: 20},
          ]}>
          <Text>Don't have an account? </Text>
          <Text
            style={{color: '#EFC81A'}}
            onPress={() => navigation.navigate('Register')}>
            sign Up
          </Text>
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
  title: {
    color: '#EFC81A',
    fontSize: 30,
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
  btnLogin: {
    width: 100,
    padding: 2,
    marginTop: 20,
    minWidth: '80%',
  },
  justifyContentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Login;
