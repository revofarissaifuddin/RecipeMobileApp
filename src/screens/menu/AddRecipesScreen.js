import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {addMenu} from '../../storages/actions/menu';
import * as ImagePicker from 'react-native-image-picker';
import {
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
} from 'native-base';
import axios from 'axios';
import {ONESIGNAL_APP_ID, API_KEY_ONESIGNAL} from '@env';
const oneSignalId = ONESIGNAL_APP_ID;
const keyOnesignal = API_KEY_ONESIGNAL;

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

const AddRecipesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const add_menu = useSelector(state => state.add_menu);
  const token = useSelector(state => state.auth.data.data.token);
  const [title, setTitle] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const [category_id, setCategory_id] = useState('');
  const [response, setResponse] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const reset = navigation.addListener('focus', () => {
      setTitle('');
      setDescriptions('');
      setCategory_id('');
      setResponse('');
    });
    return reset;
  }, [navigation]);
  const postForm = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('descriptions', descriptions);
    formData.append('category_id', category_id);
    formData.append('photo', {
      uri: response.assets[0].uri,
      name: response.assets[0].fileName,
      type: response.assets[0].type,
    });
    setData(dispatch(addMenu(formData, token), navigation.navigate('MyMenu')));
    const options = {
      method: 'POST',
      url: 'https://onesignal.com/api/v1/notifications',
      headers: {
        accept: 'application/json',
        Authorization: `Basic ${keyOnesignal}`,
        'content-type': 'application/json',
      },
      data: {
        included_segments: 'Subscribed Users',
        app_id: `${oneSignalId}`,
        headings: {en: `${title} New Recipes`},
        contents: {en: 'Check it out now!'},
        name: 'INTERNAL_CAMPAIGN_NAME',
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App Needs Camera Access',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
          buttonNeutral: 'ask me later',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('access camera success');
        cameraLaunch();
      } else {
        console.log('access camera failed');
        console.log(PermissionsAndroid.RESULTS.GRANTED);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('response = ', res);
      if (res.didCancel) {
        console.log('user cancel image picker');
      } else if (res.error) {
        console.log('image picker error', res.error);
      } else {
        console.log(res);
        setResponse(res);
      }
    });
  };

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('response = ', res);
      if (res.didCancel) {
        console.log('user cancel gallery picker');
      } else if (res.error) {
        console.log('gallery picker error', res.error);
      } else {
        console.log(res);
        setResponse(res);
      }
    });
  };

  const checkTextInput = () => {
    if (!title.trim()) {
      alert('Please Enter Title');
      return;
    }
    if (!descriptions.trim()) {
      alert('Please Enter Ingredients');
      return;
    }
    if (!category_id.trim()) {
      alert('Please Enter Category');
      return;
    }
    alert('Add New Recipes');
    postForm();
  };

  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <ScrollView style={{height: '100%'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View>
            <Text style={styles.title}>Add Your Recipe</Text>
          </View>
          {add_menu.isError && <Text>Login Failed</Text>}
          {add_menu.isLoading ? (
            <NativeBaseProvider>
              <Center flex={1} px="3">
                <Loading />
              </Center>
            </NativeBaseProvider>
          ) : (
            <>
              <View style={{marginTop: '5%'}}>
                <View style={styles.sectionStyle}>
                  <Icon style={styles.bookoutline} name="book-outline"></Icon>
                  <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={value => setTitle(value, 'title')}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
              <View style={[styles.sectionInput, {height: 150}]}>
                <TextInput
                  multiline={true}
                  numberOfLines={10}
                  placeholder="Ingredients"
                  value={descriptions}
                  onChangeText={value => setDescriptions(value, 'descriptions')}
                />
              </View>
              <View style={[styles.sectionInput, {alignSelf: 'center'}]}>
                <View style={{padding: 10}}>
                  <View style={[styles.sectionStyle, {alignContent: 'center'}]}>
                    <TouchableOpacity onPress={() => requestPermission()}>
                      <Text>Add Foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{marginLeft: 100}}
                      onPress={() => galleryLaunch()}>
                      <Text>Gallery</Text>
                    </TouchableOpacity>
                  </View>
                  {response && (
                    <View
                      style={{
                        height: 200,
                        width: 200,
                        backgroundColor: 'red',
                          alignContent: 'center',
                        justifyContent:'center'
                      }}>
                      <Image
                        resizeMode="cover"
                        style={{height: 200, width: 200}}
                        source={{uri: response?.assets[0].uri}}
                      />
                    </View>
                  )}
                  <Text style={{color: 'black'}}>{data?.data?.message}</Text>
                </View>
              </View>
              <View style={styles.sectionInput}>
                <TextInput
                  placeholder="Category"
                  value={category_id}
                  onChangeText={value => setCategory_id(value, 'category_id')}
                />
              </View>
              <View style={{marginTop: '10%', width: 100, marginBottom: 20}}>
                <Button color="#EFC81A" title="POST" onPress={checkTextInput} />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#EFC81A',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '10%',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
    margin: 10,
    width: '80%',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    width: '70%',
    height: 40,
    borderColor: '#EFC81A',
    color: '#EFC81A',
  },
  bookoutline: {
    fontSize: 30,
    marginLeft: 20,
    marginEnd: 10,
  },
  sectionInput: {
    width: '80%',
    backgroundColor: 'white',
    marginTop: '5%',
    padding: 5,
  },
});
export default AddRecipesScreen;
