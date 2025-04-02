import '../global.css'
import { Stack } from 'expo-router/stack';
import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import Header from '@/components/Header';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header title="Header" />
        <Slot />
      </View>
    </GestureHandlerRootView>
  );
}
