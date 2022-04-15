import React, {useState} from 'react';

import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';

const Item = ({item, onPress, textColor, borderColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, borderColor]}>
    <Text style={{color: textColor}}>{item.title}</Text>
  </TouchableOpacity>
);

const items = [
  {id: 1, title: 'News'},
  {id: 2, title: 'Home'},
  {id: 3, title: 'Popular'},
];

export const HeaderNavigations = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const textColor = item.id === selectedId ? '#000' : '#ccc';
    const borderColor = item.id === selectedId ? '#f05123' : 'transparent';

    return (
      <Item
        key={item.id}
        item={item}
        onPress={() => {
          setSelectedId(item.id);
        }}
        textColor={textColor}
        borderColor={{borderColor}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 32,
    borderBottomWidth: 1,
    borderColor: 'transparent',
  },
});
