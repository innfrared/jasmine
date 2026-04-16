'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { useAuth } from '../../../context/AuthContext';
import Header from '@/shared/layout/header/Header';
import Breadcrumb from '@/shared/layout/breadcrumb/Breadcrumb';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import {
  listAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
  type AddressPayload,
} from '../../../service/addressService';
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
  EmptyStateSubtext,
  SuccessMessage,
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

type ShippingAddress = {
  id: number;
  label?: string | null;
  full_name?: string | null;
  phone?: string | null;
  country?: string | null;
  city?: string | null;
  street?: string | null;
  apartment?: string | null;
  postal_code?: string | null;
  is_default?: boolean;
};

const ShippingScreen = () => {
  const { user } = useAuth();
  const { navigateLocalized } = useLocalizedRouting();
  const [addresses, setAddresses] = useState<ShippingAddress[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<ShippingAddress | null>(
    null
  );
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
    if (!user) {
      navigateLocalized('/');
      return;
    }
    void loadAddresses();
  }, [user, navigateLocalized]);

  const loadAddresses = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      const result = await listAddresses();
      setAddresses(result || []);
    } catch (requestError: unknown) {
      setErrorMessage(
        requestError instanceof Error
          ? requestError.message
          : 'Failed to load addresses.'
      );
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

  const handleEdit = (address: ShippingAddress) => {
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
        await deleteAddress(id);
        setAddresses(addresses.filter(address => address.id !== id));
        setSuccessMessage('Address deleted.');
      } catch (requestError: unknown) {
        setErrorMessage(
          requestError instanceof Error
            ? requestError.message
            : 'Failed to delete address.'
        );
      }
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

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
        await updateAddress(editingAddress.id, payload);
        if (payload.is_default) {
          await setDefaultAddress(editingAddress.id);
        }
        setSuccessMessage('Address updated.');
      } else {
        const created = await createAddress(payload);
        if (payload.is_default && created?.id) {
          await setDefaultAddress(created.id);
        }
        setSuccessMessage('Address added.');
      }

      setIsModalOpen(false);
      await loadAddresses();
    } catch (requestError: unknown) {
      setErrorMessage(
        requestError instanceof Error
          ? requestError.message
          : 'Failed to save address.'
      );
    }
  };

  const handleSetDefault = async (id: number) => {
    setErrorMessage('');
    setSuccessMessage('');
    try {
      await setDefaultAddress(id);
      setSuccessMessage('Default address updated.');
      await loadAddresses();
    } catch (requestError: unknown) {
      setErrorMessage(
        requestError instanceof Error
          ? requestError.message
          : 'Failed to set default address.'
      );
    }
  };

  const getColorsFromStorage = () => {
    if (typeof window !== 'undefined') {
      const primaryColor =
        localStorage.getItem('theme_primary') ||
        'linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)';
      const secondaryColor =
        localStorage.getItem('theme_secondary') || '#001f3f';
      return { primaryColor, secondaryColor };
    }
    return {
      primaryColor: 'linear-gradient(135deg, #c39a37 0%, #b8860b 100%)',
      secondaryColor: '#001f3f',
    };
  };

  const { primaryColor, secondaryColor } = getColorsFromStorage();

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
              <EmptyStateSubtext>
                Add your first shipping address to get started
              </EmptyStateSubtext>
            </EmptyState>
          ) : (
            <AddressList>
              {addresses.map(address => (
                <AddressCard key={address.id}>
                  <AddressHeader>
                    <AddressLabel>{address.label || 'Address'}</AddressLabel>
                    {address.is_default ? (
                      <AddressDefaultBadge>Default</AddressDefaultBadge>
                    ) : null}
                  </AddressHeader>
                  <AddressDetails>
                    <AddressLine>{address.full_name}</AddressLine>
                    <AddressLine>{address.street}</AddressLine>
                    {address.apartment ? (
                      <AddressLine>{address.apartment}</AddressLine>
                    ) : null}
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
                    {!address.is_default ? (
                      <EditButton onClick={() => handleSetDefault(address.id)}>
                        Set Default
                      </EditButton>
                    ) : null}
                    <DeleteButton onClick={() => handleDelete(address.id)}>
                      Delete
                    </DeleteButton>
                  </AddressActions>
                </AddressCard>
              ))}
            </AddressList>
          )}
          {successMessage ? (
            <SuccessMessage>{successMessage}</SuccessMessage>
          ) : null}
        </ShippingContent>
      </ShippingContainer>

      {isModalOpen ? (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={event => event.stopPropagation()}>
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
                  onChange={event =>
                    setFormData({ ...formData, label: event.target.value })
                  }
                  placeholder="Home"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Full Name</Label>
                <Input
                  value={formData.full_name}
                  onChange={event =>
                    setFormData({ ...formData, full_name: event.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Phone</Label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={event =>
                    setFormData({ ...formData, phone: event.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Country</Label>
                <Input
                  value={formData.country}
                  onChange={event =>
                    setFormData({ ...formData, country: event.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>City</Label>
                <Input
                  value={formData.city}
                  onChange={event =>
                    setFormData({ ...formData, city: event.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Street Address</Label>
                <Input
                  value={formData.street}
                  onChange={event =>
                    setFormData({ ...formData, street: event.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Apartment/Suite (optional)</Label>
                <Input
                  value={formData.apartment}
                  onChange={event =>
                    setFormData({ ...formData, apartment: event.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Postal Code</Label>
                <Input
                  value={formData.postal_code}
                  onChange={event =>
                    setFormData({
                      ...formData,
                      postal_code: event.target.value,
                    })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <input
                    type="checkbox"
                    checked={formData.is_default}
                    onChange={event =>
                      setFormData({
                        ...formData,
                        is_default: event.target.checked,
                      })
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
      ) : null}
    </>
  );
};

export default ShippingScreen;
