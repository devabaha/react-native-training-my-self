import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {navigationStrings} from '../../constants';
import {config} from '../../util/config';

const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('VN');
  const [callingCode, setCallingCode] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.content}>
            <Image
              source={require('../../assets/images/abaha.png')}
              style={styles.logo}
            />
            <View>
              <Text style={styles.title}>Xin chào!</Text>
              <Text style={styles.description}>
                Nhập số điện thoại để tiếp tục
              </Text>
            </View>
          </View>

          <View style={styles.phonePickerContainer}>
            <CountryPicker
              withFilter
              countryCode={countryCode}
              withAlphaFilter
              withCallingCode
              withCallingCodeButton
              containerButtonStyle={styles.phonePickerBlock}
              onSelect={country => {
                setCountryCode(country.cca2);
                setCallingCode(country.callingCode[0]);
              }}
            />

            <TextInput
              placeholder="8765 4321"
              style={styles.phoneInput}
              onChangeText={value => setPhoneNumber(value)}
              value={phoneNumber}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace(navigationStrings.FEED)}>
            <Text style={styles.textButton}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.policyBlock}>
        <TouchableOpacity style={styles.policyButton}>
          <Text style={styles.policyTitle}>Thoả thuận người dùng (EULA)</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.color.white,
  },
  content: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginVertical: 10,
  },
  description: {
    fontSize: 20,
    fontWeight: '200',
  },
  phonePickerContainer: {
    marginVertical: 36,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  phonePickerBlock: {
    borderRadius: 8,
    backgroundColor: config.color.gray,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  phoneCallingCode: {
    fontSize: 20,
  },
  phoneInput: {
    fontSize: 28,
    marginLeft: 12,
    fontWeight: '800',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    flex: 1,
    backgroundColor: config.color.gray,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 24,
  },
  policyBlock: {
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    bottom: 50,
  },
  policyButton: {},
  policyTitle: {
    fontSize: 18,
  },
});

export default Login;
