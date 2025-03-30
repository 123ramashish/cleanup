import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Basic login validation
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    console.log('Login attempted', { email });
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        contentContainerClassName="flex-grow justify-center px-6 py-8"
        keyboardShouldPersistTaps="handled"
      >
        <View className="mb-8">
          <Text className="text-4xl font-bold text-green-600 text-center mb-4">
            Welcome Back
          </Text>
          <Text className="text-center text-gray-600">
            Log in to continue
          </Text>
        </View>

        <View className="mb-4">
          <Text className="text-green-700 mb-2">Email Address</Text>
          <TextInput
            className="border border-green-500 rounded-lg px-4 py-3 bg-green-50 text-green-900"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View className="mb-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-green-700 mb-2">Password</Text>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text className="text-green-600 text-sm">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View className="relative">
            <TextInput
              className="border border-green-500 rounded-lg px-4 py-3 bg-green-50 text-green-900"
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity 
              className="absolute right-4 top-4"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text className="text-green-600 text-sm">
                {showPassword ? 'Hide' : 'Show'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          className="bg-green-600 rounded-lg py-4 mb-4 mt-4"
          onPress={handleLogin}
        >
          <Text className="text-white text-center text-lg font-bold">
            Log In
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-green-600 font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-6 flex-row items-center justify-center">
          <View className="flex-1 h-px bg-gray-300 mx-2"></View>
          <Text className="text-gray-500">Or continue with</Text>
          <View className="flex-1 h-px bg-gray-300 mx-2"></View>
        </View>

        <View className="flex-row justify-center mt-4 space-x-4">
          <TouchableOpacity 
            className="bg-green-100 p-3 rounded-full"
            onPress={() => console.log('Google login')}
          >
            <Text className="text-green-600">Google</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-green-100 p-3 rounded-full"
            onPress={() => console.log('Apple login')}
          >
            <Text className="text-green-600">Apple</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;