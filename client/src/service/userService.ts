import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { UserDto } from '@/shared/contracts/api';

export interface UpdateProfilePayload {
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
}

export const getMe = () => apiClient.get<UserDto>(API_ENDPOINTS.user.me);

export const updateProfile = (payload: UpdateProfilePayload) =>
  apiClient.patch<UserDto>(API_ENDPOINTS.user.me, {
    body: payload,
  });
