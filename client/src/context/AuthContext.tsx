import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserDto } from '../service/types';
import { tokenManager } from '@/shared/auth/tokenManager';
import { getMe } from '../service/userService';
import { refresh } from '../service/authService';

interface AuthContextType {
  user: UserDto | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (tokens: { access: string; refresh: string }) => Promise<void>;
  logout: () => void;
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

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = async () => {
    const accessToken = tokenManager.getAccessToken();
    if (!accessToken) {
      setIsLoading(false);
      return;
    }

    try {
      const userData = await getMe(accessToken);
      setUser(userData);
    } catch (error) {
      const newAccessToken = await tokenManager.refreshAccessToken();
      if (newAccessToken) {
        try {
          const userData = await getMe(newAccessToken);
          setUser(userData);
        } catch {
          tokenManager.clearTokens();
          setUser(null);
        }
      } else {
        tokenManager.clearTokens();
        setUser(null);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUser();

    const handleLogout = () => {
      logout();
    };

    window.addEventListener('auth:logout', handleLogout);
    return () => {
      window.removeEventListener('auth:logout', handleLogout);
    };
  }, []);

  const login = async (tokens: { access: string; refresh: string }) => {
    tokenManager.setTokens(tokens);
    try {
      const userData = await getMe(tokens.access);
      setUser(userData);
    } catch (error) {
      console.error('Failed to load user after login:', error);
    }
  };

  const logout = () => {
    tokenManager.clearTokens();
    setUser(null);
  };

  const updateUser = (updatedUser: UserDto) => {
    setUser(updatedUser);
  };

  const refreshUser = async () => {
    const accessToken = tokenManager.getAccessToken();
    if (!accessToken) return;

    try {
      const userData = await getMe(accessToken);
      setUser(userData);
    } catch (error) {
      const newAccessToken = await tokenManager.refreshAccessToken();
      if (newAccessToken) {
        try {
          const userData = await getMe(newAccessToken);
          setUser(userData);
        } catch {
          tokenManager.clearTokens();
          setUser(null);
        }
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        updateUser,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

