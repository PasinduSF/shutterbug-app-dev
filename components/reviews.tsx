import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export const reviews = [
  {
    id: 1,
    name: 'Rony Wills',
    location: 'Los Angeles',
    rating: 5.0,
    review: 'He have done amazing work here. Love it. good communication. relay nice work. I highly recommend him.',
    date: '5 days ago',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Berry Allen',
    location: 'Los Angeles',
    rating: 4.9,
    review: 'He have done amazing work here. Love it. good communication. relay nice work. I highly recommend him.',
    date: '5 days ago',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 3,
    name: 'Steven',
    location: 'Los Angeles',
    rating: 4.8,
    review: 'He have done amazing work here. Love it. good communication. relay nice work. I highly recommend him.',
    date: '5 days ago',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 4,
    name: 'Steven',
    location: 'Los Angeles',
    rating: 4.3,
    review: 'He have done amazing work here. Love it. good communication. relay nice work. I highly recommend him.',
    date: '5 days ago',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const Reviews = () => {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Feedbacks</Text>
        <Link href="/(profile)/all-reviews" asChild>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: '#e0115f' }}>See All</Text>
          </TouchableOpacity>
        </Link>
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
    </View>
  );
};

export default Reviews;