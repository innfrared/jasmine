import { TokenPair } from '../service/types';
import { refresh } from '../service/authService';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const tokenManager = {
  setTokens: (tokens: TokenPair) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refresh);
  },

  getAccessToken: (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  getRefreshToken: (): string | null => {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  clearTokens: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },

  refreshAccessToken: async (): Promise<string | null> => {
    const refreshToken = tokenManager.getRefreshToken();
    if (!refreshToken) {
      return null;
    }

    try {
      const newTokens = await refresh(refreshToken);
      tokenManager.setTokens(newTokens);
      return newTokens.access;
    } catch (error) {
      tokenManager.clearTokens();
      return null;
    }
  },

  isAuthenticated: (): boolean => {
    return !!tokenManager.getAccessToken();
  },
};

