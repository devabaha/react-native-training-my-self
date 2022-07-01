import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const buttonPress = () => {
    alert(phoneNumber);
  };

  const getGeoCurrentCountry = () => {
    fetch('https://get.geojs.io/v1/ip/country.json')
      .then(response => response.json())
      .then(({country: cca2, country_3, ip, name}) => {
        const currentCountry = countries.filter(
          country => country.cca2 == cca2,
        )[0];
        this.handleSelectCountry(currentCountry);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/abaha.png')}
          style={{width: 100, height: 100}}
        />
        <View>
          <Text>Xin chào!</Text>
          <Text>Nhập số điện thoại để tiếp tục</Text>
        </View>
      </View>

      <View style={styles.phoneContainer}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="VN"
          withShadow
          containerStyle={styles.phoneBlock}
          textContainerStyle={styles.textInput}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.continueText}>Tiếp tục</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 16,
  },
  phoneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneBlock: {
    width: '75%',
    height: 60,
  },
  button: {
    marginTop: 30,
    width: '75%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  textInput: {
    paddingVertical: 0,
  },
});

export default Login;
