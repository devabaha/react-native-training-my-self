import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {CreateAvatar} from '../HomeScreen/CreateAvatar/CreateAvatar';
import MyProfile from './MyProfile';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';

export const UserInfo = props => {
  const {setShowUserInfo, avatar = '', setAvatar, callback = () => {}} = props;
  const [userName, setUserName] = useState('Dong NK');
  const [showCreateAvatar, setShowCreateAvatar] = useState(false);

  const handleShowUserInfo = () => {
    setShowUserInfo(false);
  };

  const handleCreateAvatar = () => {
    setShowCreateAvatar(true);
  };

  const handleMyProfile = () => {
    Alert.alert('My Profile');
    callback(userName);
  };

  return (
    <>
      {showCreateAvatar ? (
        <CreateAvatar
          avatar={avatar}
          setAvatar={setAvatar}
          setShowCreateAvatar={setShowCreateAvatar}
        />
      ) : (
        <SafeAreaView style={styles.userInfoSafeArea}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            style={[styles.userInfoContainer, styles.shadowProp]}>
            <View>
              <TouchableWithoutFeedback onPress={handleShowUserInfo}>
                <AntDesign name="close" style={styles.closeIcon}></AntDesign>
              </TouchableWithoutFeedback>

              <View style={styles.userAvatar}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: avatar,
                  }}
                />
              </View>

              <View style={styles.userDetail}>
                <Text style={styles.userName}>{userName}</Text>
                <View style={styles.userStatus}>
                  <Octicons
                    style={styles.userStatusDot}
                    name="dot-fill"></Octicons>
                  <Text style={styles.userStatusText}>Online status: On</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.createAvatar}
                onPress={handleCreateAvatar}>
                <Text style={styles.textcreateAvatar}>Create Avatar</Text>
              </TouchableOpacity>

              <View style={styles.userPoints}>
                <Pressable style={styles.pointField}>
                  <MaterialCommunityIcons
                    style={styles.pointFieldIcon}
                    name="react"></MaterialCommunityIcons>
                  <View>
                    <Text>14</Text>
                    <Text style={styles.pointFielText}>Karma</Text>
                  </View>
                </Pressable>

                <Pressable style={[styles.pointField, styles.line]}>
                  <AntDesign
                    style={styles.pointFieldIcon}
                    name="book"></AntDesign>
                  <View>
                    <Text>24</Text>
                    <Text style={styles.pointFielText}>Reddit age</Text>
                  </View>
                </Pressable>
              </View>

              <View style={styles.userFields}>
                <Pressable style={styles.userField} onPress={handleMyProfile}>
                  <AntDesign
                    name="profile"
                    style={styles.userFieldIcon}></AntDesign>
                  <Text>My Profile</Text>
                </Pressable>

                <Pressable style={styles.userField}>
                  <FontAwesome5
                    name="coins"
                    style={styles.userFieldIcon}></FontAwesome5>
                  <Text>Reddit Coins</Text>
                </Pressable>

                <Pressable style={styles.userField}>
                  <AntDesign
                    name="switcher"
                    style={styles.userFieldIcon}></AntDesign>
                  <Text>Reddit Premium</Text>
                </Pressable>

                <Pressable style={styles.userField}>
                  <Feather
                    name="bookmark"
                    style={styles.userFieldIcon}></Feather>
                  <Text>Saved</Text>
                </Pressable>

                <Pressable style={styles.userField}>
                  <MaterialCommunityIcons
                    name="history"
                    style={styles.userFieldIcon}></MaterialCommunityIcons>
                  <Text>History</Text>
                </Pressable>

                <Pressable style={styles.userField}>
                  <MaterialIcons
                    name="pending-actions"
                    style={styles.userFieldIcon}></MaterialIcons>
                  <Text>Pending Posts</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.setting}>
              <Pressable style={styles.settingBlock}>
                <AntDesign
                  name="setting"
                  style={styles.userFieldIcon}></AntDesign>
                <Text>Setting</Text>
              </Pressable>
              <Pressable style={styles.theme}>
                <Octicons name="moon" style={styles.userFieldIcon}></Octicons>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  userInfoSafeArea: {
    backgroundColor: '#fff',
    flex: 1,
  },

  userInfoContainer: {
    paddingHorizontal: 16,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  closeIcon: {
    fontSize: 28,
    color: '#7d7a7a',
    marginLeft: 'auto',
  },

  userAvatar: {
    alignItems: 'center',
  },

  avatar: {
    width: 85,
    height: 130,
    overflow: 'visible',
  },

  userDetail: {
    alignItems: 'center',
  },

  userStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    paddingHorizontal: 4,
    marginVertical: 8,
  },

  userStatusDot: {
    fontSize: 20,
    color: 'green',
    paddingHorizontal: 4,
  },

  userStatusText: {
    color: 'green',
  },

  userName: {
    fontSize: 20,
  },

  createAvatar: {
    borderRadius: 99,
    backgroundColor: '#f05123',
    alignItems: 'center',
    marginBottom: 8,
  },

  textcreateAvatar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    paddingVertical: 6,
  },

  userPoints: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 8,
    borderBottomColor: '#ececec',
  },

  pointField: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },

  pointFieldIcon: {
    color: '#007AFF',
    fontSize: 20,
    paddingHorizontal: 12,
  },

  line: {
    borderLeftWidth: 1,
    borderLeftColor: '#ececec',
  },

  pointFielText: {
    color: '#767676',
  },

  userFields: {
    paddingVertical: 8,
  },

  userField: {
    flexDirection: 'row',
    paddingVertical: 8,
  },

  userFieldIcon: {
    fontSize: 16,
    paddingHorizontal: 12,
    color: '#767676',
  },

  setting: {
    flexDirection: 'row',
  },

  settingBlock: {
    flexDirection: 'row',
  },

  theme: {
    marginLeft: 'auto',
  },
});
