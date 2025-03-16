import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, CheckCircle, Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

interface Notification {
  id: string;
  type: 'booking' | 'reminder' | 'general';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const NotificationItem = ({ notification, onPress }: { notification: Notification; onPress: (id: string) => void }) => {
  const { type, title, message, time, read } = notification;

  const getIcon = () => {
    switch (type) {
      case 'booking':
        return <Calendar size={24} color="#E0115F" />;
      case 'reminder':
        return <Clock size={24} color="#E0115F" />;
      default:
        return <Bell size={24} color="#E0115F" />;
    }
  };

  return (
    <Pressable 
      onPress={() => onPress(notification.id)} 
      className={`flex-row items-center p-4 border-b border-gray-200 ${read ? 'bg-white' : 'bg-red-50'}`}
    >
      <View className="mr-3 bg-gray-100 p-2 rounded-full">
        {getIcon()}
      </View>
      <View className="flex-1">
        <Text className="text-base font-medium text-gray-900">{title}</Text>
        <Text className="text-sm text-gray-600 mt-1">{message}</Text>
        <Text className="text-xs text-gray-500 mt-1">{time}</Text>
      </View>
      <ChevronRight size={20} color="#9CA3AF" />
    </Pressable>
  );
};

const Notifications = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'booking',
      title: 'New Booking Confirmed',
      message: 'Your booking #1234 has been confirmed',
      time: '10 minutes ago',
      read: false
    },
    {
      id: '2',
      type: 'booking',
      title: 'Booking Reminder',
      message: 'Your appointment is scheduled for tomorrow at 2:00 PM',
      time: '1 hour ago',
      read: false
    },
    {
      id: '3',
      type: 'reminder',
      title: 'Payment Due',
      message: 'Please complete payment for your recent booking',
      time: '2 hours ago',
      read: true
    },
    {
      id: '4',
      type: 'general',
      title: 'Special Offer Available',
      message: 'Check out our new weekend discount offers',
      time: '1 day ago',
      read: true
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? {...notification, read: true} : notification
    ));
  };

  const markAllRead = () => {
    setNotifications(notifications.map(notification => ({...notification, read: true})));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header with back button and centered title - removed border-b */}
      <View className="flex-row items-center justify-between px-4 py-3">
        {/* Left: Back button */}
        <Pressable 
          onPress={handleBackPress}
          className="p-1"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ArrowLeft size={24} color="#E0115F" />
        </Pressable>
        
        {/* Center: Title */}
        <View className="flex-1 items-center">
          <Text className="text-xl font-bold text-gray-900">Notifications</Text>
        </View>
        
        {/* Right: Mark all read button or empty view for balance */}
        <View style={{ width: 24 }}>
          {unreadCount > 0 && (
            <Pressable onPress={markAllRead} className="items-end">
              <Text className="text-red-600 text-sm font-medium">All</Text>
            </Pressable>
          )}
        </View>
      </View>

      {/* Badge for unread count */}
      {unreadCount > 0 && (
        <View className="items-center mt-2 mb-2">
          <View className="bg-red-500 rounded-full px-3 py-1">
            <Text className="text-xs font-medium text-white">{unreadCount} unread</Text>
          </View>
        </View>
      )}

      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NotificationItem notification={item} onPress={markAsRead} />
          )}
        />
      ) : (
        <View className="flex-1 items-center justify-center p-4">
          <Bell size={48} color="#E0115F" />
          <Text className="text-lg font-medium text-gray-900 mt-4">No notifications</Text>
          <Text className="text-gray-500 text-center mt-2">
            You don't have any notifications at the moment
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Notifications;