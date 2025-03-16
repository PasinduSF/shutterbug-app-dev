import { Text, View, TouchableOpacity, Image, ScrollView, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentConfirmation = () => {
  const { gigName, freelancerName, planName, price, rating } =
    useLocalSearchParams();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("payNow");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Convert price to a number for calculations
  const priceNumber = parseFloat(
    (Array.isArray(price) ? price[0] : price).replace("$", "")
  );

  // Calculate divided prices
  const partNow = (priceNumber * 0.2).toFixed(2); // 20% now
  const partLater = (priceNumber * 0.8).toFixed(2); // 80% later
  const monthlyPayment = (priceNumber / 12).toFixed(2); // Divided into 12 months

  // Freelance-specific price details
  const sessionHours = 3; // Example: 3-hour session
  const editingFee = 0; // Set to 0 for now
  const serviceFee = 0; // Set to 0 for now
  const taxes = (priceNumber * 0.1).toFixed(2); // Tax is 10% of the price

  const totalPrice = (
    priceNumber +
    parseFloat(editingFee.toString()) +
    parseFloat(serviceFee.toString()) +
    parseFloat(taxes)
  ).toFixed(2);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Request Order
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            }}
            style={{
              width: "100%",
              height: 150,
              borderRadius: 8,
              marginBottom: 16,
            }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
              {gigName}
            </Text>
            <Text style={{ fontSize: 14, color: "gray", marginBottom: 16 }}>
              ⭐ {rating} (11) {freelancerName}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                marginBottom: 8,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Plan details
              </Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={{ fontSize: 14, color: "#E0115F" }}>Change</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 14, color: "gray", marginBottom: 8 }}>
              {planName}
            </Text>
            <Text style={{ fontSize: 14, color: "gray", marginBottom: 8 }}>
              {price}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                marginBottom: 8,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Total price
              </Text>
            </View>
            <Text style={{ fontSize: 14, color: "gray", marginBottom: 8 }}>
              {price} including taxes USD
            </Text>
          </View>
        </View>

      </ScrollView>

      {/* Fixed Footer */}
      <View
        style={{
          backgroundColor: "white",
          padding: 16,
          borderTopWidth: 1,
          borderColor: "#ddd",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E0115F",
            padding: 16,
            borderRadius: 8,
            alignItems: "center",
          }}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Request Order
          </Text>
        </TouchableOpacity>
      </View>

      {/* Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Feather name="check-circle" size={50} color="green" style={styles.modalIcon} />
            <Text style={styles.modalTitle}>Order Requested Successfully!</Text>
            <Text style={styles.modalText}>
              Your order has been successfully requested. You will receive a confirmation shortly.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
  },
  modalIcon: {
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#E0115F",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PaymentConfirmation;