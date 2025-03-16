import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Mail } from 'lucide-react-native';

export default function ForgotPassword() {
  return (
    <View className="flex-1 bg-white px-6 pt-10">
      <Text className="text-[28px] font-bold text-[#1b1b1b] mb-2">Forgot Password</Text>
      <Text className="text-base text-[#666] mb-8">Enter your email to reset your password</Text>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            icon={<Mail size={20} color="#666" />}
          />
      <Button
        title="Reset Password"
        onPress={() => {}}
        className="mb-6"
      />
    </View>
  );
}