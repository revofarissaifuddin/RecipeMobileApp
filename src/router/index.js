import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Register,
  ResetPwd,
  SendOtp,
  ForgotPwd,
  ProfileScreen,
  AddRecipesScreen,
  MyRecipesScreen,
  SearchRecipesScreen,
  DetailIngredientsScreen,
  SaveLikeScreen,
  EditRecipesScreen,
  SplashScreen,
} from '../screens';
import {newMenu} from '../storages/actions/menu';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const new_Menu = useSelector(state => state.newMenu);
  const {height, width} = Dimensions.get('window');

  //get new recipe
  useEffect(() => {
    const reset = navigation.addListener('focus', () => {
      dispatch(newMenu());
    });
    return reset;
  }, [dispatch]);

  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <ScrollView style={{height: '100%'}} yyyy>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{marginTop: '5%', padding: 10}}>
            <TouchableOpacity style={styles.sectionStyle}>
              <Icon style={styles.searchOutline} name="search-outline"></Icon>
              <Text
                style={styles.input}
                placeholder="Search Pasta, Bread , etc"
                onPress={() => navigation.navigate('SearchRecipesScreen')}>
                Search Pasta, Bread , etc
              </Text>
            </TouchableOpacity>
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
                              source={require('../assets/bg-detail.png')}
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
                        source={require('../assets/icon-soup.png')}
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
                        source={require('../assets/icon-dessert.png')}
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
                        source={require('../assets/icon-seafood.png')}
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
                        source={require('../assets/icon-dessert.png')}
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
                    New For You
                  </Text>
                </View>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View style={{width: '100%'}}>
                <View>
                  <FlatList
                    data={new_Menu.data}
                    keyExtractor={item => item.id}
                    horizontal
                    renderItem={({item, index}) => {
                      return (
                        <View
                          style={{
                            width: width / 2,
                            height: height / 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                          }}>
                          <TouchableOpacity
                            style={{
                              width: '90%',
                              height: '100%',
                              borderRadius: 10,
                            }}
                            onPress={() =>
                              navigation.navigate(`DetailIngredientsScreen`, {
                                itemId: `${item.id}`,
                              })
                            }>
                            <ImageBackground
                              source={{uri: `${item.photo}`}}
                              // source={require('../assets/bg-detail.png')}
                              style={{
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
                                {item.title}
                              </Text>
                              <Text
                                style={{
                                  color: 'black',
                                  width: '80%',
                                  fontSize: 10,
                                }}>
                                {item.category}
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
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    borderRadius: 10,
    margin: 10,
    width: '90%',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
  input: {
    flex: 1,
    width: '70%',
    height: 40,
    borderColor: '#EFC81A',
    backgroundColor: '#EFEFEF',
    padding: 10,
    color: '#808080',
  },
  searchOutline: {
    fontSize: 20,
    marginLeft: 20,
    marginEnd: 10,
  },
});
const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarShowLabel: false,
      }}
      initialRouteName="Home">
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
  );
};
export default function Router() {
  const auth = useSelector(state => state.auth);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {auth.data ?(
          <Stack.Screen
            name="BottomNav"
            component={BottomNav}
            options={{headerShown: false}}
          />
        ):(
          <>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ResetPwd"
              component={ResetPwd}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SendOtp"
              component={SendOtp}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ForgotPwd"
              component={ForgotPwd}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SearchRecipesScreen"
              component={SearchRecipesScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DetailIngredientsScreen"
              component={DetailIngredientsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SaveLikeScreen"
              component={SaveLikeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EditRecipesScreen"
              component={EditRecipesScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
