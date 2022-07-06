import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {publicRoutes} from './src/routes';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        {publicRoutes.map((route, index) => {
          return (
            <Stack.Screen
              key={index}
              name={route.name}
              component={route.component}
              options={route.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
