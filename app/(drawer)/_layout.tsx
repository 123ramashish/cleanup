import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ drawerLabel: 'Home' }} />
      <Drawer.Screen name="user/[id]" options={{ drawerLabel: 'User' }} />
      <Drawer.Screen name="(tabs)" options={{ drawerLabel: 'Tabs Section' }} />
    </Drawer>
  );
}
