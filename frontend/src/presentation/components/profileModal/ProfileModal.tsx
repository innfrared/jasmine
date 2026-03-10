'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { updateProfileSession } from '../../../service/userService';
import {
  Overlay,
  Modal,
  CloseButton,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  SuccessMessage,
  SubmitButton,
  LogoutButton,
  UserInfo,
  UserEmail,
  UserName,
  ButtonGroup,
} from './ProfileModal.styles';

type ProfileModalProps = {
  onClose: () => void;
};

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const { user, updateUser, logout } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.first_name || '',
        lastName: user.last_name || '',
        phone: user.phone || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const updatedUser = await updateProfileSession({
        first_name: formData.firstName || null,
        last_name: formData.lastName || null,
        phone: formData.phone || null,
      });

      updateUser(updatedUser);
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : 'Failed to update profile. Please try again.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    void logout();
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!user) {
    return null;
  }

  const displayName =
    user.first_name || user.last_name
      ? `${user.first_name || ''} ${user.last_name || ''}`.trim()
      : 'User';

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal>
        <CloseButton onClick={onClose} aria-label="Close">
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

        <Title>My Profile</Title>

        {!isEditing ? (
          <>
            <UserInfo>
              <UserName>{displayName}</UserName>
              <UserEmail>{user.email}</UserEmail>
              {user.phone && (
                <div style={{ color: '#666', marginTop: '0.5rem' }}>
                  {user.phone}
                </div>
              )}
            </UserInfo>

            <ButtonGroup>
              <SubmitButton onClick={() => setIsEditing(true)}>
                Edit Profile
              </SubmitButton>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </ButtonGroup>
          </>
        ) : (
          <Form onSubmit={handleSubmit}>
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

            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}

            <ButtonGroup>
              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save Changes'}
              </SubmitButton>
              <LogoutButton
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setError('');
                  setSuccess('');
                  if (user) {
                    setFormData({
                      firstName: user.first_name || '',
                      lastName: user.last_name || '',
                      phone: user.phone || '',
                    });
                  }
                }}
              >
                Cancel
              </LogoutButton>
            </ButtonGroup>
          </Form>
        )}
      </Modal>
    </Overlay>
  );
};

export default ProfileModal;
