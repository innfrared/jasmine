import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { TokenPair, UserDto } from './types';

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
  apiClient.post<{ user: UserDto; tokens: TokenPair }>(API_ENDPOINTS.auth.register, {
    body: payload,
  });

export const login = (payload: LoginPayload) =>
  apiClient.post<{ tokens: TokenPair }>(API_ENDPOINTS.auth.login, { body: payload });

export const refresh = (refreshToken: string) =>
  apiClient.post<TokenPair>(API_ENDPOINTS.auth.refresh, {
    body: { refresh: refreshToken },
  });
