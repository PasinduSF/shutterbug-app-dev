import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    fullName: 'John Doe',
    mobile: '+94 71 234 5678',
    email: 'johndoe@example.com',
    street: '123 Main St',
    city: 'Colombo',
    district: 'Western Province',
  });

  const handleChange = (key: string, value: string) => {
    setProfile({ ...profile, [key]: value });
  };

  const handleSave = () => {
    console.log('Profile saved:', profile);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
      {/* Cover Photo */}
      <View style={{ height: 170, position: 'relative' }}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' }}
          style={{ width: '100%', height: '100%' }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: '#e0115f',
            borderRadius: 20,
            padding: 5,
          }}
        >
          <Ionicons name="camera" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Profile Image */}
      <View style={{ alignItems: 'center', marginTop: -60 }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
            style={{ width: 120, height: 120, borderRadius: 60, borderWidth: 4, borderColor: 'white' }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: '#e0115f',
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Ionicons name="camera" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Edit Form */}
      <View style={{ padding: 20 }}>
        {Object.entries(profile).map(([key, value]) => (
          <View key={key} style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 14, color: '#555', marginBottom: 5 }}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </Text>
            <TextInput
              value={value}
              onChangeText={(text) => handleChange(key, text)}
              style={{
                borderWidth: 1,
                borderColor: '#CCC',
                borderRadius: 10,
                padding: 12,
                fontSize: 16,
              }}
            />
          </View>
        ))}

        {/* Buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'white',
              padding: 15,
              borderRadius: 10,
              alignItems: 'center',
              marginRight: 10,
              borderColor: '#e0115f',
              borderWidth: 1,
            }}
          >
            <Text style={{ color: '#e0115f', fontSize: 16, fontWeight: 'bold' }}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: '#e0115f',
              padding: 15,
              borderRadius: 10,
              alignItems: 'center',
            }}
            onPress={handleSave}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;