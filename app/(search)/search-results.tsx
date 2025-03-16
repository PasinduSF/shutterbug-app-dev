import React, { useState } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { searchResults as initialSearchResults } from '../../constants/index';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState(initialSearchResults);

  const handleRemoveItem = (id: number) => {
    setSearchResults(searchResults.filter(item => item.id !== id));
  };

  const renderItem = ({ item }: { item: { id: number; image: string; name: string; photographer: string; rating: number; reviews: number; price: string; } }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, backgroundColor: '#f9f9f9', padding: 10, borderRadius: 8 }}>
      <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 8, marginRight: 10 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: 'gray' }}>{item.photographer}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={{ fontSize: 14, marginLeft: 5, color: '#FFD700' }}>{item.rating}</Text>
          <Text style={{ fontSize: 14, marginLeft: 5, color: 'gray' }}>| {item.reviews} Reviews</Text>
        </View>
        <Text style={{ fontSize: 12, color: 'gray', marginTop: 5 }}>Starting from</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#e0115f' }}>{item.price}</Text>
      </View>
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => handleRemoveItem(item.id)}>
        <Ionicons name="close" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>Search Results</Text>
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchResults;