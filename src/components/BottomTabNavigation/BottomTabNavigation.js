import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from '../HomeScreen/HomeStack';
import {ExploreScreen} from '../ExploreScreen/ExploreScreen';
import {CreatePostsScreen} from '../CreatePostsScreen/CreatePostsScreen';
import {ChatScreen} from '../ChatScreen/ChatScreen';
import {NotificationsScreen} from '../NotificationsScreen/NotificationsScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              style={{
                fontSize: 26,
                color: focused ? '#000' : '#bdb9b9',
              }}></Entypo>
          ),
        }}
      />

      {/* <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="ios-chatbubble-ellipses-sharp"
              style={{
                fontSize: 26,
                color: focused ? '#000' : '#bdb9b9',
              }}></Ionicons>
          ),
        }}
      />

      <Tab.Screen
        name="Posts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="plus"
              style={{
                fontSize: 26,
                color: focused ? '#000' : '#bdb9b9',
              }}></AntDesign>
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="bell"
              style={{
                fontSize: 26,
                color: focused ? '#000' : '#bdb9b9',
              }}></FontAwesome5>
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="compass"
              style={{
                fontSize: 26,
                color: focused ? '#000' : '#bdb9b9',
              }}></Ionicons>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
