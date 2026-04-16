import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import type { UserDto } from '@/shared/contracts/api';
import { tokenManager } from '@/shared/auth/tokenManager';
import { getMe } from '../service/userService';
import {
  DEFAULT_LANGUAGE,
  isSupportedLanguage,
} from '@/shared/preferences/constants';

interface AuthContextType {
  user: UserDto | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => Promise<void>;
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

  const resolveLocaleRootPath = () => {
    if (typeof window === 'undefined') {
      return `/${DEFAULT_LANGUAGE}`;
    }

    const segments = window.location.pathname.split('/').filter(Boolean);
    const maybeLocale = segments[0];

    if (isSupportedLanguage(maybeLocale)) {
      return `/${maybeLocale}`;
    }

    return `/${DEFAULT_LANGUAGE}`;
  };

  const loadUser = async () => {
    try {
      const userData = await getMe();
      setUser(userData);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleLogout = () => {
      logout(true);
    };

    window.addEventListener('auth:logout', handleLogout);

    let cancelled = false;
    let frame2 = 0;
    const frame1 = window.requestAnimationFrame(() => {
      frame2 = window.requestAnimationFrame(() => {
        if (!cancelled) {
          void loadUser();
        }
      });
    });

    return () => {
      cancelled = true;
      window.removeEventListener('auth:logout', handleLogout);
      window.cancelAnimationFrame(frame1);
      window.cancelAnimationFrame(frame2);
    };
    // Mount-only session bootstrap; omit deps to avoid re-subscribing each render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async () => {
    setIsLoading(true);
    try {
      const userData = await getMe();
      setUser(userData);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (redirectToLogin = false) => {
    tokenManager.clearSession();
    setUser(null);

    if (redirectToLogin && typeof window !== 'undefined') {
      const targetPath = resolveLocaleRootPath();
      if (window.location.pathname !== targetPath) {
        window.location.replace(targetPath);
      }
    }
  };

  const updateUser = (updatedUser: UserDto) => {
    setUser(updatedUser);
  };

  const refreshUser = async () => {
    try {
      const userData = await getMe();
      setUser(userData);
    } catch {
      logout(true);
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
