import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const Booking = () => {
  const [selectedTab, setSelectedTab] = useState('Requests');
  const [events, setEvents] = useState([
    { id: 1, name: 'Henry Shelby', event: 'Wedding event', time: 'Today at 09:00 am', price: '$200', category: 'Requests' },
    { id: 2, name: 'John Doe', event: 'Birthday party', time: 'Tomorrow at 02:00 pm', price: '$150', category: 'Ongoing' },
    { id: 3, name: 'Jane Smith', event: 'Corporate event', time: 'Next week at 10:00 am', price: '$300', category: 'Completed' },
    { id: 4, name: 'Alice Johnson', event: 'Anniversary', time: 'Today at 05:00 pm', price: '$250', category: 'Requests' },
    { id: 5, name: 'Bob Brown', event: 'Graduation', time: 'Next month at 01:00 pm', price: '$100', category: 'Ongoing' },
  ]);

  const filteredEvents = events.filter(event => event.category === selectedTab);

  const handleAccept = (id: number) => {
    console.log(`Accepted request with ID: ${id}`);
    // Update the category of the accepted event to 'Ongoing'
    setEvents(events.map(event => 
      event.id === id ? { ...event, category: 'Ongoing' } : event
    ));
  };

  const handleComplete = (id: number) => {
    console.log(`Completed event with ID: ${id}`);
    // Update the category of the completed event to 'Completed'
    setEvents(events.map(event => 
      event.id === id ? { ...event, category: 'Completed' } : event
    ));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#212121', textAlign: 'center', marginBottom: 24, letterSpacing: 0.5 }}>
          Orders
        </Text>

        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-around', 
          marginBottom: 24,
          backgroundColor: '#f0f0f0',
          borderRadius: 25,
          padding: 4
        }}>
          {['Requests', 'Ongoing', 'Completed'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelectedTab(tab)}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 25,
                backgroundColor: selectedTab === tab ? '#E91E63' : 'transparent',
                flex: 1,
                alignItems: 'center',
                marginHorizontal: 4,
                ...(selectedTab === tab ? {
                  shadowColor: '#E91E63',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 3,
                  elevation: 4,
                } : {})
              }}
            >
              <Text style={{ 
                fontWeight: '600', 
                fontSize: 14,
                color: selectedTab === tab ? '#fff' : '#757575'
              }}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <View
                key={event.id}
                style={{
                  padding: 20,
                  borderRadius: 16,
                  backgroundColor: '#fff',
                  marginBottom: 16,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.07,
                  shadowRadius: 4,
                  elevation: 3,
                  borderWidth: 1,
                  borderColor: '#E0E0E0',
                }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#212121', flex: 1 }}>{event.name}</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#E91E63' }}>{event.price}</Text>
                </View>
                <Text style={{ fontSize: 16, color: '#424242', marginBottom: 12 }}>{event.event}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ 
                    fontSize: 14, 
                    color: '#757575',
                    backgroundColor: '#f5f5f5',
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                    borderRadius: 12,
                    overflow: 'hidden'
                  }}>
                    {event.time}
                  </Text>
                  
                  {event.category === 'Requests' && (
                    <TouchableOpacity 
                      onPress={() => handleAccept(event.id)}
                      style={{
                        backgroundColor: '#E91E63',
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                        borderRadius: 8,
                      }}
                    >
                      <Text style={{ color: '#fff', fontWeight: '600' }}>Accept</Text>
                    </TouchableOpacity>
                  )}
                  
                  {event.category === 'Ongoing' && (
                    <TouchableOpacity 
                      onPress={() => handleComplete(event.id)}
                      style={{
                        backgroundColor: '#E91E63',
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                        borderRadius: 8,
                      }}
                    >
                      <Text style={{ color: '#fff', fontWeight: '600' }}>Complete</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))
          ) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
              <Text style={{ fontSize: 16, color: '#9e9e9e', textAlign: 'center' }}>
                No {selectedTab.toLowerCase()} found
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Booking;