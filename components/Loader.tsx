import React from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { Image } from 'react-native';
const { width, height } = Dimensions.get('window');

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  // Create 12 animated values for each spinner segment
  const animatedValues = [...Array(12)].map(() => new Animated.Value(0));

  // Start rotation animations
  React.useEffect(() => {
    const animations = animatedValues.map((animatedValue, index) => 
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration:2000,
          useNativeDriver: true,
        })
      )
    );

    // Start all animations
    animations.forEach(anim => anim.start());

    // Cleanup
    return () => {
      animations.forEach(anim => anim.stop());
    };
  }, []);

  return (
    <View 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
      }}
    >
      <View 
        style={{
          width: 80,
          height: 80,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* Spinner Segments */}
        {animatedValues.map((animatedValue, index) => {
          const rotation = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [`${index * 30}deg`, `${360 + index * 30}deg`]
          });

          return (
            <Animated.View
              key={index}
              style={{
                position: 'absolute',
                width:5,
                height: 20,
                gap:32,
                backgroundColor: 'white',
                borderRadius: 2,
                transform: [
                  { 
                    rotate: rotation 
                  },
                  { 
                    translateY: -60
                  }
                ]
              }}
            />
          );
        })}

        {/* Logo */}
        <Image
          source={require('../../assets/images/AmeyaInnovexLogo.png')}
          style={{
            height: 64,
            position: 'absolute',
            zIndex: 10
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Loader;