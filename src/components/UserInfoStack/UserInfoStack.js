import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserInfo} from './UserInfo';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function UserInfoStack() {
  return (
    <>
      <Text>UserInfo</Text>
    </>
  );
}

export default UserInfoStack;
