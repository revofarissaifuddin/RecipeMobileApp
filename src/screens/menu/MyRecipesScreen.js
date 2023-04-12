import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMenu, deleteMenu, updateEditMenu} from '../../storages/actions/menu';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';

const MyRecipesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.menu);
  const delete_menu = useSelector(state => state.delete_menu);
  const update_menu = useSelector(state => state.updateMenu);
  const token = useSelector(state => state.auth.data.data.token);
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const [category_id, setCategory_id] = useState('');
  const [response, setResponse] = useState(null);
  const [data, setData] = useState(null);
  //get My recipe
  useEffect(() => {
    dispatch(getMenu(token));
  }, [dispatch, token]);
  //delete menu
  const deleteData = id => {
    dispatch(deleteMenu(id, token),navigation.navigate('MyMenu'));
  };
  //edit add menu
  const postForm = id => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('descriptions', descriptions);
    formData.append('category_id', category_id);
    formData.append('photo', {
      uri: response.assets[0].uri,
      name: response.assets[0].fileName,
      type: response.assets[0].type,
    });
    console.log(formData)
    setData(dispatch(updateEditMenu(id, formData, token)));
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //edit foto reqpermisson
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
  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <View style={{height: '100%'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{marginTop: '1%', alignItems: 'center'}}>
            <View>
              <Text style={styles.title}>My Recipe</Text>
            </View>
            <View style={{marginTop: '5%'}}>
              {menu.isLoading && <ActivityIndicator />}
              {menu.isError}
              <View style={{marginTop: '1%'}}>
                <FlatList
                  data={menu.data}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          width: '100%',
                          backgroundColor: 'white',
                          borderRadius: 10,
                          padding: 10,
                          marginTop: 15,
                        }}>
                        <View style={{width: '30%'}}>
                          <Image
                            style={{width: 100, height: 100, borderRadius: 20}}
                            source={{uri: `${item.photo}`}}
                          />
                        </View>
                        <View style={{width: '40%'}}>
                          <View style={{marginStart: 0}}>
                            <Text
                              style={{color: 'black', fontWeight: 'bold'}}
                              onPress={() =>
                                navigation.navigate(`DetailIngredientsScreen`, {
                                  itemId: `${item.id}`,
                                })
                              }>
                              {item.title}
                            </Text>
                            <Text style={{color: 'black', marginTop: 10}}>
                              {item.category}
                            </Text>
                          </View>
                        </View>
                        <View style={{width: '20%'}}>
                          <View style={{flexDirection: 'column'}}>
                            <View>
                              <Button
                                color="#30C0F3"
                                title="Edit"
                                onPress={toggleModal}
                              />
                            </View>
                            <View style={{marginTop: 10}}>
                              <Button
                                color="#F57E71"
                                title="Delete"
                                onPress={() => deleteData(item.id)}
                              />
                            </View>
                          </View>
                        </View>
                        <Modal isVisible={isModalVisible}>
                          <View style={{flex: 1, justifyContent: 'center'}}>
                            <View
                              style={{
                                justifyContent: 'center',
                                flexDirection: 'column',
                              }}>
                              <View>
                                <View style={styles.sectionStyle}>
                                  <Icon
                                    style={styles.bookoutline}
                                    name="book-outline"></Icon>
                                  <TextInput
                                    style={styles.input}
                                    placeholder="Title"
                                    underlineColorAndroid="transparent"
                                    value={title}
                                    onChangeText={value =>
                                      setTitle(value, 'title')
                                    }
                                  />
                                </View>
                              </View>
                              <View>
                                <View
                                  style={[styles.sectionInput, {height: 100}]}>
                                  <TextInput
                                    multiline={true}
                                    numberOfLines={10}
                                    placeholder="Ingredients"
                                    value={descriptions}
                                    onChangeText={value =>
                                      setDescriptions(value, 'descriptions')
                                    }
                                  />
                                </View>
                              </View>
                              <View>
                                <View
                                  style={[
                                    styles.sectionInput,
                                    {alignSelf: 'center'},
                                  ]}>
                                  <View style={{padding: 10}}>
                                    <TouchableOpacity
                                      onPress={() => requestPermission()}>
                                      <Text>Add Foto</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      style={{marginTop: 10}}
                                      onPress={() => galleryLaunch()}>
                                      <Text>Gallery</Text>
                                    </TouchableOpacity>
                                    {response && (
                                      <View
                                        style={{
                                          height: 200,
                                          width: 200,
                                          backgroundColor: 'red',
                                        }}>
                                        <Image
                                          resizeMode="cover"
                                          style={{height: 200, width: 200}}
                                          source={{
                                            uri: response?.assets[0].uri,
                                          }}
                                        />
                                      </View>
                                    )}
                                    <Text style={{color: 'black'}}>
                                      {data?.data?.message}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                              <View>
                                <View style={styles.sectionInput}>
                                  <TextInput
                                    placeholder="Category"
                                    value={category_id}
                                    onChangeText={value =>
                                      setCategory_id(value, 'category_id')
                                    }
                                  />
                                </View>
                              </View>
                            </View>
                            <View
                              style={{
                                justifyContent: 'center',
                                flexDirection: 'row',
                                padding: 10,
                              }}>
                              <View style={{width: 100}}>
                                <Button title="Cancel" onPress={toggleModal} />
                              </View>
                              <View style={{marginLeft: 25, width: 100}}>
                                <Button
                                  title="Save"
                                  onPress={() => postForm(item.id)}
                                />
                              </View>
                            </View>
                          </View>
                        </Modal>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',
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
    width: '100%',
    backgroundColor: 'white',
    marginTop: '1%',
    padding: 10,
  },
});
export default MyRecipesScreen;
