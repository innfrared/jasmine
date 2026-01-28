import { apiClient } from './apiClient';
import { UserDto } from './types';

export interface UpdateProfilePayload {
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
}

export const getMe = (token: string) =>
  apiClient.get<UserDto>('me/', { token });

export const updateProfile = (payload: UpdateProfilePayload, token: string) =>
  apiClient.patch<UserDto>('me/', {
    body: payload,
    token,
  });
