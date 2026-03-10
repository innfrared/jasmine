import type { LoginPayload, RegisterPayload } from './authService';
import type { UserDto } from './types';
import { sessionFetch } from './sessionClient';

export const loginSession = (payload: LoginPayload) =>
  sessionFetch<{ user: UserDto }>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

export const registerSession = (payload: RegisterPayload) =>
  sessionFetch<{ user: UserDto | null }>('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

export const logoutSession = () =>
  sessionFetch<{ ok: boolean }>('/api/auth/logout', { method: 'POST' });

export const getSessionUser = () =>
  sessionFetch<{ user: UserDto | null }>('/api/auth/session', {
    method: 'GET',
  });
