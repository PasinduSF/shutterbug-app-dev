import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Reviews from "../../components/reviews";
import Photos from "../../components/photos";
import { SafeAreaView } from "react-native-safe-area-context";

const GigView = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic");
  const router = useRouter();

  const plans = [
    {
      name: "Basic",
      hours: "3 Hours session",
      images: "50 Digital images",
      discount: "Events",
      price: "$1500",
    },
    {
      name: "Standard",
      hours: "6 Hours session",
      images: "100 Digital images",
      discount: "Events",
      price: "$2000",
    },
    {
      name: "Pro",
      hours: "6 Hours session",
      images: "100 Digital images",
      discount: "Events",
      price: "$2000",
    },
  ];

  const selectedPlanDetails = plans.find(plan => plan.name === selectedPlan);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 bg-gray-50">
        {/* Main Content */}
        <ScrollView className="flex-1 mb-16">
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-4 left-4 z-10"
          >
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>

          {/* Header Image */}
          <View>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
              }}
              className="w-full h-64"
              style={{ resizeMode: 'cover' }}
            />
          </View>

          {/* Profile Info */}
          <View className="items-center mt-4">
            <Text className="text-2xl font-bold mt-2">Lens Master Studio</Text>
            <Text className="text-lg text-gray-500">
              @Adam Murphy, Canada ⭐ 4.8
            </Text>
          </View>

          {/* My Plan Section */}
          <View className="mt-5 flex-row justify-between px-4">
            <Text className="text-xl font-bold">My Plans</Text>
            <Link href="/(profile)/all-plans" asChild>
            </Link>
          </View>

          {/* Plans Scroll Section */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-2"
          >
            {plans.map((plan, index) => (
              <TouchableOpacity
                key={index}
                className={`bg-white p-4 rounded-xl mx-3 w-64 shadow-lg ${selectedPlan === plan.name ? "border-2 border-red-500" : ""
                  }`}
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
                <Text className="text-xl font-bold mt-2 text-red-500">
                  {plan.price}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View className="border-b border-gray-200 my-3" />

          <View className="mt-5 px-4">
            <Text className="text-xl font-bold">About Me</Text>
            <Text className="text-lg text-gray-500 mt-2">
              Hi, I'm Adam Murphy, a professional photographer based in Canada. I specialize in capturing the most precious moments of your life with a creative and artistic touch. With years of experience and a passion for photography, I strive to deliver high-quality images that you will cherish forever.
            </Text>
          </View>

          <View className="border-b border-gray-200 my-5" />

          <Photos />

          {/* Reviews Section */}
          <Reviews />
        </ScrollView>

        {/* Fixed Footer */}
        <View className="absolute bottom-0 left-0 right-0 bg-white p-4 flex-row justify-around border-t border-gray-200">
          <TouchableOpacity className="bg-gray-200 p-3 rounded-full flex-row items-center justify-center w-40">
            <Feather name="send" size={16} color="black" style={{ marginRight: 5 }} />
            <Text className="text-red-500">Message</Text>
          </TouchableOpacity>

          <Link
            href={{
              pathname: "/(search)/request-order",
              params: {
                gigName: "Lens Master Studio",
                freelancerName: "Adam Murphy",
                planName: selectedPlanDetails?.name,
                price: selectedPlanDetails?.price,
                rating: "4.8"
              }
            }}
            asChild
          >
            <TouchableOpacity className="bg-red-500 p-3 rounded-full w-40">
              <Text className="text-white text-center">Continue</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GigView;