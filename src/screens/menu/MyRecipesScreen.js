import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMenu, deleteMenu} from '../../storages/actions/menu';

const MyRecipesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.menu);
  const delete_menu = useSelector(state => state.delete_menu);
  const token = useSelector(state => state.auth.data.data.token);
  //refresh
  const [refreshing, setRefreshing] = useState(true);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  //get My recipe
  useEffect(() => {
    dispatch(getMenu(token));
  }, [dispatch, token]);
  //delete menu
  const deleteData = id => {
    dispatch(deleteMenu(id, token));
  };

  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <ScrollView style={{height: '100%'}}>
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
                              <Button color="#30C0F3" title="Edit" />
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
});
export default MyRecipesScreen;
