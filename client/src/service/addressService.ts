import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { AddressDto } from './types';

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

export const listAddresses = (token: string) =>
  apiClient.get<AddressDto[]>(API_ENDPOINTS.addresses.list, { token });

export const createAddress = (payload: AddressPayload, token: string) =>
  apiClient.post<AddressDto>(API_ENDPOINTS.addresses.list, {
    body: payload,
    token,
  });

export const updateAddress = (
  addressId: number,
  payload: AddressPayload,
  token: string
) =>
  apiClient.patch<AddressDto>(API_ENDPOINTS.addresses.details(addressId), {
    body: payload,
    token,
  });

export const deleteAddress = (addressId: number, token: string) =>
  apiClient.delete<undefined>(API_ENDPOINTS.addresses.details(addressId), {
    token,
  });

export const setDefaultAddress = (addressId: number, token: string) =>
  apiClient.post<{ message: string }>(API_ENDPOINTS.addresses.setDefault(addressId), {
    token,
  });
