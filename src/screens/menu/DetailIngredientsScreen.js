import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { detailMenu } from '../../storages/actions/menu';

const DetailIngredientsScreen = ({route}) => {
  const dispatch = useDispatch();
  const detail = useSelector(state => state.detail);
  const { itemId } = route.params;
  //get My recipe
  useEffect(() => {
    dispatch(detailMenu(itemId));
  }, [dispatch]);
  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <View style={{height: '100%'}} showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={detail.data}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View>
                  <ImageBackground
                    source={{uri: `${item.photo}`}}
                    style={{
                      height: Dimensions.get('window').height / 2,
                    }}>
                    <View style={styles.brandView}>
                      <View style={{width: '90%', padding: 20}}>
                        <Text
                          style={{color: 'white', width: 200, fontSize: 35}}>
                          {item.title}
                        </Text>
                        <View>
                          <View>
                            <View style={{flexDirection: 'row'}}>
                              <View style={{width: '90%'}}>
                                <Text style={{color: 'white'}}>
                                  By {item.creator}
                                </Text>
                              </View>
                              <View
                                style={{
                                  backgroundColor: '#EFC81A',
                                  width: 30,
                                  height: 30,
                                  borderRadius: 5,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <Icon
                                  style={{fontSize: 20}}
                                  name="bookmark-outline"
                                />
                              </View>
                              <View
                                style={{
                                  backgroundColor: '#FFFFFF',
                                  borderColor: '#EEC302',
                                  borderRadius: 5,
                                  width: 30,
                                  height: 30,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginLeft: 10,
                                }}>
                                <Icon
                                  style={{fontSize: 20}}
                                  name="thumbs-up-outline"
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        bottom: 60,
                        borderTopStartRadius: 25,
                        borderTopEndRadius: 25,
                        width: '100%',
                        height: Dimensions.get('window').height / 1,
                      }}>
                      <View style={{padding: 40}}>
                        <View>
                          <Text
                            style={{
                              color: 'black',
                              borderBottomColor: '#EEC302',
                              borderBottomWidth: 2,
                              marginBottom: 20,
                              width: 80,
                            }}>
                            Ingredients
                          </Text>
                          <Text style={{width: '80%',height:'100%'}}>
                            {item.descriptions}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default DetailIngredientsScreen;
