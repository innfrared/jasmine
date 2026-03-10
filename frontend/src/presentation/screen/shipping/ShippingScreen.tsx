'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import {
  listAddressesSession,
  createAddressSession,
  updateAddressSession,
  deleteAddressSession,
  setDefaultAddressSession,
  type AddressPayload,
} from '../../../service/addressService';
import type { AddressDto } from '../../../service/types';
import {
  ShippingContainer,
  ShippingContent,
  ShippingHeader,
  ShippingTitle,
  AddressList,
  AddressCard,
  AddressHeader,
  AddressLabel,
  AddressDefaultBadge,
  AddressDetails,
  AddressLine,
  AddressActions,
  EditButton,
  DeleteButton,
  AddButton,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  AddressForm,
  FormGroup,
  Label,
  Input,
  FormActions,
  SaveButton,
  CancelButton,
} from './ShippingScreen.styles';
import { normalizeLocale, withLocale } from '../../../utils/locale';
import { useThemeColors } from '../../hooks/useThemeColors';

const ShippingScreen: React.FC = () => {
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);
  const [addresses, setAddresses] = useState<AddressDto[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<AddressDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    label: '',
    full_name: '',
    phone: '',
    country: '',
    city: '',
    street: '',
    apartment: '',
    postal_code: '',
    is_default: false,
  });

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push(withLocale(locale, '/login'));
      return;
    }
    loadAddresses();
  }, [user, authLoading, router, locale]);

  const loadAddresses = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      const result = await listAddressesSession();
      setAddresses(Array.isArray(result) ? result : []);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Failed to load addresses.';
      setErrorMessage(message);
      setAddresses([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingAddress(null);
    setErrorMessage('');
    setSuccessMessage('');
    setFormData({
      label: '',
      full_name: '',
      phone: '',
      country: '',
      city: '',
      street: '',
      apartment: '',
      postal_code: '',
      is_default: false,
    });
    setIsModalOpen(true);
  };

  const handleEdit = (address: AddressDto) => {
    setErrorMessage('');
    setSuccessMessage('');
    setEditingAddress(address);
    setFormData({
      label: address.label || '',
      full_name: address.full_name || '',
      phone: address.phone || '',
      country: address.country || '',
      city: address.city || '',
      street: address.street || '',
      apartment: address.apartment || '',
      postal_code: address.postal_code || '',
      is_default: address.is_default || false,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setErrorMessage('');
      setSuccessMessage('');
      try {
        await deleteAddressSession(id);
        setAddresses(addresses.filter(addr => addr.id !== id));
        setSuccessMessage('Address deleted.');
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : 'Failed to delete address.';
        setErrorMessage(message);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const requiredFields = [
      formData.label,
      formData.full_name,
      formData.phone,
      formData.country,
      formData.city,
      formData.street,
      formData.postal_code,
    ];
    if (requiredFields.some(value => !String(value).trim())) {
      setErrorMessage('Please fill all required fields.');
      return;
    }

    const payload: AddressPayload = {
      label: formData.label,
      full_name: formData.full_name,
      phone: formData.phone,
      country: formData.country,
      city: formData.city,
      street: formData.street,
      apartment: formData.apartment || null,
      postal_code: formData.postal_code,
      is_default: formData.is_default,
    };

    try {
      if (editingAddress?.id) {
        await updateAddressSession(editingAddress.id, payload);
        if (payload.is_default) {
          await setDefaultAddressSession(editingAddress.id);
        }
        setSuccessMessage('Address updated.');
      } else {
        const created = await createAddressSession(payload);
        if (payload.is_default && created?.id) {
          await setDefaultAddressSession(created.id);
        }
        setSuccessMessage('Address added.');
      }

      setIsModalOpen(false);
      await loadAddresses();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Failed to save address.';
      setErrorMessage(message);
    }
  };

  const handleSetDefault = async (id: number) => {
    setErrorMessage('');
    setSuccessMessage('');
    try {
      await setDefaultAddressSession(id);
      setSuccessMessage('Default address updated.');
      await loadAddresses();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Failed to set default address.';
      setErrorMessage(message);
    }
  };

  const { primaryColor, secondaryColor } = useThemeColors();

  return (
    <>
      <Header primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <ShippingContainer>
        <ShippingContent>
          <Breadcrumb />
          <ShippingHeader>
            <ShippingTitle>Shipping Information</ShippingTitle>
            <AddButton onClick={handleAdd}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Address
            </AddButton>
          </ShippingHeader>

          {loading ? (
            <EmptyState>
              <EmptyStateText>Loading addresses...</EmptyStateText>
            </EmptyState>
          ) : errorMessage ? (
            <EmptyState>
              <EmptyStateText>{errorMessage}</EmptyStateText>
            </EmptyState>
          ) : addresses.length === 0 ? (
            <EmptyState>
              <EmptyStateIcon>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </EmptyStateIcon>
              <EmptyStateText>No shipping addresses</EmptyStateText>
              <EmptyStateText
                style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  marginTop: '0.5rem',
                }}
              >
                Add your first shipping address to get started
              </EmptyStateText>
            </EmptyState>
          ) : (
            <AddressList>
              {addresses.map(address => (
                <AddressCard key={address.id}>
                  <AddressHeader>
                    <AddressLabel>{address.label || 'Address'}</AddressLabel>
                    {address.is_default && (
                      <AddressDefaultBadge>Default</AddressDefaultBadge>
                    )}
                  </AddressHeader>
                  <AddressDetails>
                    <AddressLine>{address.full_name}</AddressLine>
                    <AddressLine>{address.street}</AddressLine>
                    {address.apartment && (
                      <AddressLine>{address.apartment}</AddressLine>
                    )}
                    <AddressLine>
                      {address.city}, {address.postal_code}
                    </AddressLine>
                    <AddressLine>{address.country}</AddressLine>
                    <AddressLine>{address.phone}</AddressLine>
                  </AddressDetails>
                  <AddressActions>
                    <EditButton onClick={() => handleEdit(address)}>
                      Edit
                    </EditButton>
                    {!address.is_default && (
                      <EditButton onClick={() => handleSetDefault(address.id)}>
                        Set Default
                      </EditButton>
                    )}
                    <DeleteButton onClick={() => handleDelete(address.id)}>
                      Delete
                    </DeleteButton>
                  </AddressActions>
                </AddressCard>
              ))}
            </AddressList>
          )}
          {successMessage && (
            <EmptyStateText style={{ marginTop: '1rem' }}>
              {successMessage}
            </EmptyStateText>
          )}
        </ShippingContent>
      </ShippingContainer>
      <Footer />

      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                {editingAddress ? 'Edit Address' : 'Add New Address'}
              </ModalTitle>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </CloseButton>
            </ModalHeader>
            <AddressForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Label (e.g., Home, Work)</Label>
                <Input
                  value={formData.label}
                  onChange={e =>
                    setFormData({ ...formData, label: e.target.value })
                  }
                  placeholder="Home"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Full Name</Label>
                <Input
                  value={formData.full_name}
                  onChange={e =>
                    setFormData({ ...formData, full_name: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Phone</Label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={e =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Country</Label>
                <Input
                  value={formData.country}
                  onChange={e =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>City</Label>
                <Input
                  value={formData.city}
                  onChange={e =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Street Address</Label>
                <Input
                  value={formData.street}
                  onChange={e =>
                    setFormData({ ...formData, street: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Apartment/Suite (optional)</Label>
                <Input
                  value={formData.apartment}
                  onChange={e =>
                    setFormData({ ...formData, apartment: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Postal Code</Label>
                <Input
                  value={formData.postal_code}
                  onChange={e =>
                    setFormData({ ...formData, postal_code: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <input
                    type="checkbox"
                    checked={formData.is_default}
                    onChange={e =>
                      setFormData({ ...formData, is_default: e.target.checked })
                    }
                  />
                  Set as default address
                </Label>
              </FormGroup>
              <FormActions>
                <SaveButton type="submit">Save</SaveButton>
                <CancelButton
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </CancelButton>
              </FormActions>
            </AddressForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default ShippingScreen;
