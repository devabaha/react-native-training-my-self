import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {publicRoutes} from './src/routes';
const Stack = createNativeStackNavigator();

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

