import { apiClient, type RequestOptions } from './apiClient';
import { sessionFetch } from './sessionClient';
import { UserDto } from './types';

export interface UpdateProfilePayload {
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
}

export const getMe = (token: string, options: RequestOptions = {}) =>
  apiClient.get<UserDto>('me/', { token, ...options });

export const updateProfile = (payload: UpdateProfilePayload, token: string) =>
  apiClient.patch<UserDto>('me/', {
    body: payload,
    token,
  });

export const getMeSession = () => sessionFetch<UserDto>('/api/me');

export const updateProfileSession = (payload: UpdateProfilePayload) =>
  sessionFetch<UserDto>('/api/me', {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
