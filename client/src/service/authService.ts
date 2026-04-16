import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { UserDto } from '@/shared/contracts/api';

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
  apiClient.post<{ user: UserDto }>(API_ENDPOINTS.auth.register, {
    body: payload,
  });

export const login = (payload: LoginPayload) =>
  apiClient.post<unknown>(API_ENDPOINTS.auth.login, { body: payload });

export const refreshSession = () =>
  apiClient.post<unknown>(API_ENDPOINTS.auth.refresh, {
    skipAuthRetry: true,
  });
