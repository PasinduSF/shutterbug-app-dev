import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AddNewPlanSave = () => {
  const navigation = useNavigation();
  const [plans, setPlans] = useState([
    { planType: '', planDetails: '', planPrice: '' },
  ]);

  type PlanField = 'planType' | 'planDetails' | 'planPrice';
  const MAX_PLANS = 3;

  const handlePlanChange = (index: number, field: PlanField, value: string) => {
    const newPlans = [...plans];
    newPlans[index][field] = value;
    setPlans(newPlans);
  };

  const addNewPlan = () => {
    if (plans.length < MAX_PLANS) {
      setPlans([...plans, { planType: '', planDetails: '', planPrice: '' }]);
    } else {
      Alert.alert("Limit Reached", "You can only add up to 3 plans.");
    }
  };

  const removePlan = (index: number) => {
    if (plans.length > 1) {
      const newPlans = [...plans];
      newPlans.splice(index, 1);
      setPlans(newPlans);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    // Add your save logic here
    Alert.alert("Success", "Plans saved successfully");
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <TouchableOpacity 
        style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}
        onPress={handleBack}
      >
        <Icon name="arrow-back" size={30} color="#e0115f" />
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', flex: 1 }}>Add new plans</Text>
      </TouchableOpacity>

      {plans.map((plan, index) => (
        <View key={index} style={{ marginBottom: 20, borderWidth: 1, borderColor: '#F3F4F6', borderRadius: 10, padding: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Plan {index + 1}</Text>
            {plans.length > 1 && (
              <TouchableOpacity onPress={() => removePlan(index)}>
                <Icon name="trash-outline" size={24} color="#e0115f" />
              </TouchableOpacity>
            )}
          </View>

          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Your plan type</Text>
          <TextInput
            style={{ backgroundColor: '#F3F4F6', padding: 12, borderRadius: 8, marginBottom: 16, color: '#000' }}
            placeholder="Plan type"
            placeholderTextColor="#A9A9A9"
            value={plan.planType}
            onChangeText={(value) => handlePlanChange(index, 'planType', value)}
          />

          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Your plan details</Text>
          <TextInput
            style={{ backgroundColor: '#F3F4F6', padding: 12, borderRadius: 8, marginBottom: 16, color: '#000', height: 100, textAlignVertical: 'top' }}
            placeholder="Type Here.."
            placeholderTextColor="#A9A9A9"
            multiline
            value={plan.planDetails}
            onChangeText={(value) => handlePlanChange(index, 'planDetails', value)}
          />

          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Your plan price</Text>
          <TextInput
            style={{ backgroundColor: '#F3F4F6', padding: 12, borderRadius: 8, marginBottom: 16, color: '#000' }}
            placeholder="Plan price"
            placeholderTextColor="#A9A9A9"
            value={plan.planPrice}
            onChangeText={(value) => handlePlanChange(index, 'planPrice', value)}
          />
        </View>
      ))}

      {plans.length < MAX_PLANS && (
        <TouchableOpacity 
          style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#f0f0f0', 
            padding: 12, 
            borderRadius: 10, 
            marginBottom: 20 
          }}
          onPress={addNewPlan}
        >
          <Icon name="add-circle" size={24} color="#e0115f" />
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#e0115f', marginLeft: 8 }}>Add Another Plan</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity 
        style={{ backgroundColor: '#e0115f', padding: 16, borderRadius: 30, alignItems: 'center', marginTop: 10, marginBottom: 30 }}
        onPress={handleSave}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddNewPlanSave;