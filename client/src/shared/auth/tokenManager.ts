import type { TokenPair } from '../../service/types';
import { refresh } from '../../service/authService';
import {
  ACCESS_TOKEN_COOKIE_KEY,
  REFRESH_TOKEN_COOKIE_KEY,
} from '../preferences/constants';
import {
  clearCookieValue,
  setCookieValue,
} from '../preferences/cookies';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const TOKEN_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export const tokenManager = {
  setTokens: (tokens: TokenPair) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refresh);
    setCookieValue(ACCESS_TOKEN_COOKIE_KEY, tokens.access, {
      maxAge: TOKEN_COOKIE_MAX_AGE,
    });
    setCookieValue(REFRESH_TOKEN_COOKIE_KEY, tokens.refresh, {
      maxAge: TOKEN_COOKIE_MAX_AGE,
    });
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
    clearCookieValue(ACCESS_TOKEN_COOKIE_KEY);
    clearCookieValue(REFRESH_TOKEN_COOKIE_KEY);
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
