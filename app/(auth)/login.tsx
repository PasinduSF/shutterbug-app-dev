import React, { useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { Link, useRouter } from "expo-router";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Mail, Lock } from "lucide-react-native";
import { useAuth } from "@/contexts/authContext";
import { Formik } from "formik";
import * as Yup from "yup";
import { login } from "../api/authApi";
import { useExpoRouter } from "expo-router/build/global-state/router-store";
import { PATH_DASHBOARD } from "@/constants/paths";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useExpoRouter();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      console.log("Logging in with:", values);
      const response = await login({
        username: values.email,
        password: values.password,
      });

      if (response.data && response.data.token) {
        const user = {
          id: response.data.id,
          userType: response.data.userType,
          email: response.data.email,
        };
        await signIn(response.data.token, response.data.refreshToken, user);
      }
      router.push(PATH_DASHBOARD);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View className="flex-1 bg-white">
            <View className="h-[30%] relative">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
                }}
                className="w-full h-full"
              />
              <View className="absolute inset-0 bg-black/40" />
              <Image
                source={{
                  uri: "https://via.placeholder.com/200x80?text=ShutterBug",
                }}
                className="w-[200px] h-[80px] absolute bottom-5 self-center"
                resizeMode="contain"
              />
            </View>
            <View className="flex-1 px-6 pt-10 ">
              <Text className="text-[28px] font-bold text-[#1b1b1b] mb-2">
                Welcome Back!
              </Text>
              <Text className="text-base text-[#666] mb-8">
                Sign in to continue
              </Text>
              <View className="mb-6 gap-5">
                <View className="h-16">
                  <Input
                    placeholder="Email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    icon={<Mail size={20} color="#666" />}
                  />
                  {touched.email && errors.email && (
                    <Text className="text-[#e0115f] text-xs -mt-2">
                      {errors.email}
                    </Text>
                  )}
                </View>

                <View className="h-16">
                  <Input
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    secureTextEntry
                    icon={<Lock size={20} color="#666" />}
                  />
                  {touched.password && errors.password && (
                    <Text className="text-[#e0115f] text-xs -mt-2">
                      {errors.password}
                    </Text>
                  )}
                </View>

                <Link href="/(auth)/forgot-password" asChild>
                  <Text className="text-[#e0115f] text-right -mt-4 mb-6">
                    Forgot Password?
                  </Text>
                </Link>

                <Button
                  title="Sign In"
                  onPress={() => {
                    handleSubmit();
                  }}
                  className="mb-6 -mt-4"
                />

                <View className="flex-row items-center my-6  -mt-4">
                  <View className="flex-1 h-px bg-[#e5e5e5]" />
                  <Text className="mx-4 text-[#666]">OR</Text>
                  <View className="flex-1 h-px bg-[#e5e5e5]" />
                </View>

                <Button
                  title="Continue with Google"
                  variant="secondary"
                  className="mb-2  -mt-4"
                />
              </View>

              <View className="flex-row justify-center items-center  -mt-5">
                <Text className="text-[#666]">Don't have an account? </Text>
                <Link href="/(auth)/register" asChild>
                  <Text className="text-[#e0115f] font-bold">Sign Up</Text>
                </Link>
              </View>
            </View>
          </View>
        )}
      </Formik>
      {isLoading && (
        <View className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <ActivityIndicator size="large" color="#e0115f" />
        </View>
      )}
    </>
  );
}
