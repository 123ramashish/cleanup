import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { AlertTriangle, Home, Frown } from 'lucide-react';

const NotFoundScreen = () => {
  // Create animated values
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Bounce animation
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(bounceAnim, {
            toValue: 1.1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true
          }),
          Animated.timing(bounceAnim, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true
          })
        ])
      )
    ]).start();

    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();

    // Rotate animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();
  }, []);

  // Interpolate animations
  const bounceScale = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1]
  });

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <Animated.View 
        style={{
          transform: [
            { scale: bounceScale },
            { rotate: rotateInterpolate }
          ],
          opacity: fadeAnim
        }}
        className="mb-8 bg-green-100 p-6 rounded-full items-center justify-center"
      >
        <AlertTriangle color="#16a34a" size={100} />
        <Text className="text-6xl font-bold text-green-600 absolute">
          404
        </Text>
      </Animated.View>

      <View className="mb-6 items-center">
        <View className="flex-row items-center mb-4">
          <Frown color="#16a34a" size={32} />
          <Text className="text-3xl font-bold text-green-700 ml-2">
            Oops! Page Not Found
          </Text>
        </View>
        <Text className="text-gray-600 text-center mb-6">
          The page you are looking for might have been removed 🕵️‍♀️
          or is temporarily unavailable 🚧
        </Text>
      </View>

      <TouchableOpacity 
        className="bg-green-600 px-6 py-3 rounded-lg flex-row items-center"
        onPress={() => console.log('Navigate to Home')}
      >
        <Home color="white" size={24} />
        <Text className="text-white font-bold text-lg ml-2 mr-2">
          Go to Home
        </Text>
        <Animated.View 
          style={{
            transform: [{ rotate: rotateInterpolate }]
          }}
        >
          <Text className="text-white text-lg">🏠</Text>
        </Animated.View>
      </TouchableOpacity>

      <View className="absolute bottom-10 w-full items-center">
        <View className="h-1 w-20 bg-green-300 rounded-full"></View>
      </View>

      <View className="absolute bottom-4 flex-row">
        <Text className="text-gray-500 text-sm">
          Feeling lost? 🧭 We're here to help! 🤝
        </Text>
      </View>
    </View>
  );
};

export default NotFoundScreen;