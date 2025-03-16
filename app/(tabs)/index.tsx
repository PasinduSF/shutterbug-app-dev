import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  GestureResponderEvent,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Search, Bell } from 'lucide-react-native';
import { Input } from '@/components/Input';
import { useRouter } from 'expo-router';
import ImageSlider from '@/components/ads';
import { categories, photographers, videographers } from '@/constants';



export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMode, setSelectedMode] = useState('Photography');
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const professionals =
    selectedMode === 'Photography' ? photographers : videographers;
  const filteredProfessionals =
    selectedCategory === 'All'
      ? professionals
      : professionals.filter(
          (professional) =>
            professional.category === selectedCategory
        );

  return (
    <SafeAreaView
      className="flex-1 bg-white"
    >
      {/* Fixed Top Section */}
      <View>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 mb-6">
          <Text className="text-3xl font-bold text-[#e0115f] mb-1">
            Hi, Nathan!
          </Text>
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-[#f8e3e0] justify-center items-center"
            onPress={() => router.push('/onboarding')}
          >
            <Bell color="#1b1b1b" size={24} />
          </TouchableOpacity>

          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-[#f8e3e0] justify-center items-center"
            onPress={() => router.push('/(notifications)/notifications')}
          >
            <Bell color="#1b1b1b" size={24} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="px-6 mb-6">
          <Input
            placeholder="Search professionals"
            icon={<Search size={20} color="#666" />}
          />
        </View>

        {/* Mode Toggle */}
        <View className="bg-[#e0115f] rounded-full p-2 mx-6 mb-3 mt-[-5]">
          <View className="flex-row justify-center">
            <TouchableOpacity
              className={`flex-1 items-center px-5 py-2 rounded-full mr-3 ${
                selectedMode === 'Photography'
                  ? 'bg-white'
                  : 'bg-transparent'
              }`}
              onPress={() => setSelectedMode('Photography')}
            >
              <Text
                className={`text-base ${
                  selectedMode === 'Photography'
                    ? 'font-bold text-black'
                    : 'font-normal text-[#1b1b1b]'
                }`}
              >
                Photography
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 items-center px-5 py-2 rounded-full ml-3 ${
                selectedMode === 'Videography'
                  ? 'bg-white'
                  : 'bg-transparent'
              }`}
              onPress={() => setSelectedMode('Videography')}
            >
              <Text
                className={`text-base ${
                  selectedMode === 'Videography'
                    ? 'font-bold text-black'
                    : 'font-normal text-[#1b1b1b]'
                }`}
              >
                Videography
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Image Slider */}
        <ImageSlider />

        {/* Category Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="pl-6 mb-6 max-h-10"
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              className={`px-5 py-2 rounded mr-3 ${
                category === selectedCategory ? 'bg-black' : 'bg-[#f8f8f8]'
              }`}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                className={`text-base ${
                  category === selectedCategory
                    ? 'font-bold text-white'
                    : 'font-normal text-[#1b1b1b]'
                }`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Scrollable Featured Professionals List */}
      <FlatList
        data={filteredProfessionals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row p-4 mx-6 mb-4 bg-white rounded-lg shadow">
            <Image
              source={{ uri: item.image }}
              className="w-20 h-20 rounded"
            />
            <View className="flex-1 ml-4">
              <Text className="text-lg font-bold text-[#1b1b1b] mb-1">
                {item.name}
              </Text>
              <Text className="text-base text-[#666] mb-2">
                {item.specialty}
              </Text>
              <View className="flex-row justify-between items-center">
                <Text className="text-base text-[#1b1b1b]">⭐ {item.rating}</Text>
                <Text className="text-base font-bold text-[#e0115f]">
                  {item.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          paddingBottom: insets.bottom,
          paddingTop: 16,
        }}
        className="flex-1"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
