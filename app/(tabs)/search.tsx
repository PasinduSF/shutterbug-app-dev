import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, FlatList, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import Calendar from 'react-native-calendars/src/calendar';
import { Ionicons } from '@expo/vector-icons';

const timeSlots = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
];

const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

const Search = () => {
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [yearModalVisible, setYearModalVisible] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: 'bold', flex: 1, textAlign: 'center' }}>Filter</Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>City</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <RNPickerSelect
                onValueChange={(value) => setCity(value)}
                items={[
                  { label: 'New York', value: 'new_york' },
                  { label: 'Los Angeles', value: 'los_angeles' },
                  { label: 'Chicago', value: 'chicago' },
                ]}
                style={{
                  inputIOS: {
                    backgroundColor: '#F3F4F6',
                    padding: 10,
                    borderRadius: 5,
                    color: '#000',
                  },
                  inputAndroid: {
                    backgroundColor: '#F3F4F6',
                    padding: 12,
                    borderRadius: 8,
                    color: '#000',
                  },
                  iconContainer: {
                    top: 10,
                    right: 12,
                  },
                }}
                placeholder={{ label: 'Select City', value: null }}
              />
            </View>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Ionicons name="location-outline" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Category</Text>
          <RNPickerSelect
            onValueChange={(value) => setCategory(value)}
            items={[
              { label: 'Photography', value: 'photography' },
              { label: 'Videography', value: 'videography' },
              { label: 'Editing', value: 'editing' },
            ]}
            style={{
              inputIOS: {
                backgroundColor: '#F3F4F6',
                padding: 12,
                borderRadius: 8,
                color: '#000',
              },
              inputAndroid: {
                backgroundColor: '#F3F4F6',
                padding: 12,
                borderRadius: 8,
                color: '#000',
              },
              iconContainer: {
                top: 10,
                right: 12,
              },
            }}
            placeholder={{ label: 'Select Category', value: null }}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Booking Date</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F3F4F6', padding: 12, borderRadius: 8 }}
            onPress={() => setYearModalVisible(true)}
          >
            <Text style={{ color: '#000' }}>{selectedDate || 'Select Date'}</Text>
            <Ionicons name="calendar-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <Calendar
          onDayPress={(day: { dateString: React.SetStateAction<string>; }) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#e0115f' },
          }}
          theme={{
            selectedDayBackgroundColor: '#e0115f',
            todayTextColor: '#e0115f',
            arrowColor: '#e0115f',
          }}
        />

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Time Slots</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {timeSlots.map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: '48%',
                  padding: 12,
                  backgroundColor: selectedTimeSlot === slot ? '#e0115f' : '#F3F4F6',
                  borderRadius: 8,
                  marginBottom: 10,
                }}
                onPress={() => setSelectedTimeSlot(slot)}
              >
                <Text style={{ color: selectedTimeSlot === slot ? '#fff' : '#000' }}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Link href="/search-results" asChild>
          <TouchableOpacity style={{ marginTop: 20, padding: 15, backgroundColor: '#e0115f', borderRadius: 8, alignItems: 'center', marginBottom: 30 }}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Search</Text>
          </TouchableOpacity>
        </Link>

        <Modal visible={yearModalVisible} transparent={true} animationType="slide">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ width: 300, backgroundColor: '#fff', borderRadius: 8, padding: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Select Year</Text>
              <FlatList
                data={years}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}
                    onPress={() => {
                      setSelectedYear(item);
                      setYearModalVisible(false);
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>

        <Link href="/gig-view" asChild>
          <TouchableOpacity className="mt-4 p-3 rounded-xl bg-gray-200 items-center self-center w-11/12 mb-20">
            <Text className="text-lg font-semibold">Gig</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/add-new-gig" asChild>
          <TouchableOpacity className="mt-4 p-3 rounded-xl bg-gray-200 items-center self-center w-11/12 mb-20">
            <Text className="text-lg font-semibold">Create Gig</Text>
          </TouchableOpacity>
        </Link>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;