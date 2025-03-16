import { Tabs } from 'expo-router';
import { Search, User, House, AreaChart, MessageCircle } from 'lucide-react-native';


export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          borderRadius: 30,
          borderBottomWidth: 5,
          marginLeft: 10,
          marginRight: 10,
          height: 50, 
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#e0115f',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="chatScreen"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <MessageCircle color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <AreaChart  color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
