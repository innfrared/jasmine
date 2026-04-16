'use client';

import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { updateProfile } from '../../../service/userService';
import Header from '@/shared/layout/header/Header';
import Breadcrumb from '@/shared/layout/breadcrumb/Breadcrumb';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileIcon,
  ProfileTitle,
  ProfileForm,
  FormSection,
  SectionTitle,
  InputGroup,
  Label,
  Input,
  ReadOnlyInput,
  ButtonGroup,
  SaveButton,
  CancelButton,
  ErrorMessage,
  SuccessMessage,
} from './ProfileScreen.styles';

const ProfileScreen = () => {
  const { user, updateUser } = useAuth();
  const { navigateLocalized } = useLocalizedRouting();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigateLocalized('/');
      return;
    }

    setFormData({
      firstName: user.first_name || '',
      lastName: user.last_name || '',
      email: user.email || '',
      phone: user.phone || '',
    });
  }, [user, navigateLocalized]);

  const getInitials = () => {
    if (!user) return 'U';
    if (user.first_name && user.last_name) {
      return `${user.first_name[0]}${user.last_name[0]}`.toUpperCase();
    }
    if (user.first_name) {
      return user.first_name[0].toUpperCase();
    }
    if (user.email) {
      return user.email[0].toUpperCase();
    }
    return 'U';
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const updatedUser = await updateProfile({
        first_name: formData.firstName || null,
        last_name: formData.lastName || null,
        phone: formData.phone || null,
      });

      updateUser(updatedUser);
      setSuccess('Profile updated successfully!');
    } catch (requestError: unknown) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Failed to update profile. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (user) {
      setFormData({
        firstName: user.first_name || '',
        lastName: user.last_name || '',
        email: user.email || '',
        phone: user.phone || '',
      });
    }
    setError('');
    setSuccess('');
  };

  if (!user) return null;

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
      <ProfileContainer>
        <ProfileContent>
          <Breadcrumb />
          <ProfileHeader>
            <ProfileIcon>{getInitials()}</ProfileIcon>
            <ProfileTitle>My Profile</ProfileTitle>
          </ProfileHeader>

          <ProfileForm onSubmit={handleSubmit}>
            <FormSection>
              <SectionTitle>Personal Information</SectionTitle>

              <InputGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="email">Email</Label>
                <ReadOnlyInput
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  disabled
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </InputGroup>
            </FormSection>

            {error ? <ErrorMessage>{error}</ErrorMessage> : null}
            {success ? <SuccessMessage>{success}</SuccessMessage> : null}

            <ButtonGroup>
              <SaveButton type="submit" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save Changes'}
              </SaveButton>
              <CancelButton type="button" onClick={handleCancel}>
                Cancel
              </CancelButton>
            </ButtonGroup>
          </ProfileForm>
        </ProfileContent>
      </ProfileContainer>
    </>
  );
};

export default ProfileScreen;
