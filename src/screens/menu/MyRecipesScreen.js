import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMenu, deleteMenu} from '../../storages/actions/menu';
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
        Loading.......
      </Heading>
    </HStack>
  );
};

const MyRecipesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.menu);
  const delete_menu = useSelector(state => state.delete_menu);
  const token = useSelector(state => state.auth.data.data.token);
  //refresh control
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      dispatch(getMenu(token));
    }, 1500);
  }, []);
  //get My recipe
  useEffect(() => {
    const reset = navigation.addListener('focus', () => {
      dispatch(getMenu(token));
    });
    return reset;
  }, [dispatch, token]);
  //delete menu
  const deleteData = id => {
    dispatch(deleteMenu(id, token), navigation.navigate('MyMenu'));
  };

  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>My Recipe</Text>
      </View>
      <ScrollView
        style={{height: '100%'}}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={({flex: 1, alignItems: 'center'})}>
          <View style={{marginTop: '1%', alignItems: 'center'}}>
            <View style={{marginTop: '5%'}}>
              {menu.isError && <Text>Get Recipes Failed</Text>}
              {menu.isLoading ? (
                <NativeBaseProvider>
                  <Center flex={1} px="3">
                    <Loading />
                  </Center>
                </NativeBaseProvider>
              ) : (
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
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 20,
                              }}
                              source={{uri: `${item.photo}`}}
                            />
                          </View>
                          <View style={{width: '40%'}}>
                            <View style={{marginStart: 0}}>
                              <Text
                                style={{color: 'black', fontWeight: 'bold',}}
                                onPress={() =>
                                  navigation.navigate(
                                    `DetailIngredientsScreen`,
                                    {
                                      itemId: `${item.id}`,
                                    },
                                  )
                                }>
                                {item.title}
                              </Text>
                              <Text style={{color: 'black', marginTop: 10}}>
                                {item.category}
                              </Text>
                            </View>
                          </View>
                          <View style={{width: '25%'}}>
                            <View style={{flexDirection: 'column'}}>
                              <View>
                                <Button
                                  color="#30C0F3"
                                  title="Edit"
                                  onPress={() =>
                                    navigation.navigate(`EditRecipesScreen`, {
                                      itemId: `${item.id}`,
                                    })
                                  }
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
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </View>
          </View>
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
