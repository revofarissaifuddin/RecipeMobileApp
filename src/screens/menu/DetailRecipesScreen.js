import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailRecipesScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <ScrollView style={{height: '100%'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{marginTop: '5%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#00E092',
                borderRadius: 10,
                padding: 10,
              }}>
              <View style={{width: '30%'}}>
                <Image
                  style={{width: 100, height: 100}}
                  source={require('../../assets/fg-pwd.png')}
                />
              </View>
              <View style={{width: '40%'}}>
                <View style={{marginStart: 0}}>
                  <View>
                    <Text style={{color: 'black'}}>Margherita</Text>
                    <Text style={{color: 'black', marginTop: 5}}>Spicy</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Icon style={{fontSize: 20}} name="person-outline" />
                    <Text style={{marginStart: 10}}>user</Text>
                  </View>
                </View>
              </View>
              <View style={{width: '20%'}}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      backgroundColor: '#EFC81A',
                      width: 30,
                      height: 30,
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon style={{fontSize: 20}} name="bookmark-outline" />
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
                    <Icon style={{fontSize: 20}} name="thumbs-up-outline" />
                  </View>
                </View>
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
});
export default DetailRecipesScreen;
