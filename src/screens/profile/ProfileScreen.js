import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../storages/actions/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {getProfile} from '../../storages/actions/profile';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const myprofile = useSelector(state => state.myprofile);
  const token = useSelector(state => state.auth.data.data.token);

  //get My recipe
  useEffect(() => {
    dispatch(getProfile(token));
  }, [dispatch, token]);
  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <View style={{height: '100%'}} >
        <View
          style={{
            height: Dimensions.get('window').height / 2.5,
            backgroundColor: '#EFC81A',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={myprofile.data}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center',marginTop:30}}>
                  <Image
                    style={{width: 100, height: 100, borderRadius: 1000}}
                    source={require('../../assets/fg-pwd.png')}
                  />
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    {item.fullname}
                  </Text>
                </View>
              );
            }}
          />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              bottom: 60,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              width: '95%',
              height: Dimensions.get('window').height / 1.5,
            }}>
            <View style={{padding: 40}}>
              <View style={{flexDirection: 'row', padding: 2}}>
                <View>
                  <Icon
                    style={{fontSize: 20, color: '#EFC81A'}}
                    name="person-outline"
                  />
                </View>
                <View style={{width: '95%'}}>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontWeight: 'normal',
                      color: 'black',
                    }}>
                    Edit Profile
                  </Text>
                </View>
                <View style={{width: '20%'}}>
                  <Icon
                    style={{fontSize: 20, color: 'black'}}
                    name="chevron-forward-outline"
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{flexDirection: 'row', padding: 2, marginTop: 30}}
                onPress={() => navigation.navigate('MyMenu')}>
                <View>
                  <Icon
                    style={{fontSize: 20, color: '#EFC81A'}}
                    name="ribbon-outline"
                  />
                </View>
                <View style={{width: '95%'}}>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontWeight: 'normal',
                      color: 'black',
                    }}>
                    My Recipe
                  </Text>
                </View>
                <View style={{width: '20%'}}>
                  <Icon
                    style={{fontSize: 20, color: 'black'}}
                    name="chevron-forward-outline"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row', padding: 2, marginTop: 30}}
                onPress={() => navigation.navigate('SaveLikeScreen')}>
                <View>
                  <Icon
                    style={{fontSize: 20, color: '#EFC81A'}}
                    name="bookmark-outline"
                  />
                </View>
                <View style={{width: '95%'}}>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontWeight: 'normal',
                      color: 'black',
                    }}>
                    Saved Recipe
                  </Text>
                </View>
                <View style={{width: '20%'}}>
                  <Icon
                    style={{fontSize: 20, color: 'black'}}
                    name="chevron-forward-outline"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row', padding: 2, marginTop: 30}}
                onPress={() => navigation.navigate('SaveLikeScreen')}>
                <View>
                  <Icon
                    style={{fontSize: 20, color: '#EFC81A'}}
                    name="thumbs-up-outline"
                  />
                </View>
                <View style={{width: '95%'}}>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontWeight: 'normal',
                      color: 'black',
                    }}>
                    Liked Recipe
                  </Text>
                </View>
                <View style={{width: '20%'}}>
                  <Icon
                    style={{fontSize: 20, color: 'black'}}
                    name="chevron-forward-outline"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row', padding: 2, marginTop: 30}}
                onPress={() => dispatch(logout())}>
                <View>
                  <Icon
                    style={{fontSize: 20, color: 'red'}}
                    name="log-out-outline"
                  />
                </View>
                <View style={{width: '95%'}}>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontWeight: 'normal',
                      color: 'black',
                    }}>
                    Keluar
                  </Text>
                </View>
                <View style={{width: '20%'}}>
                  <Icon
                    style={{fontSize: 20, color: 'black'}}
                    name="chevron-forward-outline"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default ProfileScreen;
