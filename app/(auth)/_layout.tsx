import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import '../../global.css'
export default function AuthLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="Signup"
        options={{
          title: 'Signup',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="sign-in" color={color} />,
        }}
      />
    </Tabs>
  );
}
