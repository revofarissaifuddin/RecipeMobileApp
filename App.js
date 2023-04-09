// In App.js in a new project

import * as React from 'react';
import {View, Text,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
            itemId: 86,
            itemName: 'Chiken',
          })}
      />
    </View>
  );
}
function DetailsScreen({ route, navigation }) {
  const { itemId, itemName } = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      {itemId ? <Text>{itemId}</Text> : null}
      {itemName ? <Text>{itemName}</Text> : null}
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.push('Details', {
            itemId: 87,
            itemName: 'sosis',
          })
        }
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({route}) => ({title: route.params.itemName})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
