import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function TabsLayout() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Tabs Layout</Text>
      <Link href='./Login'>Login</Link>
    </View>
  );
}