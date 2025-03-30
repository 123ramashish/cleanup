import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signup attempted', { name, email });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        contentContainerClassName="flex-grow justify-center px-6 py-8"
        keyboardShouldPersistTaps="handled"
      >
        <View className="mb-8">
          <Text className="text-4xl font-bold text-green-600 text-center mb-4">
            Create Account
          </Text>
          <Text className="text-center text-gray-600">
            Sign up to get started
          </Text>
        </View>

        <View className="mb-4">
          <Text className="text-green-700 mb-2">Full Name</Text>
          <TextInput
            className="border border-green-500 rounded-lg px-4 py-3 bg-green-50 text-green-900"
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
          />
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
          <Text className="text-green-700 mb-2">Password</Text>
          <TextInput
            className="border border-green-500 rounded-lg px-4 py-3 bg-green-50 text-green-900"
            placeholder="Create a strong password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View className="mb-6">
          <Text className="text-green-700 mb-2">Confirm Password</Text>
          <TextInput
            className="border border-green-500 rounded-lg px-4 py-3 bg-green-50 text-green-900"
            placeholder="Confirm your password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity 
          className="bg-green-600 rounded-lg py-4 mb-4"
          onPress={handleSignup}
        >
          <Text className="text-white text-center text-lg font-bold">
            Sign Up
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center">
          <Text className="text-gray-600">Already have an account? </Text>
          <TouchableOpacity>
            <Text className="text-green-600 font-bold">Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupPage;