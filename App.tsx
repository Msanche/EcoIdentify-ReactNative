/* eslint-disable prettier/prettier */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Tabs from './component/tab';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}
            options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen}
            options={{ headerShown: false }}/>
            <Stack.Screen name="Tabs" component={Tabs}
            options={{ headerShown: false }}/>
            <Stack.Screen name="Settings" component={SettingsScreen}
              />

</Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
