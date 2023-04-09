import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../profile/ProfileScreen';
import AddRecipesScreen from './AddRecipesScreen';
import MyRecipesScreen from './MyRecipesScreen';
function HomeScreen({navigation}) {
  const {height, width} = Dimensions.get('window');
  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <ScrollView style={{height: '100%'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{marginTop: '5%'}}>
            <View style={styles.sectionStyle}>
              <Icon style={styles.searchOutline} name="search-outline"></Icon>
              <Text
                style={styles.input}
                placeholder="Search Pasta, Bread , etc"
                underlineColorAndroid="transparent"
                onPress={() => navigation.navigate('ForgotPwd')}>
                Search Pasta, Bread , etc
              </Text>
            </View>
            <View style={{padding: 10}}>
              <View style={{width: '100%'}}>
                <View style={{width: '90%'}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Popular Recipes
                  </Text>
                  <Text style={{color: '#666666'}}>Populer check</Text>
                </View>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View style={{width: '100%'}}>
                <View>
                  <FlatList
                    data={[1, 1, 1, 1, 1]}
                    horizontal
                    renderItem={({item, index}) => {
                      return (
                        <View
                          style={{
                            width: width / 1.5,
                            height: height / 6,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <TouchableOpacity
                            style={{
                              width: '90%',
                              height: '100%',
                              borderRadius: 10,
                            }}>
                            <ImageBackground
                              source={require('../../assets/bg-detail.png')}
                              style={{
                                borderRadius: 10,
                                height: Dimensions.get('window').height / 6,
                                justifyContent: 'flex-end',
                                padding: 10,
                              }}>
                              <Text style={{color: 'white', width: 80}}>
                                Sandwich with Egg
                              </Text>
                            </ImageBackground>
                          </TouchableOpacity>
                        </View>
                      );
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View style={{width: '100%'}}>
                <View style={{width: '90%', flexDirection: 'row'}}>
                  <View style={{width: '65%'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      New Recipes
                    </Text>
                  </View>
                  <View style={{width: '40%'}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        color: '#6D61F2',
                        marginStart: '50%',
                      }}>
                      More info
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '90%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 30,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#57CE96',
                        borderRadius: 10,
                        width: 60,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../assets/icon-soup.png')}
                        style={styles.imageStyle}
                      />
                    </View>
                    <Text>Soup</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 30,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#FDE901',
                        borderRadius: 10,
                        width: 60,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../assets/icon-dessert.png')}
                        style={styles.imageStyle}
                      />
                    </View>
                    <Text>Chicken</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 30,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#000001',
                        borderRadius: 10,
                        width: 60,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../assets/icon-seafood.png')}
                        style={styles.imageStyle}
                      />
                    </View>
                    <Text>Seafood</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 30,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#FDE901',
                        borderRadius: 10,
                        width: 60,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../assets/icon-dessert.png')}
                        style={styles.imageStyle}
                      />
                    </View>
                    <Text>Dessert</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View style={{width: '100%'}}>
                <View style={{width: '90%'}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Popular For You
                  </Text>
                </View>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View style={{width: '100%'}}>
                <View>
                  <FlatList
                    data={[1, 1, 1, 1, 1]}
                    horizontal
                    renderItem={({item, index}) => {
                      return (
                        <View
                          style={{
                            width: width / 2,
                            height: height / 6,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                          }}>
                          <TouchableOpacity
                            style={{
                              width: '90%',
                              height: '100%',
                              borderRadius: 10,
                            }}>
                            <ImageBackground
                              source={require('../../assets/bg-detail.png')}
                              style={{
                                borderRadius: 10,
                                height: Dimensions.get('window').height / 10,
                                padding: 10,
                              }}></ImageBackground>
                            <View
                              style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignContent: 'center',
                              }}>
                              <Text style={{color: 'black', width: '80%'}}>
                                Sandwich with Egg
                              </Text>
                              <Text
                                style={{
                                  color: 'black',
                                  width: '80%',
                                  fontSize: 10,
                                }}>
                                Sandwich with Egg
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      );
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    margin: 10,
    width: '90%',
    backgroundColor: '#EFEFEF',
  },
  input: {
    flex: 1,
    width: '70%',
    height: 40,
    borderColor: '#EFC81A',
    color: '#EFC81A',
  },
  searchOutline: {
    fontSize: 20,
    marginLeft: 20,
    marginEnd: 10,
  },
});
export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'orange',
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AddRecipe"
          component={AddRecipesScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="add-circle-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MyMenu"
          component={MyRecipesScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="receipt-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
