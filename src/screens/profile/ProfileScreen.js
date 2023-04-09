import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../../storages/actions/auth';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator>
        <View
          style={{
            height: Dimensions.get('window').height / 2.5,
            backgroundColor: '#EFC81A',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
              Mareta Lopeda
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              bottom: 60,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              width: '95%',
              height: Dimensions.get('window').height / 0.5,
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
              <View style={{flexDirection: 'row', padding: 2, marginTop: 30}}>
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
              </View>
              <View style={{flexDirection: 'row', padding: 2, marginTop: 30}}>
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
              </View>
              <View style={{flexDirection: 'row', padding: 2, marginTop: 30}}>
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
              </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default ProfileScreen;
