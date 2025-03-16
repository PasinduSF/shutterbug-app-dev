// import React, { useState } from "react";
// import { 
//   View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView 
// } from "react-native";
// import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
// import { AnimatePresence, MotiView } from "moti";

// interface Photographer {
//   id: number;
//   name: string;
//   owner: string;
//   rating: number;
//   reviews: string;
//   price: number;
//   category: string;
//   image: string;
// }

// const CATEGORIES = ["All", "Wedding", "Portrait", "Nature", "Event"];

// const SearchScreen: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [filteredData, setFilteredData] = useState<Photographer[]>(DATA);
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");

//   const handleSearch = (text: string) => {
//     setSearchQuery(text);
//     filterResults(text, selectedCategory);
//   };

//   const filterResults = (text: string, category: string) => {
//     let newData = DATA;
    
//     if (text) {
//       newData = newData.filter((item) =>
//         item.name.toLowerCase().includes(text.toLowerCase())
//       );
//     }

//     if (category !== "All") {
//       newData = newData.filter((item) => item.category === category);
//     }

//     setFilteredData(newData);
//   };

//   return (
//     <View className="flex-1 bg-gray-100 p-4">
//       {/* Search Bar */}
//       <View className="flex-row items-center bg-white p-3 rounded-full shadow-md mb-4">
//         <Ionicons name="arrow-back" size={24} color="black" />
//         <TextInput
//           className="flex-1 ml-3 text-base"
//           placeholder="Search photographers..."
//           value={searchQuery}
//           onChangeText={handleSearch}
//         />
//         <Feather name="search" size={20} color="gray" />
//       </View>
      
// {/* Categories */}
// <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft: 2, marginBottom: 25, maxHeight: 50 }}>
//   {CATEGORIES.map((category) => (
//     <TouchableOpacity
//       key={category}
//       onPress={() => {
//         setSelectedCategory(category);
//         filterResults(searchQuery, category);
//       }}
//       className={`px-6 py-3 mx-2 rounded-full border-2 transition-all duration-300 ease-in-out ${
//         selectedCategory === category ? "bg-red-500" : "bg-gray-200 border-transparent"
//       } shadow-md hover:shadow-lg`}
//       style={{
//         height: 50, // Set a fixed height
//       }}
//     >
//       <Text className={`${selectedCategory === category ? "text-white" : "text-black"} text-lg font-semibold text-center`}>
//         {category}
//       </Text>
//     </TouchableOpacity>
//   ))}
// </ScrollView>




// {/* Search Results */}
// <AnimatePresence>
//   {filteredData.length > 0 ? (
//     <FlatList
//       data={filteredData}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <MotiView 
//           from={{ opacity: 0, translateY: 10 }} 
//           animate={{ opacity: 1, translateY: 0 }}
//           transition={{ type: "timing", duration: 300 }}
//           className="bg-white p-7 rounded-xl shadow-md mb-3 flex-row"
//         >
//           <Image source={{ uri: item.image }} className="w-20 h-20 rounded-lg" />
//           <View className="flex-1 ml-4">
//             <Text className="text-lg font-bold">{item.name}</Text>
//             <Text className="text-gray-500">{item.owner}</Text>
//             <Text className="text-gray-500">⭐ {item.rating} | {item.reviews} Reviews</Text>
//             <Text className="text-lg font-bold text-red-500">${item.price.toFixed(2)}</Text>
//           </View>
//           <TouchableOpacity className="p-2">
//             {/* <AntDesign name="closecircleo" size={24} color="gray" /> */}
//           </TouchableOpacity>
//         </MotiView>
//       )}
//     />
//   ) : (
//     <View className="flex-1 justify-start items-center mt-4"> {/* Align to top */}
//       <Image source={{ uri: "https://via.placeholder.com/150" }} className="w-40 h-40" />
//       <Text className="text-gray-500 mt-4 text-lg">No photographers found</Text>
//     </View>
//   )}
// </AnimatePresence>


//     </View>
//   );
// };

// const DATA: Photographer[] = [
//   {
//     id: 1,
//     name: "CaptureSymphony",
//     owner: "Jenny Wilson",
//     rating: 4.5,
//     reviews: "5,289",
//     price: 2750,
//     category: "Wedding",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//   },
//   {
//     id: 2,
//     name: "VividShots Studio",
//     owner: "Jack Shakur",
//     rating: 4.9,
//     reviews: "8,000",
//     price: 2850,
//     category: "Nature",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//   },
//   {
//     id: 3,
//     name: "Dreams Photography",
//     owner: "Jeff Benson",
//     rating: 4.4,
//     reviews: "1,284",
//     price: 5000,
//     category: "Portrait",
//     image: "https://images.unsplash.com/photo-1544168190-79c17527004f",
//   },
//   {
//     id: 4,
//     name: "Pixel Photography",
//     owner: "Arjun Patel",
//     rating: 4.3,
//     reviews: "3,257",
//     price: 6500,
//     category: "Event",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//   },
// ];

// export default SearchScreen;
