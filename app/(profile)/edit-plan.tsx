import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlanEditor = () => {
  const [planType, setPlanType] = useState('Basic plan');
  const [planDetails, setPlanDetails] = useState('');
  const [planPrice, setPlanPrice] = useState('1500$');

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <TouchableOpacity style={{ marginBottom: 20 }}>
        <Icon name="arrow-back" size={30} color="#e0115f" />
      </TouchableOpacity>

      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000', marginTop: 10 }}>Your plan type</Text>
      <TextInput
        style={{ backgroundColor: '#F3F4F6', padding: 12, borderRadius: 8, marginBottom: 16, color: '#000' }}
        value={planType}
        onChangeText={setPlanType}
      />

      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Your plan details</Text>
      <TextInput
        style={{ backgroundColor: '#F3F4F6', padding: 12, borderRadius: 8, marginBottom: 16, color: '#000', height: 100, textAlignVertical: 'top' }}
        placeholder="Type Here.."
        placeholderTextColor="#A9A9A9"
        maxLength={100}
        multiline
        value={planDetails}
        onChangeText={setPlanDetails}
      />
      <Text style={{ alignSelf: 'flex-end', color: '#A9A9A9', marginBottom: 16 }}>{planDetails.length}/100</Text>

      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Your plan price</Text>
      <TextInput
        style={{ backgroundColor: '#F3F4F6', padding: 12, borderRadius: 8, marginBottom: 16, color: '#000' }}
        value={planPrice}
        onChangeText={setPlanPrice}
      />

      <TouchableOpacity style={{ backgroundColor: '#e0115f', padding: 16, borderRadius: 30, alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PlanEditor;