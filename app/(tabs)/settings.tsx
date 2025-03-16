// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// const Settings = () => {
//   const options = [
//     { id: 1, icon: 'person-outline', label: 'Personal Information' },
//     { id: 2, icon: 'lock-closed-outline', label: 'Login & Security' },
//     { id: 3, icon: 'card-outline', label: 'Payments & Payouts' },
//     { id: 4, icon: 'accessibility-outline', label: 'Accessibility' },
//     { id: 5, icon: 'notifications-outline', label: 'Notification' },
//     { id: 6, icon: 'help-circle-outline', label: 'Help and Support' },
//     { id: 7, icon: 'information-circle-outline', label: 'About Us' },
//   ];

//   return (
//     <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
//       <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#E91E63', textAlign: 'center', marginBottom: 20 }}>
//         Settings
//       </Text>

//       {options.map((item) => (
//         <TouchableOpacity key={item.id} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20 }}>
//           <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={20} color="black" />
//           <Text style={{ flex: 1, fontSize: 16, marginLeft: 10 }}>{item.label}</Text>
//           <Ionicons name="chevron-forward" size={20} color="black" />
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// export default Settings;