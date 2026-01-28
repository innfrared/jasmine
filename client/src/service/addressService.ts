import { apiClient } from './apiClient';
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

export const listAddresses = (token: string) =>
  apiClient.get<AddressDto[]>('addresses/', { token });

export const createAddress = (payload: AddressPayload, token: string) =>
  apiClient.post<AddressDto>('addresses/', {
    body: payload,
    token,
  });

export const updateAddress = (
  addressId: number,
  payload: AddressPayload,
  token: string
) =>
  apiClient.patch<AddressDto>(`addresses/${addressId}/`, {
    body: payload,
    token,
  });

export const deleteAddress = (addressId: number, token: string) =>
  apiClient.delete<undefined>(`addresses/${addressId}/`, { token });

export const setDefaultAddress = (addressId: number, token: string) =>
  apiClient.post<{ message: string }>(
    `addresses/${addressId}/set-default/`,
    { token }
  );
