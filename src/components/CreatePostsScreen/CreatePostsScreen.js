import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {roundToNearestPixel} from 'react-native/Libraries/Utilities/PixelRatio';

const tags = [
  {
    id: 1,
    color: '#d1422f',
    name: 'sad',
  },
  {
    id: 2,
    color: '#016fc9',
    name: 'funny',
  },
  {
    id: 3,
    color: '#b72fe0',
    name: 'tech',
  },
  {
    id: 4,
    color: 'orange',
    name: 'travel',
  },
  {
    id: 5,
    color: '#c5ba17',
    name: 'trip',
  },
];

export const CreatePostsScreen = props => {
  const [post, setPost] = useState({});
  const [imageUpload, setImageUpload] = useState('');

  const handleUploadImagePost = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImageUpload(image.path);
    });
  };

  return (
    <ScrollView style={styles.postFields}>
      <View style={styles.postField}>
        <Text style={styles.postFieldText}>Title</Text>
        <TextInput style={styles.headerSearch} placeholder="Title"></TextInput>
      </View>

      <View style={styles.postField}>
        <Text style={styles.postFieldText}>Description</Text>
        <TextInput
          style={{...styles.headerSearch, height: 60}}
          placeholder="Description"
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.postField}>
        <Text style={styles.postFieldText}>Tags</Text>
        <View style={styles.tagFields}>
          {tags.map(tag => (
            <TouchableOpacity
              style={{backgroundColor: tag.color, ...styles.tagField}}>
              <Text style={styles.tagFieldText}>{tag.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.postField}>
        <TouchableOpacity
          style={styles.postFielImageUpload}
          onPress={handleUploadImagePost}>
          <FontAwesome5
            name="file-image"
            style={styles.postFieldIcon}></FontAwesome5>
          <Text style={styles.postFieldText}>Upload Image</Text>
        </TouchableOpacity>
        <View style={styles.imageUploadPreview}>
          <Image style={styles.imageUpload} source={{uri: imageUpload}} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postFields: {
    paddingHorizontal: 50,
    backgroundColor: '#fff',
    flex: 1,
  },

  postField: {
    height: 30,
    borderRadius: 6,
    marginVertical: 20,
  },

  postFieldText: {
    fontSize: 16,
    paddingBottom: 10,
  },

  postFieldIcon: {
    color: '#34c65e',
    fontSize: 20,
    paddingRight: 10,
  },

  postFielImageUpload: {
    flexDirection: 'row',
  },

  tagFields: {
    flexDirection: 'row',
  },

  tagField: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginRight: 6,
    borderRadius: 6,
    borderWidth: 1,
  },

  tagFieldText: {
    fontSize: 16,
    color: '#fff',
  },

  imageUploadPreview: {
    backgroundColor: '#000',
    alignItems: 'center',
  },

  imageUpload: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    overflow: 'visible',
  },
});
