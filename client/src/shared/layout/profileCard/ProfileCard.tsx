import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../context/AuthContext';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import {
  ProfileCardContainer,
  ProfileHeader,
  ProfileIcon,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
  ProfileArrow,
  ProfileMenuItem,
  ProfileMenuDivider,
  LogoutButton,
  NotLoggedInMessage,
  LoginSignupButton,
} from './ProfileCard.styles';

type ProfileCardProps = {
  onClose: () => void;
  isScrolled: boolean;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
};

const ProfileCard = ({
  onClose,
  isScrolled,
  onOpenLogin,
  onOpenRegister,
}: ProfileCardProps) => {
  const { user, logout, isAuthenticated } = useAuth();
  const { t } = useTranslation<'translation'>();
  const { navigateLocalized } = useLocalizedRouting();

  const handleLoginClick = () => {
    onClose();
    onOpenLogin();
  };

  const handleRegisterClick = () => {
    onClose();
    onOpenRegister();
  };

  if (!isAuthenticated || !user) {
    return (
      <ProfileCardContainer $isScrolled={isScrolled}>
        <NotLoggedInMessage>{t('profileCard.notLoggedIn')}</NotLoggedInMessage>
        <ProfileMenuDivider />
        <LoginSignupButton onClick={handleLoginClick}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
          <span>{t('auth.login.action')}</span>
        </LoginSignupButton>
        <LoginSignupButton onClick={handleRegisterClick}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" y1="8" x2="20" y2="14" />
            <line x1="23" y1="11" x2="17" y2="11" />
          </svg>
          <span>{t('auth.register.action')}</span>
        </LoginSignupButton>
      </ProfileCardContainer>
    );
  }

  const displayName =
    user.first_name || user.last_name
      ? `${user.first_name || ''} ${user.last_name || ''}`.trim()
      : 'User';

  const getInitials = () => {
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

  const handleProfileClick = () => {
    onClose();
    navigateLocalized('/profile');
  };

  const handleOrderHistoryClick = () => {
    onClose();
    navigateLocalized('/orders');
  };

  const handleShippingClick = () => {
    onClose();
    navigateLocalized('/shipping');
  };

  const handleLogout = () => {
    logout();
    onClose();
    navigateLocalized('/');
  };

  return (
    <ProfileCardContainer $isScrolled={isScrolled}>
      <ProfileHeader onClick={handleProfileClick}>
        <ProfileIcon>{getInitials()}</ProfileIcon>
        <ProfileInfo>
          <ProfileName>{displayName}</ProfileName>
          <ProfileEmail>{user.email}</ProfileEmail>
        </ProfileInfo>
        <ProfileArrow>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </ProfileArrow>
      </ProfileHeader>

      <ProfileMenuDivider />

      <ProfileMenuItem onClick={handleOrderHistoryClick}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        <span>{t('profileCard.orderHistory')}</span>
      </ProfileMenuItem>

      <ProfileMenuItem onClick={handleShippingClick}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>{t('profileCard.shippingInformation')}</span>
      </ProfileMenuItem>

      <ProfileMenuDivider />

      <LogoutButton onClick={handleLogout}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        <span>{t('profileCard.logout')}</span>
      </LogoutButton>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
