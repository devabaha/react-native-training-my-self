import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  SafeAreaView,
} from 'react-native';
import {navigationStrings} from '../../constants';
import {config} from '../../util/config';

const width = Dimensions.get('window').width;

const GetStarted = ({navigation}) => {
  const [images] = useState([
    {
      id: 0,
      title: 'The day you got away',
      url: 'https://images.unsplash.com/photo-1628105541664-ae6ee8d249ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    },
    {
      id: 1,
      title: 'Nothing gonna change my love for you',
      url: 'https://images.unsplash.com/photo-1630347619811-852e0eb83dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    },
    {
      id: 2,
      title: 'The day you got away',
      url: 'https://images.unsplash.com/photo-1616578492900-ea5a8fc6c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    },
    {
      id: 3,
      title: 'Nothing gonna change my love for you',
      url: 'https://images.unsplash.com/photo-1559603407-fa21f00a0afe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    },
  ]);

  const [animatedScrollXValue] = useState(new Animated.Value(0));
  const [animatedOpacityValue] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const renderItem = useCallback(({item}) => {
    return (
      <View style={styles.slideWrapper}>
        <Image source={{uri: item.url}} style={styles.image} />
      </View>
    );
  }, []);

  const onLoadingText = useCallback(() => {
    Animated.timing(animatedOpacityValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderPagination = useCallback(() => {
    return (
      <View style={styles.paginationWrapper}>
        {images.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          return (
            <Animated.View
              key={i}
              style={[
                styles.dotPagination,
                {
                  transform: [
                    {
                      scale: animatedScrollXValue.interpolate({
                        inputRange,
                        outputRange: [1, 1.5, 1],
                        extrapolate: 'clamp',
                      }),
                    },
                    {
                      scaleX: animatedScrollXValue.interpolate({
                        inputRange,
                        outputRange: [1, 1.5, 1],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
                {
                  opacity: animatedScrollXValue.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: 'clamp',
                  }),
                },
              ]}></Animated.View>
          );
        })}
      </View>
    );
  }, []);

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length >= 1) {
      if (viewableItems[0].isViewable) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.slideBlock}>
        <Animated.FlatList
          horizontal
          data={images}
          pagingEnabled
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewableItemsChanged}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: animatedScrollXValue},
                },
              },
            ],
            {
              listener: event => {
                const offsetScrollX = event.nativeEvent.contentOffset.x;
              },
              useNativeDriver: true,
            },
          )}
        />
      </View>

      <View style={styles.descriptionBlock}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {images.map((item, i) => {
            return currentIndex === i ? (
              <Animated.Text
                key={item.id}
                style={[
                  styles.descriptionText,
                  {opacity: animatedOpacityValue},
                ]}
                onTextLayout={onLoadingText}>
                {item.title}
              </Animated.Text>
            ) : null;
          })}
        </View>

        <SafeAreaView style={styles.buttonBlock}>
          <View>{renderPagination()}</View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.buttonBackground}
            onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideWrapper: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  paginationWrapper: {
    flexDirection: 'row',
  },
  dotPagination: {
    width: 10,
    height: 3,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: config.color.primary,
    shadowColor: config.color.black,
    shadowOffset: {
      width: 0,
      height: 2.25,
    },
    shadowOpacity: 0.161,
    shadowRadius: 3,

    elevation: 5,
  },
  descriptionBlock: {
    position: 'absolute',
    backgroundColor: config.color.white,
    bottom: 0,
    height: '40%',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
  },
  descriptionText: {
    textAlign: 'center',
    color: config.color.primary,
    fontSize: 22,
    fontWeight: '700',
  },
  buttonBlock: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  buttonBackground: {
    backgroundColor: config.color.primary,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: config.color.black,
    shadowOffset: {
      width: 0,
      height: 2.25,
    },
    shadowOpacity: 0.161,
    shadowRadius: 3,

    elevation: 5,
  },
  buttonText: {
    color: config.color.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GetStarted;
