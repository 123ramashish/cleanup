import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawerContent(props: any) {
  const navigation = useNavigation();

  const menuItems = [
    { icon: 'sign-in', screen: 'login' },
    { icon: 'home', screen: 'index' },
    { icon: 'user', screen: 'user/[id]' },
    { icon: 'th-large', screen: '(tabs)' },
    { icon: 'lock', screen: '(auth)' },
  ];

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      {/* Left: Logo */}
      <View style={styles.logoContainer}>
        <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg' }} // update with your logo path
          style={styles.logo}
        />
      </View>

      {/* Right: Icon Buttons */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.screen as never)}
            style={styles.iconButton}
          >
            <FontAwesome name={item.icon as any} size={24} color="#555" />
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  logoContainer: {
    width: 80,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  menuContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  iconButton: {
    marginVertical: 15,
  },
});
