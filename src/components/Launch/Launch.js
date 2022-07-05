import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomTabs} from './tabs';
const BottomTab = createBottomTabNavigator();
function Launch() {
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

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     elevation: 0,
//     borderRadius: 8,
//     shadowColor: '#333d94',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,
//   },
// });

export default Launch;
