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
import { regUser } from '../../storages/actions/auth';
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
const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const user_regris = useSelector(state => state.user_regris);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const regrisUser = () => {
    const data = {
      name,
      email,
      password,
    };
    dispatch(regUser(data), navigation.navigate('Login'));
  };
  const checkTextInput = () => {
    if (!name.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!email.match(/\S+@\S+\.\S+/)) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter password');
      return;
    }
    alert('Success');
    regrisUser();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {user_regris.isError && <Text>Login Failed</Text>}
      {user_regris.isLoading ? (
        <NativeBaseProvider>
          <Center flex={1} px="3">
            <Loading />
          </Center>
        </NativeBaseProvider>
      ) : (
        <View style={styles.container}>
          <View>
            <Image
              style={{
                width: 450,
                height: 250,
                marginTop: -220,
                borderRadius: 35,
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
              source={require('../../assets/user.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={styles.input}
              placeholder="myname"
              value={name}
              onChangeText={value => setName(value, 'name')}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image
              source={require('../../assets/user.png')}
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
            <Button color="#EFC81A" title="REGISTER" onPress={checkTextInput} />
          </View>
          {user_regris.isError && <Text>Register Failed</Text>}
          {user_regris.isLoading && (
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
              onPress={() => navigation.navigate('Login')}>
              sign In
            </Text>
          </View>
        </View>
      )}
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
export default Register;
