import { apiClient } from './apiClient';
import { TokenPair, UserDto } from './types';

export interface RegisterPayload {
  email: string;
  password: string;
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export const register = (payload: RegisterPayload) =>
  apiClient.post<{ user: UserDto; tokens: TokenPair }>('auth/register/', {
    body: payload,
  });

export const login = (payload: LoginPayload) =>
  apiClient.post<{ tokens: TokenPair }>('auth/login/', { body: payload });

export const refresh = (refreshToken: string) =>
  apiClient.post<TokenPair>('auth/refresh/', {
    body: { refresh: refreshToken },
  });
