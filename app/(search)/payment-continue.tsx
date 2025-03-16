import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentConfirmation = () => {
  const { gigName, freelancerName, planName, price, rating } =
    useLocalSearchParams();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("payNow");

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
            Confirm and pay
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
              <TouchableOpacity>
                <Text style={{ fontSize: 14, color: "#E0115F" }}>Details</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 14, color: "gray", marginBottom: 8 }}>
              {price} including taxes USD
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                marginBottom: 8,
              }}
            />
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Free cancellation
            </Text>
            <Text style={{ fontSize: 14, color: "gray", marginBottom: 8 }}>
              Cancel before Apr 28 for a full refund.
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: "#E0115F" }}>
                Full policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Payment Options Section */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <TouchableOpacity
            style={{ paddingVertical: 8 }}
            onPress={() => setSelectedOption("payNow")}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Pay {price} now
              </Text>
              <Feather
                name={selectedOption === "payNow" ? "check-circle" : "circle"}
                size={24}
                color={selectedOption === "payNow" ? "#E0115F" : "gray"}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              marginVertical: 8,
            }}
          />

          <TouchableOpacity
            style={{ paddingVertical: 8 }}
            onPress={() => setSelectedOption("payPart")}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Pay part now, part later
                </Text>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  ${partNow} now, ${partLater} later. No extra fees.
                </Text>
                <Text style={{ fontSize: 12, color: "#E0115F" }}>
                  More info
                </Text>
              </View>
              <Feather
                name={selectedOption === "payPart" ? "check-circle" : "circle"}
                size={24}
                color={selectedOption === "payPart" ? "#E0115F" : "gray"}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              marginVertical: 8,
            }}
          />

          <TouchableOpacity
            style={{ paddingVertical: 8 }}
            onPress={() => setSelectedOption("payMonthly")}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Pay monthly with Klarna
                </Text>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  From ${monthlyPayment} per month for 12 months. Interest may
                  apply.
                </Text>
                <Text style={{ fontSize: 12, color: "#E0115F" }}>
                  More info
                </Text>
              </View>
              <Feather
                name={
                  selectedOption === "payMonthly" ? "check-circle" : "circle"
                }
                size={24}
                color={selectedOption === "payMonthly" ? "#E0115F" : "gray"}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Price Details Section */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 16 }}>
            Price details
          </Text>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 14, color: "gray" }}>{planName} plan</Text>
            <Text style={{ fontSize: 14, color: "gray", textAlign: "right" }}>
              ${priceNumber.toFixed(2)}
            </Text>
          </View>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 14, color: "gray" }}>Editing fee</Text>
            <Text style={{ fontSize: 14, color: "gray", textAlign: "right" }}>
              ${editingFee.toFixed(2)}
            </Text>
          </View>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 14, color: "gray" }}>Service fee</Text>
            <Text style={{ fontSize: 14, color: "gray", textAlign: "right" }}>
              ${serviceFee.toFixed(2)}
            </Text>
          </View>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 14, color: "gray" }}>Taxes</Text>
            <Text style={{ fontSize: 14, color: "gray", textAlign: "right" }}>
              ${taxes}
            </Text>
          </View>
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
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total USD</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              ${totalPrice}
            </Text>
          </View>

          <Link href="/price-breakdown" asChild>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, color: "red" }}>
                  Price Breakdown
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
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
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Confirm and Pay
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentConfirmation;
