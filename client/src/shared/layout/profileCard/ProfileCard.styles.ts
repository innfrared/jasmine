import styled, { keyframes } from 'styled-components';
import { down } from '@/shared/styles/breakpoints';
import { typography } from '@/shared/styles/typography';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProfileCardContainer = styled.div<{ $isScrolled: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  padding: 0;
  z-index: 10001;
  animation: ${slideDown} 0.2s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;

  ${down.tablet} {
    right: 0;
    left: auto;
    min-width: 260px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ProfileIcon = styled.div`
  ${typography.bodyStrong}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #001f3f 0%, #003366 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ProfileInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ProfileName = styled.div`
  ${typography.bodySmallStrong}
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileEmail = styled.div`
  ${typography.bodySmall}
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileArrow = styled.div`
  color: #999;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  ${ProfileHeader}:hover & {
    transform: translateX(4px);
    color: #001f3f;
  }
`;

export const ProfileMenuDivider = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 0.5rem 0;
`;

export const ProfileMenuItem = styled.button`
  ${typography.bodySmallStrong}
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  border-radius: 0;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #f5f5f5;
    color: #001f3f;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: #666;
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #001f3f;
  }

  span {
    flex: 1;
  }
`;

export const LogoutButton = styled.button`
  ${typography.bodySmallStrong}
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #cc0c5c;
  border-radius: 0;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #fee;
    color: #cc0c5c;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #cc0c5c;
  }

  span {
    flex: 1;
  }
`;

export const NotLoggedInMessage = styled.div`
  ${typography.bodySmall}
  color: #666;
  text-align: center;
  margin: 0;
  padding: 1rem;
`;

export const LoginSignupButton = styled.button`
  ${typography.bodySmallStrong}
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  border-radius: 0;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #f5f5f5;
    color: #001f3f;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: #666;
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #001f3f;
  }

  span {
    flex: 1;
  }
`;
