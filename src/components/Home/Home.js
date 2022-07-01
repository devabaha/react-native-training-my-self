import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

function Home({navigation}) {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        title="Back to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
}

export default Home;
