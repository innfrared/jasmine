import styled from 'styled-components';
import Link from 'next/link';
import { typography } from '@/shared/styles/typography';

export const BreadcrumbNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  white-space: nowrap;
  overflow-x: hidden;
  padding: 1.8rem 0 1rem 0;
  border-bottom: solid 1px rgba(26, 20, 17, 0.08);
  width: 100%;
  margin-bottom: 2.75rem;
  margin-top: 0;
  ${typography.utility};
`;

export const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: rgba(34, 24, 19, 0.62);
  transition: color 0.24s ease;

  &:hover {
    color: #001f3f;
  }
`;

export const BreadcrumbText = styled.span`
  color: #1a1411;
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 0.55rem;
  color: rgba(34, 24, 19, 0.22);
`;
