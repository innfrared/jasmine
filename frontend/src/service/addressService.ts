import { apiClient, type RequestOptions } from './apiClient';
import { sessionFetch } from './sessionClient';
import { AddressDto } from './types';

export interface AddressPayload {
  label: string;
  full_name: string;
  phone: string;
  country: string;
  city: string;
  street: string;
  apartment?: string | null;
  postal_code: string;
  is_default?: boolean;
}

export const listAddresses = (token: string, options: RequestOptions = {}) =>
  apiClient.get<AddressDto[]>('addresses/', { token, ...options });

export const createAddress = (
  payload: AddressPayload,
  token: string,
  options: RequestOptions = {}
) =>
  apiClient.post<AddressDto>('addresses/', {
    body: payload,
    token,
    ...options,
  });

export const updateAddress = (
  addressId: number,
  payload: AddressPayload,
  token: string,
  options: RequestOptions = {}
) =>
  apiClient.patch<AddressDto>(`addresses/${addressId}/`, {
    body: payload,
    token,
    ...options,
  });

export const deleteAddress = (
  addressId: number,
  token: string,
  options: RequestOptions = {}
) =>
  apiClient.delete<undefined>(`addresses/${addressId}/`, { token, ...options });

export const setDefaultAddress = (
  addressId: number,
  token: string,
  options: RequestOptions = {}
) =>
  apiClient.post<{ message: string }>(`addresses/${addressId}/set-default/`, {
    token,
    ...options,
  });

export const listAddressesSession = () =>
  sessionFetch<AddressDto[]>('/api/addresses');

export const createAddressSession = (payload: AddressPayload) =>
  sessionFetch<AddressDto>('/api/addresses', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

export const updateAddressSession = (
  addressId: number,
  payload: AddressPayload
) =>
  sessionFetch<AddressDto>(`/api/addresses/${addressId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });

export const deleteAddressSession = (addressId: number) =>
  sessionFetch<{ ok: boolean }>(`/api/addresses/${addressId}`, {
    method: 'DELETE',
  });

export const setDefaultAddressSession = (addressId: number) =>
  sessionFetch<{ message: string }>(`/api/addresses/${addressId}/default`, {
    method: 'POST',
  });
