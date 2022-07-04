import React from 'react';
import {StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Posts from '../screens/Posts';
import Chat from '../screens/Chat';
import Notifications from '../screens/Notifications';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAntDesign from 'react-native-vector-icons/AntDesign';

const bottomTabs = [
  {
    name: 'Home',
    component: Home,
    options: {
      headerShown: false,
      tabBarIcon: () => {
        return <IconFontAwesome name="home" style={styles.tabBarIconStyle} />;
      },
    },
  },
  {
    name: 'Explore',
    component: Explore,
    options: {
      tabBarIcon: () => {
        return <IconFontAwesome name="folder" style={styles.tabBarIconStyle} />;
      },
    },
  },
  {
    name: 'Posts',
    component: Posts,
    options: {
      tabBarIcon: () => {
        return <IconFontAwesome name="plus" style={styles.tabBarIconStyle} />;
      },
    },
  },
  {
    name: 'Chat',
    component: Chat,
    options: {
      tabBarIcon: () => {
        return (
          <IconFontAwesome name="comment" style={styles.tabBarIconStyle} />
        );
      },
    },
  },
  {
    name: 'Notifications',
    component: Notifications,
    options: {
      tabBarIcon: () => {
        return <IconFontAwesome name="bell" style={styles.tabBarIconStyle} />;
      },
    },
  },
];

const styles = StyleSheet.create({
  tabBarIconStyle: {
    fontSize: 30,
  },
});

export {bottomTabs};
