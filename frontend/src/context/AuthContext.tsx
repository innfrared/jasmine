'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { UserDto } from '../service/types';
import type { LoginPayload, RegisterPayload } from '../service/authService';
import {
  getSessionUser,
  loginSession,
  logoutSession,
  registerSession,
} from '../service/authSession';

interface AuthContextType {
  user: UserDto | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: UserDto) => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = async () => {
    try {
      const session = await getSessionUser();
      setUser(session.user ?? null);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUser();

    const handleLogout = () => {
      void logout();
    };

    window.addEventListener('auth:logout', handleLogout);
    return () => {
      window.removeEventListener('auth:logout', handleLogout);
    };
  }, []);

  const login = async (payload: LoginPayload) => {
    const result = await loginSession(payload);
    setUser(result.user ?? null);
  };

  const register = async (payload: RegisterPayload) => {
    const result = await registerSession(payload);
    setUser(result.user ?? null);
  };

  const logout = async () => {
    await logoutSession();
    setUser(null);
  };

  const updateUser = (updatedUser: UserDto) => {
    setUser(updatedUser);
  };

  const refreshUser = async () => {
    try {
      const session = await getSessionUser();
      setUser(session.user ?? null);
    } catch {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateUser,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
