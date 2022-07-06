import React from 'react';
import {StyleSheet, View} from 'react-native';
import TabView from './TabView';

function Home() {
  return (
    <View style={styles.container}>
      <TabView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;
