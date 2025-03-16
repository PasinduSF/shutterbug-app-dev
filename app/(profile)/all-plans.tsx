import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';

const AllPlans = () => {
  const plans = [
    {
      name: 'Basic',
      hours: '3 Hours session',
      images: '50 Digital images',
      discount: 'Events',
      price: '$1500',
    },
    {
      name: 'Standard',
      hours: '6 Hours session',
      images: '100 Digital images',
      discount: 'Events',
      price: '$2000',
    },
    {
      name: 'Pro',
      hours: '6 Hours session',
      images: '100 Digital images',
      discount: 'Events',
      price: '$2000',
    },
  ];

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#F9FAFB' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Icon name="arrow-back" size={30} color="#e0115f" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', justifyContent: 'center' }}>Edit Plans</Text>
      </View>

      {plans.map((plan, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 15,
            marginBottom: 15,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 5,
            borderWidth: 2,
            borderColor: '#e0115f',
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>{plan.name} Plan</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>{plan.hours}</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>{plan.images}</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>{plan.discount}</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, color: '#e0115f' }}>{plan.price}</Text>

          <TouchableOpacity
            style={{
              marginTop: 15,
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#e5e7eb',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edit Plan</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 15,
          marginBottom: 25,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 5,
          borderWidth: 2,
          borderColor: '#e0115f',
          alignItems: 'center',
        }}
      >
        <Link href="/add-new-plan" asChild>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 50,
              backgroundColor: '#e0115f',
              alignItems: 'center',
              width: 50,
              height: 50,
              justifyContent: 'center',
            }}
          >
            <Icon name="add" size={30} color="white" />
          </TouchableOpacity>
        </Link>
        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold', color: '#e0115f' }}>Add New Plan</Text>
      </View>
    </ScrollView>
  );
};

export default AllPlans;