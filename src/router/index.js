import {NavigationContainer} from '@react-navigation/native';
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
  HomeScreen
} from '../screens';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
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
        {auth.data ? (
          <Stack.Screen
            name="BottomNav"
            component={BottomNav}
            options={{headerShown: false}}
          />
        ) : (
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
          </>
        )}
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
          name="EditRecipesScreen"
          component={EditRecipesScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
