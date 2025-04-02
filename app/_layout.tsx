// layout file for the app directory
import '../global.css'
import { Stack } from 'expo-router/stack';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '@/components/Header';

export default function RootLayout() {
  // const navigation = useNavigation();
  // const currentRoute = navigation.getState()?.routes?.[navigation.getState()?.index ?? 0]?.name || 'unknown';

  return (
    <View style={{ flex: 1 }}>
      <Header title='Header'/>
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ headerShown: false, title:"Home" }} />
      <Stack.Screen name="signup" options={{ headerShown: false, title:"Signup" }} />
  </Stack>
  </View>
);
}


// drawer example
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Drawer } from 'expo-router/drawer';

// export default function Layout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer>
//         <Drawer.Screen
//           name="Home" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'Home',
//             title: 'overview',
//           }}
//         />
//         <Drawer.Screen
//           name="user/[id]" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'User',
//             title: 'overview',
//           }}
//         />
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }


// import { Stack } from 'expo-router/stack';

// export default function Layout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//     </Stack>
//   );
// }

