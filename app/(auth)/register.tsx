import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Mail, Lock, User, Camera } from 'lucide-react-native';

export default function Register() {
  const [userType, setUserType] = useState<'client' | 'photographer'>('client');
  
  return (
    <ScrollView className="flex-1 bg-white" contentContainerClassName="p-6">
      <View className="mb-8">
        <Text className="text-[28px] font-bold text-[#1b1b1b] mb-2">Create Account</Text>
        <Text className="text-base text-[#666]">Join the ShutterBug community</Text>
      </View>
      
      <View className="mb-8">
        <Button
          title="I'm looking for a photographer"
          variant={userType === 'client' ? 'primary' : 'secondary'}
          onPress={() => setUserType('client')}
          className="mb-3"
        />
        <Button
          title="I'm a photographer"
          variant={userType === 'photographer' ? 'primary' : 'secondary'}
          onPress={() => setUserType('photographer')}
          className="mb-3"
        />
      </View>
      
      <View className="mb-6">
        <Input
          placeholder="Full Name"
          icon={<User size={20} color="#666" />}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          icon={<Mail size={20} color="#666" />}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          icon={<Lock size={20} color="#666" />}
        />
        {userType === 'photographer' && (
          <>
            <Input
              placeholder="Photography Style"
              icon={<Camera size={20} color="#666" />}
            />
            <Input
              placeholder="Years of Experience"
              keyboardType="numeric"
              icon={<User size={20} color="#666" />}
            />
          </>
        )}
        
        <Button
          title="Create Account"
          onPress={() => {}}
          className="mb-6"
        />
        
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-[#e5e5e5]" />
          <Text className="mx-4 text-[#666]">OR</Text>
          <View className="flex-1 h-px bg-[#e5e5e5]" />
        </View>
        
        <Button
          title="Sign up with Google"
          variant="secondary"
          className="mb-6"
        />
      </View>
      
      <View className="flex-row justify-center items-center">
        <Text className="text-[#666]">Already have an account? </Text>
        <Link href="/(auth)/login" asChild>
          <Text className="text-[#e0115f] font-bold">Sign In</Text>
        </Link>
      </View>
    </ScrollView>
  );
}