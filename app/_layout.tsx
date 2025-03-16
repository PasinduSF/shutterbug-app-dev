import { Stack, useRouter, useSegments } from "expo-router";
import "./global.css";
import { AuthProvider, useAuth } from "@/contexts/authContext";
import { useEffect } from "react";

function AuthCheck({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    // If no session but user is not in auth group, redirect to onboarding
    if (!session && !inAuthGroup) {
      router.replace("/(auth)/onboarding");
    }
    // If session exists but user is in auth group, redirect to home
    else if (session && inAuthGroup) {
      router.replace("/");
    }
  }, [session, segments, router]);
  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthCheck>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthCheck>
    </AuthProvider>
  );
}
