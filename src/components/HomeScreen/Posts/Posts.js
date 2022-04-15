import React, {useState} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';

export const Posts = props => {
  return (
    <ScrollView style={StyleSheet.postsContainer}>
      <Text>Post something at here</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    paddingHorizontal: 16,
  },
});
