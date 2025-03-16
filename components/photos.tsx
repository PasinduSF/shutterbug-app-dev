import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For the close icon

const Photos = () => {
  const photos = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">Photos</Text>
      <View className="flex-row flex-wrap justify-between">
        {photos.map((photo, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedImage(photo)}
            style={{
              width: index % 2 === 0 ? "48%" : "100%",
              marginBottom: 8,
            }}
          >
            <Image
              source={{ uri: photo }}
              style={{
                width: "100%",
                height: index % 2 === 0 ? 200 : 150,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal to display full image */}
      <Modal visible={!!selectedImage} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedImage(null)}
          >
            <Ionicons name="close" size={30} color="white" />
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={styles.fullImage}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>

      <TouchableOpacity className="mt-4">
        <Text className="text-red-500 text-center">View All</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  fullImage: {
    width: "100%",
    height: "100%",
  },
});

export default Photos;