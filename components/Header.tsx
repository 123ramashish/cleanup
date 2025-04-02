// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { User, LayoutDashboard, Users, LogOut } from 'lucide-react-native';

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userImage, setUserImage] = useState('https://example.com/user-placeholder.jpg');

//   const handleLogin = () => {
//     // Simulate login process
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Simulate logout process
//     setIsLoggedIn(false);
//   };

//   return (
//     <View className="flex-row items-center justify-between bg-red-500 shadow-md p-4">
//       {/* Logo */}
//       <View className="flex-row items-center">
//         <Image 
//           source={{ uri: 'https://example.com/logo.png' }} 
//           className="w-10 h-10 mr-4" 
//           resizeMode="contain"
//         />
        
//         {/* Menu Items */}
//         {isLoggedIn && (
//           <View className="flex-row space-x-4">
//             <TouchableOpacity className="flex-row items-center">
//               <User className="text-gray-700 mr-1" size={20} />
//               <Text className="text-gray-700">Profile</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity className="flex-row items-center">
//               <LayoutDashboard className="text-gray-700 mr-1" size={20} />
//               <Text className="text-gray-700">Dashboard</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity className="flex-row items-center">
//               <Users className="text-gray-700 mr-1" size={20} />
//               <Text className="text-gray-700">Team</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>

//       {/* Login/User Section */}
//       <View>
//         {!isLoggedIn ? (
//           <TouchableOpacity 
//             onPress={handleLogin}
//             className="bg-blue-500 px-4 py-2 rounded-md"
//           >
//             <Text className="text-white font-bold">Login</Text>
//           </TouchableOpacity>
//         ) : (
//           <View className="flex-row items-center">
//             <Image 
//               source={{ uri: userImage }} 
//               className="w-10 h-10 rounded-full mr-2" 
//             />
//             <TouchableOpacity onPress={handleLogout}>
//               <LogOut className="text-red-500" size={24} />
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// export default Header;

// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7287b',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;