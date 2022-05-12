import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import register from './src/screens/register';
import Home from './src/screens/Home';
import information from './src/screens/information';
import test from './src/screens/test';
import update from './src/screens/update';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="information" component={information} options={{ title: 'Listes des utilisateurs' }} />
        <Stack.Screen name="test" component={test} />
        <Stack.Screen name="update" component={update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
