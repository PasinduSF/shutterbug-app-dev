import React, { useState, useRef } from 'react';
import { View, ScrollView, Image, Dimensions, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width - 40;

const images = [
  { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', text: '30%', description: "Today's Special!", details: 'Get discount for every order, only valid for today' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', text: '25%', description: 'Weekend Sale!', details: 'Enjoy 25% off on all services this weekend' },
  { url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80', text: '20%', description: 'Flash Sale!', details: 'Hurry up! 20% off for the next 2 hours' },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event: { nativeEvent: { contentOffset: { x: number; }; }; }) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  return (
    <View style={{ alignItems: 'center', marginTop: 5, marginBottom: 25 }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <View key={index} style={{ width, alignItems: 'center', position: 'relative' }}>
            <Image
              source={{ uri: image.url }}
              style={{ width: imageWidth, height: 200, resizeMode: 'cover', borderRadius: 10 }}
            />
            {/* Pagination Indicator inside image bottom-left corner */}
            <View style={{
              position: 'absolute',
              bottom: 10,
              left: 30,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 10,
            }}>
              {images.map((_, idx) => (
                <View
                  key={idx}
                  style={{
                    width: activeIndex === idx ? 25 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: activeIndex === idx ? 'white' : '#ccc',
                    marginHorizontal: 4,
                  }}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
