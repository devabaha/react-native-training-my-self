import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {navigationStrings} from '../../constants'
const GetStarted = ({navigation}) => {
  const [images] = useState([
    'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1242764/pexels-photo-1242764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/8821913/pexels-photo-8821913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.sliderBlock}>
        <Swiper loop autoplay containerStyle={styles.swiper}>
          {images.map((image, index) => {
            return (
              <View key={index}>
                <Image
                  source={{uri: image}}
                  style={{
                    height: '100%',
                    resizeMode: 'cover',
                  }}
                />
              </View>
            );
          })}
        </Swiper>
      </View>

      <View style={styles.titleBlock}>
        <Text style={styles.title}>
          Your gift will unlock doors that you prayed for God to open.
        </Text>
      </View>
      <View style={styles.buttonBlock}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.buttonBackground}
          onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333d94',
  },
  sliderBlock: {
    height: '50%',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  titleBlock: {
    paddingHorizontal: 90,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
  },
  buttonBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 46,
  },
  buttonBackground: {
    backgroundColor: '#7279ec',
    paddingHorizontal: 42,
    paddingVertical: 16,
    borderRadius: 999,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GetStarted;
