import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const AddRecipesScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <ScrollView style={{height: '100%'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View>
            <Text style={styles.title}>Add Your Recipe</Text>
          </View>
          <View style={{marginTop: '5%'}}>
            <View style={styles.sectionStyle}>
              <Icon style={styles.bookoutline} name="book-outline"></Icon>
              <TextInput
                style={styles.input}
                placeholder="Title"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={[styles.sectionInput, {height: 150}]}>
            <TextInput placeholder="Ingredients" />
          </View>
          <View style={styles.sectionInput}>
            <TextInput placeholder="Add Photo" />
          </View>
          <View style={styles.sectionInput}>
            <TextInput placeholder="Category" />
          </View>
          <View style={{marginTop: '10%', width: 100, marginBottom:20}}>
            <Button color="#EFC81A" title="POST" />
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
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
    margin: 10,
    width: '80%',
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
    width: '80%',
    backgroundColor: 'white',
    marginTop: '5%',
    padding:5
  },
});
export default AddRecipesScreen;
