import React from 'react';
import {SafeAreaView, TextInput, StyleSheet, View, Image} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import TabView from './TabView';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBarContainer}>
        <View style={styles.searchBlock}>
          <IconAntDesign name="search1" size={20} />
          <TextInput
            placeholder="8765 4321"
            style={styles.searchInput}
            // onChangeText={value => setPhoneNumber(value)}
            // value={phoneNumber}
            // keyboardType="numeric"
          />
        </View>
        <View>
          <Image
            source={{
              uri: 'https://i.redd.it/snoovatar/avatars/16f0557d-0d6d-4b6f-8b2b-ad1b305c8c39.png',
            }}
            style={styles.avatar}
          />
        </View>
      </View>
      <TabView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBarContainer: {
    paddingHorizontal: 12,
  },
  searchBlock: {},
  searchInput: {},
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
});

export default Home;