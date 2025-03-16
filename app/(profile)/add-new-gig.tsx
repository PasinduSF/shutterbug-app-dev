import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const AddNewGig = () => {
  const router = useRouter();
  const [planName, setPlanName] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const addTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleBack = () => {
    router.back();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const removeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <TouchableOpacity 
        style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}
        onPress={handleBack}
      >
        <Icon name="arrow-back" size={30} color="#e0115f" />
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', flex: 1 }}>Add new Gig</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Gig Name / service Name</Text>
      <TextInput
        style={{ backgroundColor: '#F3F4F6', padding: 12, borderRadius: 8, marginBottom: 16, color: '#000' }}
        placeholder="Add Package Name"
        placeholderTextColor="#A9A9A9"
        value={planName}
        onChangeText={setPlanName}
      />

      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Tasks you cover in job (Not Mandatory)</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <TextInput
          style={{ flex: 1, backgroundColor: '#F3F4F6', padding: 12, borderRadius: 8, color: '#000' }}
          placeholder="Add task"
          placeholderTextColor="#A9A9A9"
          value={taskInput}
          onChangeText={setTaskInput}
        />
        <TouchableOpacity onPress={addTask} style={{ marginLeft: 10 }}>
          <Icon name="add-circle" size={40} color="#e0115f" />
        </TouchableOpacity>
      </View>

      {tasks.length > 0 && (
        <View style={{ marginBottom: 16, padding: 12, backgroundColor: '#F9FAFB', borderRadius: 8 }}>
          {tasks.map((task, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <Icon name="checkmark-circle" size={20} color="#e0115f" style={{ marginRight: 8 }} />
              <Text style={{ color: '#000', flex: 1 }}>{task}</Text>
              <TouchableOpacity onPress={() => removeTask(index)}>
                <Icon name="close-circle" size={20} color="#A9A9A9" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Service Description</Text>
      <TextInput
        style={{ backgroundColor: '#F3F4F6', padding: 12, borderRadius: 8, marginBottom: 16, color: '#000', height: 100, textAlignVertical: 'top' }}
        placeholder="Describe about your process"
        placeholderTextColor="#A9A9A9"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#000' }}>Gig Image</Text>
      <TouchableOpacity 
        style={{ 
          height: 200, 
          backgroundColor: '#F3F4F6', 
          borderRadius: 8, 
          marginBottom: 16, 
          justifyContent: 'center', 
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#E5E7EB',
          borderStyle: 'dashed'
        }}
        onPress={pickImage}
      >
        {image ? (
          <Image 
            source={{ uri: image }} 
            style={{ width: '100%', height: '100%', borderRadius: 8 }} 
            resizeMode="cover"
          />
        ) : (
          <View style={{ alignItems: 'center' }}>
            <Icon name="image-outline" size={50} color="#A9A9A9" />
            <Text style={{ color: '#A9A9A9', marginTop: 8 }}>Tap to upload a gig image</Text>
          </View>
        )}
      </TouchableOpacity>

      <Link href="/add-plans" asChild>
        <TouchableOpacity style={{ backgroundColor: '#e0115f', padding: 16, borderRadius: 30, alignItems: 'center', marginTop: 20, marginBottom: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Next</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

export default AddNewGig;