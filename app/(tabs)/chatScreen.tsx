import { View, Text, FlatList, TouchableOpacity, Image, TextInput, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [chats, setChats] = useState([
    { id: '1', name: 'Smith Mathew', lastMessage: 'Hi, David. Hope you’re doing...', time: '29 Mar', unread: 2, image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { id: '2', name: 'Merry An.', lastMessage: 'Are you ready for today’s part...', time: '12 Mar', unread: 0, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
    { id: '3', name: 'John Walton', lastMessage: 'I’m sending you a parcel rece...', time: '08 Feb', unread: 1, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
    { id: '4', name: 'Monica Randawa', lastMessage: 'Hope you’re doing well today...', time: '02 Feb', unread: 3, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
    { id: '5', name: 'InnoXent Jay', lastMessage: 'Let’s get back to the work, You...', time: '25 Jan', unread: 0, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f' },
    { id: '6', name: 'Harry Samit', lastMessage: 'Listen David, I have a problem...', time: '18 Jan', unread: 4, image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
  ]);

  const filteredChats = chats.filter(chat => chat.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 bg-white px-4 py-2">
        {/* Header */}
        <Text className="text-xl font-bold text-gray-900 mb-4">Chat</Text>

        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-200 px-4 py-2 rounded-full mb-8 shadow-md">
          <TextInput
            placeholder="Search here..."
            className="flex-1 text-gray-700"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Stories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-0">
          <TouchableOpacity className="w-16 h-16 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center mx-2">
            <Text className="text-gray-500 text-lg">+</Text>
          </TouchableOpacity>
          {chats.slice(0, 5).map((chat) => (
            <Image key={chat.id} source={{ uri: chat.image }} className="w-16 h-16 rounded-full mx-2 border-2 border-red-600 shadow-lg" />
          ))}
        </ScrollView>

        {/* Chat List */}
        <FlatList
          data={filteredChats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity className="flex-row items-center bg-gray-100 p-6 rounded-xl mb-2 shadow-md">
              {/* Profile Image */}
              <Image source={{ uri: item.image }} className="w-12 h-12 rounded-full border border-gray-300" />

              {/* Chat Info */}
              <View className="ml-4 flex-1">
                <Text className="text-gray-900 font-semibold">{item.name}</Text>
                <Text className="text-gray-500 text-sm mt-1">{item.lastMessage}</Text>
              </View>

              {/* Time & Unread Messages */}
              <View className="items-end justify-between">
                <Text className="text-gray-400 text-xs">{item.time}</Text>
                {item.unread > 0 && (
                  <View className="w-6 h-6 rounded-full bg-red-500 items-center justify-center mt-2 shadow-md">
                    <Text className="text-white text-xs font-semibold">{item.unread}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;