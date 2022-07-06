import React from 'react';
import {View, TextInput, StyleSheet, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
import {bottomTabs} from './tabs';
const BottomTab = createBottomTabNavigator();

function Launch({navigation}) {
  return (
    <>
      <SafeAreaView style={styles.headerWrap}>
        <View style={styles.headerContainer}>
          <IconOcticons name="three-bars" style={styles.navBarIcon} />
          <View style={styles.searchBlock}>
            <IconAntDesign name="search1" style={styles.searchIcon} />
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              // onChangeText={value => setPhoneNumber(value)}
              // value={phoneNumber}
            />
          </View>
          <TouchableOpacity onPress={() => {
          }}>
            <Image
              source={{
                uri: 'https://i.redd.it/snoovatar/avatars/16f0557d-0d6d-4b6f-8b2b-ad1b305c8c39.png',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

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
    </>
  );
}

const styles = StyleSheet.create({
  headerWrap: {
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  navBarIcon: {
    fontSize: 20,
  },
  searchBlock: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 12,
    backgroundColor: '#ecedf0',
    borderRadius: 2,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    fontSize: 16,
    color: '#b7b3b3',
    paddingHorizontal: 6,
  },
  avatar: {
    width: 30,
    height: 30,
    backgroundColor: '#ecedf0',
    borderRadius: 999,
  },
});

export default Launch;
