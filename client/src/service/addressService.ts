import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { AddressDto } from '@/shared/contracts/api';

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

export const listAddresses = () =>
  apiClient.get<AddressDto[]>(API_ENDPOINTS.addresses.list);

export const createAddress = (payload: AddressPayload) =>
  apiClient.post<AddressDto>(API_ENDPOINTS.addresses.list, {
    body: payload,
  });

export const updateAddress = (addressId: number, payload: AddressPayload) =>
  apiClient.patch<AddressDto>(API_ENDPOINTS.addresses.details(addressId), {
    body: payload,
  });

export const deleteAddress = (addressId: number) =>
  apiClient.delete<undefined>(API_ENDPOINTS.addresses.details(addressId));

export const setDefaultAddress = (addressId: number) =>
  apiClient.post<{ message: string }>(
    API_ENDPOINTS.addresses.setDefault(addressId)
  );
