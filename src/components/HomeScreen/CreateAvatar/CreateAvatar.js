import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Header} from '../Header/Header';

const images = [
  'https://i.redd.it/mozfkrjpoa261.png',
  'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
  'https://preview.redd.it/mkemq6sqf7261.png?auto=webp&s=314cb48d9de13f542a9e39f54b9991e219c53d79',
  'https://i.redd.it/ib7scrg5t7w61.png',
  'https://preview.redd.it/vl1a9jcmrtv51.png?auto=webp&s=9171f7620ac0c4d75eddde2e87a99dafdf16ee57',
  'https://preview.redd.it/n9nnnionfu361.png?auto=webp&s=c010326282ec4b19b9b6340d7cdb1616b5c70968',
];

export const CreateAvatar = props => {
  const {avatar, setAvatar, setShowCreateAvatar} = props;
  const handleCloseCreateAvatar = () => {
    setShowCreateAvatar(false);
  };

  const handleSaveAvatar = () => {
    setShowCreateAvatar(false);
  };

  const handleSetAvatar = image => {
    setAvatar(image);
  };

  const handleUploadAvatar = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setAvatar(image.path);
    });
  };

  return (
    <SafeAreaView style={styles.createAvatarSafeArea}>
      <ScrollView style={styles.createAvatarContainer}>
        <View style={styles.closeOrSave}>
          <TouchableOpacity
            style={styles.closeCreateAvatar}
            onPress={handleCloseCreateAvatar}>
            <EvilIcons
              name="close"
              style={styles.closeCreateAvatarBtn}></EvilIcons>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveAvatarBtn}
            onPress={handleSaveAvatar}>
            <Text style={styles.saveAvatarText}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{uri: avatar}} />
          <TouchableOpacity
            style={styles.uploadAvatar}
            onPress={handleUploadAvatar}>
            <AntDesign name="upload" style={styles.uploadAvatarBtn}></AntDesign>
          </TouchableOpacity>
        </View>

        <View style={styles.avatarPickerFields}>
          <View style={styles.avatarPickerField}>
            <Text style={styles.avatarPickerFieldTittle}>
              Destiny 1: The Witch Queen
            </Text>
            <ScrollView horizontal style={styles.avatarPickerContainer}>
              {images.map(image => (
                <LinearGradient
                  key={image}
                  style={styles.avatarPickerItem}
                  colors={['#ffafbd', '#ffc3a0']}>
                  <TouchableOpacity onPress={() => handleSetAvatar(image)}>
                    <Image style={styles.avatarPicker} source={{uri: image}} />
                  </TouchableOpacity>
                </LinearGradient>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  createAvatarSafeArea: {
    backgroundColor: '#fff',
    flex: 1,
  },

  createAvatarContainer: {
    paddingHorizontal: 16,
  },

  closeOrSave: {
    flexDirection: 'row',
  },

  closeCreateAvatar: {
    justifyContent: 'center',
    backgroundColor: '#ededed',
    borderRadius: 99,
  },

  closeCreateAvatarBtn: {
    fontSize: 20,
    padding: 6,
  },

  uploadAvatar: {
    justifyContent: 'center',
    backgroundColor: '#ededed',
    borderRadius: 99,
    position: 'absolute',
    right: 0,
    bottom: '25%',
  },

  uploadAvatarBtn: {
    fontSize: 20,
    padding: 6,
  },

  saveAvatarBtn: {
    backgroundColor: '#f05123',
    borderRadius: 16,
    justifyContent: 'center',
    marginLeft: 'auto',
  },

  saveAvatarText: {
    fontWeight: '700',
    color: '#fff',
    paddingHorizontal: 12,
  },

  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },

  avatar: {
    width: 160,
    height: 300,
    overflow: 'visible',
  },

  avatarPickerFieldTittle: {
    paddingVertical: 12,
  },

  avatarPickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  avatarPickerItem: {
    borderRadius: 12,
    paddingHorizontal: 12,
    marginHorizontal: 6,
    backgroundColor: 'red',
  },

  avatarPicker: {
    width: 60,
    height: 120,
    overflow: 'visible',
  },
});
