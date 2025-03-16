import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, Animated, Easing, StatusBar, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { AntDesign, Feather } from '@expo/vector-icons';
import Reviews from '../../components/reviews';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const [selectedPlan, setSelectedPlan] = useState('Basic');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  
  // Calculate sidebar width based on screen size (40% of screen width, min 250px, max 300px)
  const sidebarWidth = Math.max(250, Math.min(300, screenWidth * 0.75));
  const sidebarAnimation = useState(new Animated.Value(-sidebarWidth))[0];

  // Update dimensions when screen size changes
  useEffect(() => {
    const dimensionsHandler = ({ window }: { window: { width: number; height: number } }) => {
      setScreenWidth(window.width);
    };
    
    const subscription = Dimensions.addEventListener('change', dimensionsHandler);
    
    return () => subscription.remove();
  }, []);

  const toggleSidebar = () => {
    // Add backdrop animation
    if (isSidebarVisible) {
      Animated.timing(sidebarAnimation, {
        toValue: -sidebarWidth,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(sidebarAnimation, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
    setIsSidebarVisible(!isSidebarVisible);
  };

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

  const photos = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  ];

  const menuItems = [
    { icon: 'clock', label: 'History', link: '/(profile)/history' as const },
    { icon: 'alert-circle', label: 'Complain', link: '/(profile)/history' as const },
    { icon: 'share-2', label: 'Referral', link: '/(profile)/history' as const },
    { icon: 'info', label: 'About Us', link: '/(profile)/history' as const },
    { icon: 'settings', label: 'Settings', link: '/(profile)/history' as const },
    { icon: 'help-circle', label: 'Help and Support', link: '/(profile)/history' as const },
    { icon: 'log-out', label: 'Logout', link: '/(profile)/history' as const },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 bg-gray-50">
        {/* Backdrop when sidebar is open */}
        {isSidebarVisible && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 999,
            }}
            onPress={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            transform: [{ translateX: sidebarAnimation }],
            width: sidebarWidth,
            height: '100%',
            backgroundColor: 'white',
            zIndex: 1000,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 0 },
            shadowOpacity: 0.8,
            shadowRadius: 10,
          }}
        >
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-xl font-bold">Menu</Text>
            <TouchableOpacity onPress={toggleSidebar} className="p-2" accessibilityLabel="Close menu">
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View className="mb-6 items-center">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
              className="w-24 h-24 rounded-full border-4 border-white mb-4"
            />
            <Text className="text-xl font-bold">Adam Murphy</Text>
            <Text className="text-lg text-gray-500">adammurphy@email.com</Text>
          </View>

          <ScrollView>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <Link href={item.link} asChild>
                  <TouchableOpacity 
                    className="py-4 flex-row items-center" 
                    onPress={() => {
                      toggleSidebar();
                      // Navigation would happen via Link
                    }}
                  >
                    <Feather name={item.icon as keyof typeof Feather.glyphMap} size={20} color="black" style={{ marginRight: 15 }} />
                    <Text className="text-lg">{item.label}</Text>
                  </TouchableOpacity>
                </Link>
                {index < menuItems.length - 1 && <View className="border-b border-gray-200" />}
              </React.Fragment>
            ))}
          </ScrollView>
        </Animated.View>

        {/* Main Content */}
        <ScrollView className="flex-1 p-4">
          {/* Menu Icon */}
          <TouchableOpacity 
            onPress={toggleSidebar} 
            className="absolute top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md"
            accessibilityLabel="Open menu"
          >
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>

          {/* Header Image */}
          <View>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' }}
              className="w-full h-48 rounded-xl"
            />
          </View>

          {/* Profile Info */}
          <View className="items-center mt-[-50px]">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <Text className="text-2xl font-bold mt-2">Lens Master Studio</Text>
            <Text className="text-lg text-gray-500">@Adam Murphy, Canada ⭐ 4.8</Text>
          </View>

          {/* Edit Profile Button */}
          <Link href="/edit-profile" asChild>
            <TouchableOpacity className="mt-4 p-3 rounded-xl bg-gray-200 items-center self-center w-11/12">
              <Text className="text-lg font-semibold">Edit Profile</Text>
            </TouchableOpacity>
          </Link>

          {/* My Plan Section */}
          <View className="mt-5 flex-row justify-between px-4">
            <Text className="text-xl font-bold">My Plan</Text>
            <Link href="/(profile)/all-plans" asChild>
              <TouchableOpacity>
                <Text className="text-lg text-blue-600">See More</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Plans Scroll Section */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
            {plans.map((plan, index) => (
              <TouchableOpacity
                key={index}
                className={`bg-white p-4 rounded-xl mx-3 w-64 shadow-lg ${selectedPlan === plan.name ? 'border-2 border-blue-500' : ''}`}
                onPress={() => setSelectedPlan(plan.name)}
              >
                <View className="flex-row justify-between">
                  <Text className="text-lg font-bold mb-1">{plan.name} Plan</Text>
                  {selectedPlan === plan.name && (
                    <View className="bg-red-500 px-3 py-1 rounded-full">
                      <Text className="text-white font-semibold">Selected</Text>
                    </View>
                  )}
                </View>
                <Text className="text-sm text-gray-500">{plan.hours}</Text>
                <Text className="text-sm text-gray-500">{plan.images}</Text>
                <Text className="text-sm text-gray-500">{plan.discount}</Text>
                <Text className="text-xl font-bold mt-2 text-blue-600">{plan.price}</Text>
              </TouchableOpacity>
            ))}
            {/* Add New Plan Box */}
            <Link href="/(profile)/add-new-plan" asChild>
              <TouchableOpacity
                className="bg-gray-200 p-4 rounded-xl mx-3 w-56 justify-center items-center"
              >
                <AntDesign name="plus" size={30} color="gray" />
                <Text className="text-lg font-semibold text-gray-500 mt-2">Add New Plan</Text>
              </TouchableOpacity>
            </Link>
          </ScrollView>

          <Link href="/edit-plan" asChild>
            <TouchableOpacity className="mt-4 p-3 rounded-xl bg-gray-200 items-center self-center w-11/12">
              <Text className="text-lg font-semibold">Edit Plan</Text>
            </TouchableOpacity>
          </Link>

          {/* Horizontal Line */}
          <View className="border-b border-gray-200 my-5" />

          {/* Photos Section */}
          <View className="mt-5 px-4">
            <Text className="text-xl font-bold mb-2">Photos</Text>
            <View className="flex-row flex-wrap justify-between">
              {photos.map((photo, index) => (
                <Image
                  key={index}
                  source={{ uri: photo }}
                  className="w-48 h-30 rounded-xl mb-2"
                />
              ))}
            </View>

            {/* Add Photos Button */}
            <Link href="/(profile)/edit-profile" asChild>
              <TouchableOpacity className="mt-4 mb-8 p-3 rounded-xl bg-gray-200 items-center self-center w-11/12">
                <Text className="text-lg font-semibold">Add Photo</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Reviews Section */}
          <Reviews />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;