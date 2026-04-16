import {
  ACCESS_TOKEN_COOKIE_KEY,
  REFRESH_TOKEN_COOKIE_KEY,
} from '../preferences/constants';
import { clearCookieValue } from '../preferences/cookies';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const tokenManager = {
  clearSession: () => {
    // Cleanup legacy client-side token artifacts from pre-HttpOnly auth.
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    clearCookieValue(ACCESS_TOKEN_COOKIE_KEY);
    clearCookieValue(REFRESH_TOKEN_COOKIE_KEY);
  },
};
