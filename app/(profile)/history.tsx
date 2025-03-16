import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const History = () => {
  const [selectedTab, setSelectedTab] = useState('Upcoming');

  const tabs = ['Upcoming', 'Completed', 'Cancelled'];
  const events = [
    { id: 1, name: 'Henry Shelby', event: 'Wedding event', time: 'Today at 09:00 am' },
    { id: 2, name: 'Henry Shelby', event: 'Wedding event', time: 'Today at 09:00 am' },
    { id: 3, name: 'Henry Shelby', event: 'Wedding event', time: 'Today at 09:00 am' },
    { id: 4, name: 'Henry Shelby', event: 'Wedding event', time: 'Today at 09:00 am' },
    { id: 5, name: 'Henry Shelby', event: 'Wedding event', time: 'Today at 09:00 am' },
  ];

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <TouchableOpacity style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, color: '#000' }}>Back</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: 20 }}>
        History
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              backgroundColor: selectedTab === tab ? '#E91E63' : '#fff',
              borderWidth: 1,
              borderColor: '#E91E63',
            }}
          >
            <Text style={{ color: selectedTab === tab ? '#fff' : '#E91E63', fontWeight: 'bold' }}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView>
        {events.map((event) => (
          <View
            key={event.id}
            style={{
              padding: 20,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#E91E63',
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>{event.name}</Text>
            <Text style={{ fontSize: 16, color: '#888' }}>{event.event}</Text>
            <Text style={{ fontSize: 16, color: '#888' }}>{event.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default History;