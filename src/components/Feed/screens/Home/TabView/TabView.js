import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import News from '../News';
import Popular from '../Popular';
import {navigationStrings} from '../../../../../constants';
import {config} from '../../../../../util/config';
const Tab = createMaterialTopTabNavigator();

function TabView() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarContentContainerStyle: {
          alignItems: 'center',
          height: 36,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIndicatorStyle: {
          width: '25%',
          left: '12.5%',
          backgroundColor: config.color.primary,
        },
      }}>
      <Tab.Screen name={navigationStrings.NEWS} component={News} />
      <Tab.Screen name={navigationStrings.POPULAR} component={Popular} />
    </Tab.Navigator>
  );
}

export default TabView;
