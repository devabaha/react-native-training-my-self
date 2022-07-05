import React from 'react';
import {StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Posts from '../screens/Posts';
import Chat from '../screens/Chat';
import Notifications from '../screens/Notifications';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const tabBarIconActiveStyle = focused => {
  return {color: focused ? '#333d94' : '#ccc'};
};

const bottomTabs = [
  {
    name: 'Home',
    component: Home,
    options: {
      headerShown: false,
      tabBarIcon: ({focused}) => {
        return (
          <IconEntypo
            name="home"
            style={[styles.tabBarIconStyle, tabBarIconActiveStyle(focused)]}
          />
        );
      },
    },
  },
  {
    name: 'Explore',
    component: Explore,
    options: {
      tabBarIcon: ({focused}) => {
        return (
          <IconFontAwesome
            name="safari"
            style={[styles.tabBarIconStyle, tabBarIconActiveStyle(focused)]}
          />
        );
      },
    },
  },
  {
    name: 'Posts',
    component: Posts,
    options: {
      tabBarIcon: ({focused}) => {
        return (
          <IconAntDesign
            name="plus"
            style={[styles.tabBarIconStyle, tabBarIconActiveStyle(focused)]}
          />
        );
      },
    },
  },
  {
    name: 'Chat',
    component: Chat,
    options: {
      tabBarIcon: ({focused}) => {
        return (
          <IconIonicons
            name="chatbubble-ellipses"
            style={[styles.tabBarIconStyle, tabBarIconActiveStyle(focused)]}
          />
        );
      },
    },
  },
  {
    name: 'Notifications',
    component: Notifications,
    options: {
      tabBarIcon: ({focused}) => {
        return (
          <IconFontAwesome
            name="bell"
            style={[styles.tabBarIconStyle, tabBarIconActiveStyle(focused)]}
          />
        );
      },
    },
  },
];

const styles = StyleSheet.create({
  tabBarIconStyle: {
    fontSize: 24,
  },
});

export {bottomTabs};
