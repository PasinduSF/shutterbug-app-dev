import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { reviews } from '../../components/reviews'; // Adjust the import path as needed

const AllReviews = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Ionicons name="arrow-back" size={30} color="#e0115f" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: 'bold', flex: 1, textAlign: 'center' }}>All Reviews</Text>
        <View style={{ width: 40 }} /> {/* Placeholder to balance the back button */}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <AntDesign name="star" size={24} color="#FFD700" />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>4.8</Text>
        <Text style={{ fontSize: 16, color: '#888', marginLeft: 5 }}>| 5,447 Reviews</Text>
      </View>
      {reviews.map((review) => (
        <View key={review.id} style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Image source={{ uri: review.avatar }} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{review.name}</Text>
                <Text style={{ fontSize: 16, color: '#888' }}>{review.location}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="star" size={24} color="#FFD700" />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>{review.rating.toFixed(1)}</Text>
              </View>
            </View>
            <Text style={{ fontSize: 16, color: '#888', marginTop: 5 }}>{review.review}</Text>
            <Text style={{ fontSize: 14, color: '#888', marginTop: 5 }}>{review.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default AllReviews;