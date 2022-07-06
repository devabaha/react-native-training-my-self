import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
import TabView from './TabView';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <IconOcticons name="three-bars" style={styles.navBarIcon} />
          </TouchableOpacity>
          <View style={styles.searchBlock}>
            <IconAntDesign name="search1" style={styles.searchIcon} />
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              // onChangeText={value => setPhoneNumber(value)}
              // value={phoneNumber}
            />
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={{
                uri: 'https://i.redd.it/snoovatar/avatars/16f0557d-0d6d-4b6f-8b2b-ad1b305c8c39.png',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
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

export default Home;
