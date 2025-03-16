// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

// const AddPaymentDetails = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [zipCode, setZipCode] = useState('');

//   const handleCardNumberChange = (text: string) => {
//     const cleaned = text.replace(/\D/g, '');
//     const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || '';
//     setCardNumber(formatted);
//   };

//   const handleExpiryDateChange = (text: string) => {
//     const cleaned = text.replace(/\D/g, '');
//     let formatted = cleaned;
//     if (cleaned.length > 2) {
//       formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
//     }
//     setExpiryDate(formatted);
//   };

//   const handleCvvChange = (text: string) => {
//     const cleaned = text.replace(/\D/g, '');
//     setCvv(cleaned.slice(0, 3));
//   };

//   const handleZipCodeChange = (text: string) => {
//     const cleaned = text.replace(/\D/g, '');
//     setZipCode(cleaned.slice(0, 5));
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, backgroundColor: '#fff' }}>
//         <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red', textAlign: 'center', marginBottom: 20 }}>
//           Add payments details
//         </Text>
        
//         <Image source={{ uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' }} style={{ width: '100%', height: 170, marginBottom: 20, borderRadius: 15 }} />
        
//         <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Name On Card</Text>
//         <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 15 }} placeholder="Name" />
        
//         <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Card Number</Text>
//         <TextInput
//           style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 15 }}
//           placeholder="XXXX XXXX XXXX XXXX"
//           keyboardType="numeric"
//           value={cardNumber}
//           onChangeText={handleCardNumberChange}
//           maxLength={19}
//         />
        
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <View style={{ width: '48%' }}>
//             <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Expire Date</Text>
//             <TextInput
//               style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 }}
//               placeholder="MM/YY"
//               keyboardType="numeric"
//               value={expiryDate}
//               onChangeText={handleExpiryDateChange}
//               maxLength={5}
//             />
//           </View>
//           <View style={{ width: '48%' }}>
//             <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>CVV</Text>
//             <TextInput
//               style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 }}
//               placeholder="CVV"
//               keyboardType="numeric"
//               secureTextEntry
//               value={cvv}
//               onChangeText={handleCvvChange}
//               maxLength={3}
//             />
//           </View>
//         </View>
        
//         <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000', marginTop: 15 }}>ZIP/Postal Code</Text>
//         <TextInput
//           style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 15 }}
//           placeholder="XXXXX"
//           keyboardType="numeric"
//           value={zipCode}
//           onChangeText={handleZipCodeChange}
//           maxLength={5}
//         />
        
//         <TouchableOpacity style={{ backgroundColor: '#e4005a', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10 }}>
//           <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Save</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default AddPaymentDetails;