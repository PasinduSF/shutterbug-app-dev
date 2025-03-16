import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { storage } from "@/utils/storage";
import axiosInstance, { setAuthToken } from "@/app/api/axiosinstance";

export interface User {
  id: string;
  userType: string;
  email?: string;
}

export interface Session {
  token: string;
  refreshToken?: string;
  user: User | null;
}

interface AuthContextType {
  session: Session | null;
  signIn: (token: string, refreshToken: string, user: User) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (user: User) => Promise<void>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  session: null,
  signIn: async () => {},
  signOut: async () => {},
  updateUser: async () => {},
});

// Define the refresh token function
const refreshTokenApi = async (data: { refresh_token: string }) => {
  return await axiosInstance.post("/auth/refresh", data);
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);

  // Load session from AsyncStorage on app start
  useEffect(() => {
    const loadSession = async () => {
      try {
        const savedSession = await storage.getItem("session");
        if (savedSession) {
          const parsedSession = JSON.parse(savedSession);
          setSession(parsedSession);
          setAuthToken(parsedSession.token);
        }
      } catch (error) {
        console.error("Error loading session:", error);
      }
    };
    loadSession();
  }, []);

  // Axios interceptor for handling token expiration
  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (!error.response) {
          Alert.alert("Network error", "Please check your connection.");
          return Promise.reject(error);
        }

        const isUnauthorized = error.response.status === 401;
        if (isUnauthorized && session?.refreshToken) {
          try {
            const response = await refreshTokenApi({
              refresh_token: session.refreshToken,
            });
            const newToken = response.data.access_token;

            if (newToken) {
              const updatedSession = { ...session, token: newToken };
              setSession(updatedSession);
              await storage.setItem("session", JSON.stringify(updatedSession));

              error.config.headers["Authorization"] = `Bearer ${newToken}`;
              return axiosInstance(error.config);
            } else {
              Alert.alert("Session expired", "Please log in again.");
              await signOut();
            }
          } catch (refreshError) {
            Alert.alert("Session expired", "Please log in again.");
            await signOut();
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [session]);

  // Update axios auth header when session changes
  useEffect(() => {
    if (session?.token) {
      setAuthToken(session.token);
    } else {
      setAuthToken(null);
    }
  }, [session]);

  const signIn = async (token: string, refreshToken: string, user: User) => {
    try {
      const newSession: Session = { token, refreshToken, user };
      setSession(newSession);
      await storage.setItem("session", JSON.stringify(newSession));
      setAuthToken(token);
    } catch (error) {
      console.error("Error saving session:", error);
    }
  };

  const updateUser = async (user: User) => {
    if (session) {
      try {
        const updatedSession = { ...session, user };
        setSession(updatedSession);
        await storage.setItem("session", JSON.stringify(updatedSession));
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };

  const signOut = async () => {
    try {
      setSession(null);
      await storage.removeItem("session");
      setAuthToken(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ session, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use authentication context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
