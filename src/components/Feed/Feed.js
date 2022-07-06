import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomTabs} from './tabs';

const BottomTab = createBottomTabNavigator();

function Feed() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
      initialRouteName="Home">
      {bottomTabs.map((bottomTab, index) => {
        return (
          <BottomTab.Screen
            key={index}
            name={bottomTab.name}
            component={bottomTab.component}
            options={bottomTab.options}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}

export default Feed;
