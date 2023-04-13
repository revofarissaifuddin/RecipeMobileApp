import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchMenu} from '../../storages/actions/menu';
import {useDispatch, useSelector} from 'react-redux';
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
        Loading
      </Heading>
    </HStack>
  );
};
const SearchRecipesScreen = ({navigation}) => {
  const [search_Menu, setSearchMenu] = useState('');
  const search_menu = useSelector(state => state.search_menu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMenu(search_Menu));
  }, [search_Menu]);
  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{marginTop: '5%'}}>
          <View style={styles.sectionStyle}>
            <Icon style={styles.searchOutline} name="search-outline"></Icon>
            <TextInput
              style={styles.input}
              placeholder="Search Pasta, Bread , etc"
              value={search_Menu}
              onChangeText={value => setSearchMenu(value, 'search_Menu')}
              underlineColorAndroid="transparent"
            />
          </View>
          {search_menu.isError && <Text>Get Menu Failed</Text>}
          {search_menu.isLoading && (
            <NativeBaseProvider>
              <Center flex={1} px="3">
                <Loading />
              </Center>
            </NativeBaseProvider>
          )}
          <View
            style={{
              marginTop: '1%',
              height: Dimensions.get('window').height / 1,
            }}>
            <View>
              <FlatList
                data={search_menu.data}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: 'white',
                        borderRadius: 15,
                        padding: 10,
                        marginTop: 10,
                      }}>
                      <View style={{width: '30%'}}>
                        <Image
                          style={{width: 100, height: 100, borderRadius: 15}}
                          source={{uri: `${item.photo}`}}
                        />
                      </View>
                      <View style={{width: '40%'}}>
                        <View style={{marginStart: 0}}>
                          <View>
                            <Text
                              style={{color: 'black', fontWeight: 'bold'}}
                              onPress={() =>
                                navigation.navigate(`DetailIngredientsScreen`, {
                                  itemId: `${item.id}`,
                                })
                              }>
                              {item.title}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 10,
                              alignItems: 'center',
                            }}>
                            <Icon
                              style={{fontSize: 20, color: 'yellow'}}
                              name="star-outline"
                            />
                            <Text style={{marginStart: 10}}>4.3</Text>
                            <Icon
                              style={{
                                fontSize: 10,
                                color: 'black',
                                marginLeft: 10,
                              }}
                              name="ellipse-outline"
                            />
                            <Text style={{marginStart: 10}}>
                              {item.category}
                            </Text>
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
    </SafeAreaView>
  );
};

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
export default SearchRecipesScreen;
