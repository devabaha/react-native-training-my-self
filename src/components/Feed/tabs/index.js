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
import {navigationStrings} from '../../../constants';
import {config} from '../../../util/config';
const tabBarIconActiveStyle = focused => {
  return {color: focused ? config.color.primary : config.color.gray};
};

const styles = StyleSheet.create({
  tabBarIconStyle: {
    fontSize: 24,
  },
  tabBarBadgeStyle: {
    backgroundColor: config.color.notification,
    color: config.color.white,
    fontSize: 10,
    marginLeft: 5,
  },
});

const bottomTabs = [
  {
    name: navigationStrings.HOME,
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
    name: navigationStrings.EXPLORE,
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
    name: navigationStrings.POSTS,
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
    name: navigationStrings.CHAT,
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
      tabBarBadge: '1',
      tabBarBadgeStyle: styles.tabBarBadgeStyle,
    },
  },
  {
    name: navigationStrings.NOTIFICATIONS,
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
      tabBarBadge: '9',
      tabBarBadgeStyle: styles.tabBarBadgeStyle,
    },
  },
];

export {bottomTabs};
