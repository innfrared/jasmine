import type { AddressDto } from '../../service/types';

export interface ShippingAddress {
  id: number;
  label: string;
  fullName: string;
  phone: string;
  country: string;
  city: string;
  street: string;
  apartment: string | null;
  postalCode: string;
  isDefault: boolean;
  createdAt: string;
}

export const mapAddressDtoToShippingAddress = (
  address: AddressDto
): ShippingAddress => ({
  id: address.id,
  label: address.label,
  fullName: address.full_name,
  phone: address.phone,
  country: address.country,
  city: address.city,
  street: address.street,
  apartment: address.apartment,
  postalCode: address.postal_code,
  isDefault: address.is_default,
  createdAt: address.created_at,
});
