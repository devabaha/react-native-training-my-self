import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import News from '../News';
import Popular from '../Popular';

const Tab = createMaterialTopTabNavigator();

function TabView() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Popular" component={Popular} />
    </Tab.Navigator>
  );
}

export default TabView;
