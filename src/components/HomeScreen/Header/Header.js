import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HeaderNavigations} from './HeaderNavigations';
import {Navbar} from './Navbar';

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export const Header = props => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [avatar, setAvatar] = useState(
    'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
  );
  const [searchLabel, setSearchLabel] = useState('Search');

  const handleShowUserInfo = () => {
    setShowUserInfo(true);
  };

  const handleShowNavbar = () => {
    setShowNavbar(true);
  };

  return (
    <>
      {/* <Navbar setShowNavbar={setShowNavbar} /> */}

      <View style={styles.headerView}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={handleShowNavbar}>
            <FontAwesome name="bars" style={styles.barIcon}></FontAwesome>
          </TouchableOpacity>
          <View style={styles.headerSearch}>
            <AntDesign style={styles.searchIcon} name="search1"></AntDesign>
            <TextInput placeholder={searchLabel}></TextInput>
          </View>

          <TouchableOpacity onPress={handleShowUserInfo}>
            <Image
              style={styles.avatar}
              source={{
                uri: avatar,
              }}
            />
          </TouchableOpacity>
        </View>

        <HeaderNavigations />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerView: {
    paddingHorizontal: 16,
    paddingTop: 46,
  },

  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  barIcon: {
    fontSize: 20,
  },

  headerSearch: {
    backgroundColor: '#f6f7f8',
    height: 30,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 6,
  },

  searchIcon: {
    paddingLeft: 4,
    paddingRight: 8,
  },

  avatar: {
    width: 28,
    height: 28,
    backgroundColor: '#000',
    borderRadius: 14,
    resizeMode: 'contain',
  },
});
