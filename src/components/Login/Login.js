import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';

const Login = props => {
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
});

export default Login;
