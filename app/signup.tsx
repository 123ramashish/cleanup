import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform, Animated, Easing } from 'react-native';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  // Animation values for top-to-bottom effect
  const containerAnim = useRef(new Animated.Value(-500)).current; // Start above the screen
  const contentAnim = useRef(new Animated.Value(0)).current; // For staggered children

  useEffect(() => {
    // Main container slides down from top
    Animated.timing(containerAnim, {
      toValue: 0,
      duration: 800,
      easing: Easing.out(Easing.back(1.2)),
      useNativeDriver: true,
    }).start();
    
    // Content fade-in with slight delay
    Animated.timing(contentAnim, {
      toValue: 1,
      duration: 600,
      delay: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  // Staggered animation for children
  const getChildAnimation = (index) => {
    return {
      opacity: contentAnim,
      transform: [{
        translateY: contentAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [20 * index, 0] // Each child starts slightly lower
        })
      }]
    };
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Animated.View 
          className="p-8"
          style={{
            transform: [{ translateY: containerAnim }]
          }}
        >
          {/* Logo */}
          <Animated.View 
            className="items-center mb-8"
            style={getChildAnimation(0)}
          >
            {/* <Image
              source={require('./assets/logo.png')}
              className="w-32 h-32"
            /> */}
          </Animated.View>

          {/* Title */}
          <Animated.Text 
            className="text-3xl font-bold text-center mb-6 text-green-600"
            style={getChildAnimation(1)}
          >
            Create Your Account
          </Animated.Text>

          {/* Name Input */}
          <Animated.View 
            className="mb-4"
            style={getChildAnimation(2)}
          >
            <Text className="text-gray-700 mb-1">Full Name</Text>
            <TextInput
              className={`border rounded-lg p-3 mb-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="John Doe"
              value={formData.name}
              onChangeText={(text) => handleChange('name', text)}
            />
            {errors.name && (
              <Text className="text-red-500 text-sm mb-2">
                {errors.name}
              </Text>
            )}
          </Animated.View>

          {/* Email Input */}
          <Animated.View 
            className="mb-4"
            style={getChildAnimation(3)}
          >
            <Text className="text-gray-700 mb-1">Email</Text>
            <TextInput
              className={`border rounded-lg p-3 mb-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="example@email.com"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
            />
            {errors.email && (
              <Text className="text-red-500 text-sm mb-2">
                {errors.email}
              </Text>
            )}
          </Animated.View>

          {/* Password Input */}
          <Animated.View 
            className="mb-4"
            style={getChildAnimation(4)}
          >
            <Text className="text-gray-700 mb-1">Password</Text>
            <TextInput
              className={`border rounded-lg p-3 mb-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="••••••••"
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => handleChange('password', text)}
            />
            {errors.password && (
              <Text className="text-red-500 text-sm mb-2">
                {errors.password}
              </Text>
            )}
          </Animated.View>

          {/* Confirm Password Input */}
          <Animated.View 
            className="mb-4"
            style={getChildAnimation(5)}
          >
            <Text className="text-gray-700 mb-1">Confirm Password</Text>
            <TextInput
              className={`border rounded-lg p-3 mb-4 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="••••••••"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(text) => handleChange('confirmPassword', text)}
            />
            {errors.confirmPassword && (
              <Text className="text-red-500 text-sm mb-2">
                {errors.confirmPassword}
              </Text>
            )}
          </Animated.View>

          {/* Submit Button */}
          <Animated.View 
            className="mb-4"
            style={getChildAnimation(6)}
          >
            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-green-600 rounded-lg p-3 items-center"
            >
              <Text className="text-white font-bold text-lg">
                Sign Up
              </Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Login Link */}
          <Animated.View 
            className="flex-row justify-center mt-4"
            style={getChildAnimation(7)}
          >
            <Text className="text-gray-600">Already have an account? </Text>
            <TouchableOpacity>
              <Text className="text-green-600 font-bold">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupPage;