import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { UserDto } from './types';

export interface UpdateProfilePayload {
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
}

export const getMe = (token: string) =>
  apiClient.get<UserDto>(API_ENDPOINTS.user.me, { token });

export const updateProfile = (payload: UpdateProfilePayload, token: string) =>
  apiClient.patch<UserDto>(API_ENDPOINTS.user.me, {
    body: payload,
    token,
  });
